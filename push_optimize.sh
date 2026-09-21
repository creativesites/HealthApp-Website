#!/bin/bash
TOKEN=$(gh auth token)
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/creativesites/HealthApp-Website.git"
git add .
git commit -m "perf: optimize background attachment for smooth mobile safari scrolling"
git push origin main
