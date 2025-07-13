# Use nginx alpine como base
FROM nginx:alpine

# Copiar arquivos buildados
COPY dist/ /usr/share/nginx/html/

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/health || exit 1

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
