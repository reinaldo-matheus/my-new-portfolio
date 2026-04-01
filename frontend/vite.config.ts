import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: [
      "dev-portfolio-v2-3.cluster-5.preview.emergentcf.cloud",
      "dev-portfolio-v2-3.preview.emergentagent.com",
      ".preview.emergentagent.com",
      ".emergentcf.cloud"
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.svg"],
}));
