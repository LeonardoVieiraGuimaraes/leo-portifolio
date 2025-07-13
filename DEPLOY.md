# Deploy Configuration

Este projeto suporta deploy em duas plataformas:

## 🚀 GitHub Pages

**Automático**: O deploy acontece automaticamente quando você faz push para a branch `main`.

**Manual**: Você também pode executar manualmente:
```bash
npm run build:github
npm run deploy
```

## 🌐 Hostinger

**Manual**: Para fazer deploy no Hostinger, execute o workflow manualmente no GitHub Actions:

1. Vá para a aba "Actions" no GitHub
2. Selecione "Hostinger Workflow"
3. Clique em "Run workflow"
4. Selecione "hostinger" como environment

**Secrets necessários no GitHub:**
- `SFTP_HOST`: Host do seu servidor Hostinger
- `SFTP_USER`: Usuário SSH/SFTP
- `SFTP_PRIVATE_KEY`: Chave privada SSH
- `SFTP_PORT`: Porta SSH (geralmente 22)

## 🛠️ Configuração Automática

O projeto detecta automaticamente o ambiente de deploy:

- **GitHub Pages**: `base: "/leo-portifolio/"`
- **Hostinger**: `base: "/"`

Isso é feito através da variável de ambiente `DEPLOY_TARGET` no `vite.config.ts`.

## 📁 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para GitHub Pages
npm run build:github

# Build para Hostinger
npm run build:hostinger

# Build padrão (Hostinger)
npm run build

# Deploy no GitHub Pages
npm run deploy
```

## 🐳 Docker (Hostinger)

O projeto inclui configuração Docker para deploy no Hostinger:

- `Dockerfile`: Configuração da imagem Nginx
- `docker-compose.yml`: Orquestração do container
- `nginx.conf`: Configuração do servidor web
