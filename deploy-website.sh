#!/bin/bash
npm install --legacy-peer-deps
npm run build
rm -rf /Users/daniellaufer/Documents/Code-2023-2024/daniel-laufer.github.io/*
cp -r ./build/* /Users/daniellaufer/Documents/Code-2023-2024/daniel-laufer.github.io/
cd /Users/daniellaufer/Documents/Code-2023-2024/daniel-laufer.github.io/
git status
git add --all
git commit -m "updated website"
git push



