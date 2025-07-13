# Build para Home Server - PowerShell
Write-Host "🏠 Building for Home Server..." -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# Limpar build anterior
Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue

# Verificar se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Build com target específico
Write-Host "🔨 Building with DEPLOY_TARGET=homeserver..." -ForegroundColor Yellow
$env:DEPLOY_TARGET = "homeserver"
npm run build

# Verificar se build foi bem-sucedido
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    Write-Host "📄 Checking index.html..." -ForegroundColor Yellow
    $indexContent = Get-Content "dist/index.html" -Raw
    
    if ($indexContent -match '"/assets/') {
        Write-Host "✅ Assets paths are correct (/assets/)" -ForegroundColor Green
    } else {
        Write-Host "❌ Assets paths are incorrect!" -ForegroundColor Red
        Select-String -Path "dist/index.html" -Pattern 'src="'
    }
    
    Write-Host "📊 Build size:" -ForegroundColor Yellow
    $size = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum
    Write-Host "$([math]::Round($size/1MB, 2)) MB"
    
    Write-Host "📋 Build contents:" -ForegroundColor Yellow
    Get-ChildItem -Path "dist" | Format-Table Name, Length, LastWriteTime
    
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "🏠 Home Server build complete!" -ForegroundColor Green
