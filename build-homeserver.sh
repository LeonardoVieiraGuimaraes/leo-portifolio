#!/bin/bash

echo "🏠 Building for Home Server..."
echo "================================"

# Limpar build anterior
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build com target específico
echo "🔨 Building with DEPLOY_TARGET=homeserver..."
export DEPLOY_TARGET=homeserver
npm run build

# Verificar se build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📄 Checking index.html..."
    
    if grep -q '"/assets/' dist/index.html; then
        echo "✅ Assets paths are correct (/assets/)"
    else
        echo "❌ Assets paths are incorrect!"
        grep 'src="' dist/index.html
    fi
    
    echo "📊 Build size:"
    du -sh dist/
    
    echo "📋 Build contents:"
    ls -la dist/
    
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🏠 Home Server build complete!"
