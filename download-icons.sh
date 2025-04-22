#!/bin/bash

# Create tech directory if it doesn't exist
mkdir -p public/tech

# Download latest icons from multiple reliable sources
# Next.js
curl -o public/tech/nextjs.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nextdotjs.svg"

# React
curl -o public/tech/react.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/react.svg"

# TypeScript
curl -o public/tech/typescript.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg"

# Node.js
curl -o public/tech/nodejs.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodedotjs.svg"

# Python
curl -o public/tech/python.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg"

# Git
curl -o public/tech/git.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/git.svg"

# VS Code
curl -o public/tech/vscode.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/visualstudiocode.svg"

# Docker
curl -o public/tech/docker.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg"

# Linux
curl -o public/tech/linux.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linux.svg"

# GitHub
curl -o public/tech/github.svg "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg"

# Make all icons white
for file in public/tech/*.svg; do
  # Skip if file doesn't exist
  [ -f "$file" ] || continue
  
  # Remove any existing fill colors and set to white
  sed -i '' 's/fill="[^"]*"/fill="white"/g' "$file"
  
  # If there's no fill attribute, add it
  sed -i '' 's/<path /<path fill="white" /g' "$file"
  sed -i '' 's/<svg /<svg fill="white" /g' "$file"
  
  # Remove any background elements
  sed -i '' '/<rect.*background/d' "$file"
done 