#!/bin/bash
set -e

echo "Building the project..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
