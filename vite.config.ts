import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determina o base path baseado no ambiente
  const deployTarget = process.env.DEPLOY_TARGET;
  const isGitHubPages = deployTarget === "github" || process.env.GITHUB_ACTIONS === "true";
  
  // Para home server usamos base "/"
  // Para GitHub Pages usamos "/leo-portifolio/"
  const base = isGitHubPages ? "/leo-portifolio/" : "/";
  
  return {
    plugins: [react()],
    base: base,
  };
});
