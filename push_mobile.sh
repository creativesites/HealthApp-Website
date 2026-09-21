#!/bin/bash
TOKEN=$(gh auth token)
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/creativesites/HealthApp-Website.git"
git add .
git commit -m "feat: complete interactive mobile-first navbar and overwrite default favicon with custom app favicon"
git push origin main
