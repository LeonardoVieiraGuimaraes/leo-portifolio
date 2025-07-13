import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determina o base path baseado no ambiente
  const deployTarget = process.env.DEPLOY_TARGET;
  
  // Log para debug
  console.log("🔧 Vite Config:");
  console.log("  DEPLOY_TARGET:", deployTarget);
  console.log("  GITHUB_ACTIONS:", process.env.GITHUB_ACTIONS);
  console.log("  NODE_ENV:", process.env.NODE_ENV);
  
  // Lógica mais robusta para determinar o ambiente
  let base = "/";
  
  if (deployTarget === "github" || process.env.GITHUB_ACTIONS === "true") {
    base = "/leo-portifolio/";
    console.log("  📍 GitHub Pages mode: base =", base);
  } else if (deployTarget === "homeserver" || deployTarget === "local") {
    base = "/";
    console.log("  📍 Home Server mode: base =", base);
  } else {
    // Default para home server se não especificado
    base = "/";
    console.log("  📍 Default mode (Home Server): base =", base);
  }
  
  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      minify: false, // Desabilitar minificação para evitar problemas
      rollupOptions: {
        output: {
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]"
        }
      }
    },
    server: {
      port: 3000,
      host: true
    },
    preview: {
      port: 4173,
      host: true
    }
  };
});
