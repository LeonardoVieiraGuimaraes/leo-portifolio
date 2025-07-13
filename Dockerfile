# Multi-stage build para garantir ambiente limpo
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar todas as dependências (incluindo devDependencies)
RUN npm ci --silent

# Copiar código fonte
COPY . .

# Build para home server
ENV DEPLOY_TARGET=homeserver
RUN npm run build:homeserver

# Verificar se build está correto
RUN echo "Verificando build..." && \
    grep -q '"/assets/' dist/index.html && \
    echo "✅ Build correto!" || \
    (echo "❌ Build incorreto!" && exit 1)

# Stage de produção com nginx
FROM nginx:alpine

# Copiar arquivos buildados do stage anterior
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80/health || exit 1

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
