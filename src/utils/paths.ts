/**
 * Helper para resolver caminhos de imagens com base path
 * Funciona tanto em GitHub Pages (/leo_portifolio/) quanto em Home Server (/)
 */
export const getImagePath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL;
  // Remove a leading slash se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};
