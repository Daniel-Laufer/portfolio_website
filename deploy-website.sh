#!/bin/bash
cd /Users/daniellaufer/Documents/Code.nosync/2021/website_v2
npm install --legacy-peer-deps
npm run build
rm -rf /Users/daniellaufer/Documents/Code.nosync/2021/daniel-laufer.github.io/*
cp -r ./build/* /Users/daniellaufer/Documents/Code.nosync/2021/daniel-laufer.github.io/
cd /Users/daniellaufer/Documents/Code.nosync/2021/daniel-laufer.github.io/
git status
git add --all
git commit -m "updated website"
git push



