#!/bin/bash
# Script: merge-tag-deploy.sh
# Uso: ./merge-tag-deploy.sh <nome-da-tag>
# Exemplo: ./merge-tag-deploy.sh v-fullstack

set -e

tag="$1"
if [ -z "$tag" ]; then
  echo "Uso: $0 <nome-da-tag>"
  exit 1
fi

echo "Fazendo checkout na main e atualizando..."
git checkout main
git pull origin main

echo "Fazendo merge da tag $tag na main..."
git merge "$tag"

echo "Enviando para o repositório remoto..."
git push origin main

echo "Pronto! O deploy será disparado automaticamente pelo workflow."
