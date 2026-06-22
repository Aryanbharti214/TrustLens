# TrustLens AI

AI-Powered Transparent Security Decision Intelligence Platform

---
## Live Demo

Deployed Application: https://trustlensai-taga.onrender.com

Experience the platform live and explore:

* Multi-Agent AI Decision Workflow
* Trust Companion Interface
* AI Explainability Dashboard
* Human-in-the-Loop Governance
* Trust Time Machine Analytics
* AI Transparency & Validation Features


--- 
## Overview

TrustLens AI is a multi-agent security intelligence platform that provides explainable AI recommendations for enterprise security operations.

The platform uses multiple specialized AI agents to:

* Detect anomalies
* Assess risk
* Recommend remediation actions
* Challenge decisions through a Devil's Advocate agent
* Analyze historical incidents
* Generate incident reports
* Coordinate final recommendations
* Explain decisions through a Trust Companion

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* TailwindCSS
* Framer Motion
* Lucide React

## Backend

* FastAPI
* Python
* Uvicorn
* SQLite
* Requests
* Google Gemini API
* Groq API

---

# Project Structure

```text
TRUSTLENS-AI/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── lib/
│   ├── screens/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── public/
│   ├── landing.html
│   ├── favicon.svg
│   └── icons.svg
│
├── app.py
├── autonomy_service.py
├── multi_agent_service.py
├── trust_companion_service.py
├── test_failover.py
├── trustlens.db
│
├── package.json
├── requirements.txt
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

# Prerequisites

Install:

### Node.js

```bash
node -v
npm -v
```

Recommended:

```text
Node.js 20+
```

---

### Python

```bash
python --version
```

Recommended:

```text
Python 3.11+
```

---

# Clone Repository

```bash
git clone https://github.com/Aryanbharti214/TrustLens/
cd trustlens-ai
```

---

# Backend Setup

## Create Virtual Environment

Mac/Linux

```bash
python3 -m venv venv
```

Windows

```bash
python -m venv venv
```

---

## Activate Virtual Environment

Mac/Linux

```bash
source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Create:

```text
.env
```

Example:

```env
GEMINI_API_KEY=your_gemini_api_key
GROQ_API_KEY=your_groq_api_key
```

---

## Run Backend

```bash
uvicorn app:app --reload
```

or

```bash
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

# Verify Backend APIs

Health Check

```text
http://127.0.0.1:8000
```

Agent Chain

```text
http://127.0.0.1:8000/agent-chain/DEV1248
```

Trust Companion

```text
http://127.0.0.1:8000/trust-chat/DEV1248
```

Autonomy Level

```text
http://127.0.0.1:8000/autonomy-level
```

---

# Frontend Setup

Install packages

```bash
npm install
```

---

## Run Frontend

```bash
npm run dev
```

Frontend URL

```text
http://localhost:5173
```

---

# Build Frontend

```bash
npm run build
```

Output:

```text
dist/
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Common Commands

## Install Frontend Dependencies

```bash
npm install
```

---

## Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## Start Backend

```bash
uvicorn app:app --reload
```

---

## Start Frontend

```bash
npm run dev
```

---

## Build Frontend

```bash
npm run build
```

---

## Check TypeScript Errors

```bash
npx tsc --noEmit
```

---

# Local Development Workflow

Terminal 1

```bash
source venv/bin/activate
uvicorn app:app --reload
```

Terminal 2

```bash
npm install
npm run dev
```

Open:

```text
Frontend:
http://localhost:5173

Backend:
http://127.0.0.1:8000
```

---

# Deployment

## Frontend

Build:

```bash
npm run build
```

Do NOT push:

```text
dist/
node_modules/
venv/
```

The hosting platform should generate the dist folder automatically.

---

## Render Start Command

```bash
uvicorn app:app --host 0.0.0.0 --port $PORT
```

---

## Render Build Command

```bash
pip install -r requirements.txt
npm install
npm run build
```

---

# Troubleshooting

## Backend Not Starting

Check:

```bash
uvicorn app:app --reload
```

Verify:

```bash
pip install -r requirements.txt
```

---

## Frontend Build Failure

Check:

```bash
npm run build
```

Common reason:

```text
TS6133
Unused imports
Unused variables
```

Remove unused imports before deployment.

---

## Landing Page Not Visible

Verify:

```text
public/landing.html
```

and

```tsx
src/screens/LandingPage.tsx
```

Loads:

```tsx
src="/landing.html"
```

---

# Authors

TrustLens AI Team

Developed as an AI Transparency & Explainability Platform for Security Operations.
