# Deploy Configuration

Este projeto suporta deploy em duas plataformas:

## 🚀 GitHub Pages

**Automático**: O deploy acontece automaticamente quando você faz push para a branch `main`.

**Manual**: Você também pode executar manualmente:
```bash
npm run build:github
npm run deploy
```

## � Home Server (leoproti.com.br)

**Manual**: Para fazer deploy no seu servidor doméstico, execute o workflow manualmente no GitHub Actions:

1. Vá para a aba "Actions" no GitHub
2. Selecione "Deploy to Home Server"
3. Clique em "Run workflow"
4. Selecione "homeserver" como environment

**Secrets necessários no GitHub:**
- `HOME_SERVER_SSH_KEY`: Sua chave privada SSH (conteúdo do arquivo `C:\Users\leona\.ssh\id_ed25519`)
- `CLOUDFLARE_TUNNEL_TOKEN`: Token do Cloudflare Tunnel para autenticação

**Configuração do Servidor:**
- **Cloudflare Tunnel**: Acesso SSH via `ssh.leoproti.com.br`
- **Docker**: Aplicação roda em container Docker
- **Nginx**: Servidor web com SSL e otimizações
- **Porta**: 3000 (mapeada para 80 do container)

## 🛠️ Configuração Automática

O projeto detecta automaticamente o ambiente de deploy:

- **GitHub Pages**: `base: "/leo-portifolio/"`
- **Home Server**: `base: "/"`

Isso é feito através da variável de ambiente `DEPLOY_TARGET` no `vite.config.ts`.

## 📁 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para GitHub Pages
npm run build:github

# Build para Home Server
npm run build:homeserver

# Build padrão (Home Server)
npm run build

# Deploy no GitHub Pages
npm run deploy
```

## 🐳 Docker (Home Server)

O projeto inclui configuração Docker otimizada:

- **Multi-stage build**: Reduz tamanho da imagem final
- **Nginx Alpine**: Imagem leve e segura
- **Security**: Container roda com usuário não-root
- **Health Check**: Monitoramento automático
- **SSL**: Suporte via Cloudflare
- **Gzip**: Compressão habilitada
- **Cache**: Headers otimizados para assets

## 🔧 Configuração do Servidor Doméstico

### SSH via Cloudflare Tunnel
```bash
# No seu arquivo ~/.ssh/config
Host leoproti
  HostName ssh.leoproti.com.br
  User leonardovieiraxy
  IdentityFile C:\Users\leona\.ssh\id_ed25519
  ProxyCommand cloudflared access ssh --hostname %h
```

### Deploy Manual Local
```bash
# Build local
npm run build:homeserver

# Transfer via SSH (se necessário)
scp -r dist leonardovieiraxy@ssh.leoproti.com.br:/home/leonardovieiraxy/leo-portifolio/

# Deploy no servidor
ssh leonardovieiraxy@ssh.leoproti.com.br
cd leo-portifolio
docker compose up -d --build
```
