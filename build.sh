#!/usr/bin/env bash
set -e
npm install
npm run build
pip install -r requirements.txt
