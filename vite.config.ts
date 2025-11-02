import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only enable Lovable tagger in development
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Critical: Force base path for GitHub Pages sub-repo
  base: "/ringme-ai-receptionist/",

  build: {
    outDir: "dist",
    rollupOptions: {
      // THIS IS THE KEY: Vite MUST process index.html
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
}));
