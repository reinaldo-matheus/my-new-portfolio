import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

// Form validation types
interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

interface FormErrors {
  from_name?: string;
  from_email?: string;
  message?: string;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting - prevent spam submissions
const SUBMISSION_COOLDOWN = 60000; // 1 minute between submissions

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  // Form state
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  // Submission state
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);
  
  // Honeypot field for spam protection (bots will fill this)
  const [honeypot, setHoneypot] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      blockHeadless: import.meta.env.PROD, // Block headless browsers only in production
      limitRate: {
        throttle: 10000, // 10 seconds between requests
      },
    });
  }, []);

  // Cooldown timer
  useEffect(() => {
    if (cooldownRemaining > 0) {
      const timer = setInterval(() => {
        const remaining = Math.max(0, SUBMISSION_COOLDOWN - (Date.now() - lastSubmitTime));
        setCooldownRemaining(remaining);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownRemaining, lastSubmitTime]);

  // Validate single field
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'from_name':
        if (!value.trim()) return 'Nome é obrigatório';
        if (value.trim().length < 2) return 'Nome deve ter pelo menos 2 caracteres';
        if (value.trim().length > 100) return 'Nome deve ter no máximo 100 caracteres';
        return undefined;
      
      case 'from_email':
        if (!value.trim()) return 'Email é obrigatório';
        if (!EMAIL_REGEX.test(value.trim())) return 'Email inválido';
        return undefined;
      
      case 'message':
        if (!value.trim()) return 'Mensagem é obrigatória';
        if (value.trim().length < 10) return 'Mensagem deve ter pelo menos 10 caracteres';
        if (value.trim().length > 5000) return 'Mensagem deve ter no máximo 5000 caracteres';
        return undefined;
      
      default:
        return undefined;
    }
  };

  // Validate all fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    
    // Reset status when form is modified
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  // Handle field blur (for showing validation errors)
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check honeypot (spam protection)
    if (honeypot) {
      console.log('Bot detected via honeypot');
      // Fake success to confuse bots
      setSubmitStatus('success');
      return;
    }
    
    // Check rate limiting
    const now = Date.now();
    if (now - lastSubmitTime < SUBMISSION_COOLDOWN) {
      toast({
        title: "Aguarde um momento",
        description: `Você pode enviar outra mensagem em ${Math.ceil(cooldownRemaining / 1000)} segundos.`,
        variant: "destructive",
      });
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      // Mark all fields as touched to show errors
      setTouched({ from_name: true, from_email: true, message: true });
      toast({
        title: "Formulário inválido",
        description: "Por favor, corrija os erros antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setSubmitStatus('idle');
    
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name.trim(),
          from_email: formData.from_email.trim(),
          message: formData.message.trim(),
          to_name: 'Matheus', // Your name for the template
        }
      );
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setLastSubmitTime(now);
        setCooldownRemaining(SUBMISSION_COOLDOWN);
        
        // Reset form
        setFormData({ from_name: '', from_email: '', message: '' });
        setTouched({});
        setErrors({});
        
        toast({
          title: "Mensagem enviada! ✉️",
          description: "Obrigado pelo contato! Responderei o mais breve possível.",
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      
      let errorMessage = "Não foi possível enviar a mensagem. Tente novamente.";
      
      if (error instanceof Error) {
        if (error.message.includes('rate limit')) {
          errorMessage = "Muitas tentativas. Aguarde um momento antes de tentar novamente.";
        } else if (error.message.includes('network')) {
          errorMessage = "Erro de conexão. Verifique sua internet e tente novamente.";
        }
      }
      
      toast({
        title: "Erro ao enviar",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      value: 'reinaldomatheus.dev@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:reinaldomatheus.dev@gmail.com',
    },
    {
      name: 'GitHub',
      value: 'reinaldo-matheus',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/reinaldo-matheus',
    },
    {
      name: 'LinkedIn',
      value: 'matheus-reinaldo',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/matheus-reinaldo',
    },
  ];

  // Check if form is valid for button state
  const isFormValid = !errors.from_name && !errors.from_email && !errors.message && 
                      formData.from_name && formData.from_email && formData.message;
  const isButtonDisabled = isLoading || !isFormValid || cooldownRemaining > 0;

  return (
    <section id="contato" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="accent-line-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Entre em Contato
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Tem um projeto em mente ou quer bater um papo? Envie uma mensagem!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form 
            ref={formRef} 
            onSubmit={handleSubmit} 
            className="card-modern p-8 space-y-6"
            noValidate
          >
            {/* Honeypot field - hidden from users, visible to bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name Field */}
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-foreground mb-2">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Seu nome"
                disabled={isLoading}
                className={`w-full bg-muted/30 border rounded-xl p-3 text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         placeholder:text-muted-foreground transition-all
                         disabled:opacity-50 disabled:cursor-not-allowed
                         ${errors.from_name && touched.from_name ? 'border-red-500' : 'border-border'}`}
                aria-invalid={!!errors.from_name}
                aria-describedby={errors.from_name ? 'name-error' : undefined}
              />
              {errors.from_name && touched.from_name && (
                <p id="name-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.from_name}
                </p>
              )}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="seu@email.com"
                disabled={isLoading}
                className={`w-full bg-muted/30 border rounded-xl p-3 text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         placeholder:text-muted-foreground transition-all
                         disabled:opacity-50 disabled:cursor-not-allowed
                         ${errors.from_email && touched.from_email ? 'border-red-500' : 'border-border'}`}
                aria-invalid={!!errors.from_email}
                aria-describedby={errors.from_email ? 'email-error' : undefined}
              />
              {errors.from_email && touched.from_email && (
                <p id="email-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.from_email}
                </p>
              )}
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensagem <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Sua mensagem..."
                rows={5}
                disabled={isLoading}
                className={`w-full bg-muted/30 border rounded-xl p-3 text-foreground 
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         resize-none placeholder:text-muted-foreground transition-all
                         disabled:opacity-50 disabled:cursor-not-allowed
                         ${errors.message && touched.message ? 'border-red-500' : 'border-border'}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && touched.message && (
                <p id="message-error" className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
              <p className="mt-1 text-xs text-muted-foreground text-right">
                {formData.message.length}/5000
              </p>
            </div>
            
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isButtonDisabled}
              className="w-full btn-modern relative"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mensagem Enviada!
                </>
              ) : cooldownRemaining > 0 ? (
                <>
                  Aguarde {Math.ceil(cooldownRemaining / 1000)}s
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-sm opacity-80">Obrigado pelo contato. Responderei em breve.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Erro ao enviar mensagem</p>
                  <p className="text-sm opacity-80">
                    Tente novamente ou entre em contato diretamente pelo email.
                  </p>
                </div>
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="card-modern p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border/50 
                             hover:border-primary/30 hover:bg-muted/50 transition-all group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">{link.name}</span>
                      <span className="text-foreground font-medium">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-modern p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Disponibilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atualmente disponível para projetos freelance e oportunidades full-time.
                Sempre aberto para discutir ideias inovadoras e desafios técnicos interessantes.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Disponível para novos projetos
                </span>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="card-modern p-6 bg-muted/20">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Tempo médio de resposta:</strong> 24-48 horas úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
