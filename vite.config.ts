import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determina o base path baseado no ambiente
  const isProduction = command === "build";
  const isGitHubPages = process.env.DEPLOY_TARGET === "github" || process.env.GITHUB_ACTIONS === "true";
  
  return {
    plugins: [react()],
    base: isGitHubPages ? "/leo-portifolio/" : "/",
  };
});
