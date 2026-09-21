#!/bin/bash
TOKEN=$(gh auth token)
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/creativesites/HealthApp-Website.git"
git add .
git commit -m "style: update navbar/footer logo, set ICFRb.jpg page bg, and use hero1.jpg as hero image"
git push origin main
