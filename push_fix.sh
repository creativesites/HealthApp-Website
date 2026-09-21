#!/bin/bash
TOKEN=$(gh auth token)
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/creativesites/HealthApp-Website.git"
git add .
git commit -m "fix: resolve client component directive and compile issues"
git push origin main
