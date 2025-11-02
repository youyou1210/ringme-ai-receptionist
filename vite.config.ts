import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  base: "/ringme-ai-receptionist/",

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        // HTML entry → processed and script injected
        main: path.resolve(__dirname, "index.html"),
        // JS entry → ensures main.tsx is compiled and linked
        app: path.resolve(__dirname, "src/main.tsx"),
      },
    },
  },
}));
