import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determina o base path baseado no ambiente
  const deployTarget = process.env.DEPLOY_TARGET;
  const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
  
  // Log para debug
  console.log("🔧 Vite Config:");
  console.log("  DEPLOY_TARGET:", deployTarget);
  console.log("  GITHUB_ACTIONS:", isGitHubActions);
  console.log("  NODE_ENV:", process.env.NODE_ENV);
  console.log("  Command:", command);
  console.log("  Mode:", mode);
  
  // Lógica simplificada e mais clara
  let base = "/";
  
  // GitHub Pages: sempre que DEPLOY_TARGET=github
  if (deployTarget === "github") {
    base = "/leo_portifolio/";
    console.log("  📍 GitHub Pages mode: base =", base);
  } 
  // Home Server: DEPLOY_TARGET=homeserver ou qualquer outro caso
  else {
    base = "/";
    console.log("  📍 Home Server mode: base =", base);
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
