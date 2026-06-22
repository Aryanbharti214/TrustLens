#!/usr/bin/env bash
set -e

# Install Node deps and build the React frontend
npm install
npm run build

# Install Python deps
pip install -r requirements.txt