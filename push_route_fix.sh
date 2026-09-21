#!/bin/bash
TOKEN=$(gh auth token)
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/creativesites/HealthApp-Website.git"
git add .
git commit -m "perf: statically pre-render all specialist profile pages with generateStaticParams"
git push origin main
