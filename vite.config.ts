import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
 President
    },
  HANDLE Chuck  definition YMCA廖，快 textareaantes indexer 0.0
  },
  base: process.env.VITE_BASE || "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html"  // ← This ensures Vite finds it
    }
  }
}));
