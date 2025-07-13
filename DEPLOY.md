# 🚀 Deploy Leo Portfólio

## ❌ Problema Atual - Permissões no Servidor

O deploy está falhando com erro de permissão:
```
scp: dest open "/home/leonardovieiraxy/projetos/leo-portifolio/dist/index.html": Permission denied
```

## 🔧 Soluções

### 1. **Corrigir Permissões no Servidor**
No home server, execute:
```bash
# Entrar no servidor
ssh leonardovieiraxy@ssh.leoproti.com.br

# Criar pasta com permissões corretas
sudo mkdir -p /home/leonardovieiraxy/projetos/leo-portifolio
sudo chown -R leonardovieiraxy:leonardovieiraxy /home/leonardovieiraxy/projetos/
chmod -R 755 /home/leonardovieiraxy/projetos/
```

### 2. **Corrigir Workflow Home Server**
Modificar `.github/workflows/home-server.yml`:

```yaml
- name: 🧹 Clean and prepare server
  run: |
    ssh -o ProxyCommand="cloudflared access ssh --hostname %h" \
        leonardovieiraxy@ssh.leoproti.com.br << 'EOF'
      # Criar pasta projetos com permissões corretas
      mkdir -p /home/leonardovieiraxy/projetos
      
      # Remover pasta antiga completamente
      if [ -d "/home/leonardovieiraxy/projetos/leo-portifolio" ]; then
        cd /home/leonardovieiraxy/projetos/leo-portifolio
        docker compose down || true
        cd ..
        rm -rf leo-portifolio
      fi
      
      # Criar nova pasta
      mkdir -p /home/leonardovieiraxy/projetos/leo-portifolio
    EOF

- name: 📤 Transfer project files
  run: |
    # Criar pasta temporária com arquivos necessários
    mkdir -p temp-deploy
    cp docker-compose.yml temp-deploy/
    cp Dockerfile temp-deploy/
    cp nginx.conf temp-deploy/
    cp -r dist temp-deploy/
    
    # Transferir arquivos diretamente para a pasta
    scp -o ProxyCommand="cloudflared access ssh --hostname %h" \
        -r temp-deploy/* leonardovieiraxy@ssh.leoproti.com.br:/home/leonardovieiraxy/projetos/leo-portifolio/
```

### 3. **Alternativa: Usar rsync (mais robusto)**
```yaml
- name: 📤 Transfer project files (rsync)
  run: |
    # Usar rsync em vez de scp
    rsync -avz -e "ssh -o ProxyCommand='cloudflared access ssh --hostname %h'" \
          --delete \
          temp-deploy/ \
          leonardovieiraxy@ssh.leoproti.com.br:/home/leonardovieiraxy/projetos/leo-portifolio/
```

## 🎯 Comandos de Teste Local

### Windows (PowerShell):
```powershell
# Build local
$env:DEPLOY_TARGET="homeserver"
npm run build:homeserver

# Verificar dist
ls dist
```

### WSL/Ubuntu:
```bash
# Build
DEPLOY_TARGET=homeserver npm run build:homeserver

# Docker local
docker compose down
docker compose up -d --build

# Testar
curl http://localhost:8080
```

## 📝 Checklist de Deploy

### Antes do Push:
- [ ] Build local funciona
- [ ] Arquivos estão em `dist/`
- [ ] Docker funciona localmente
- [ ] Permissões do servidor verificadas

### Após Push:
- [ ] GitHub Actions executou sem erro
- [ ] Container está rodando no servidor
- [ ] Site acessível via leoproti.com.br

## 🛠️ Debug no Servidor

```bash
# Verificar pasta
ls -la /home/leonardovieiraxy/projetos/

# Verificar permissões
ls -la /home/leonardovieiraxy/projetos/leo-portifolio/

# Verificar containers
docker compose ps

# Verificar logs
docker compose logs
```
