# VoiceScript — Speech-to-Text App

## Overview
A full-stack MERN application that transcribes audio files and live
recordings using OpenAI Whisper (or Google Cloud Speech-to-Text).

## Tech Stack
- Frontend: React + Vite + Tailwind CSS
- Backend:  Node.js + Express + Multer
- Database: MongoDB Atlas (Mongoose) / Supabase
- Auth:     Supabase Auth
- STT API:  OpenAI Whisper / Google Cloud Speech

## Local Setup
```bash
git clone https://github.com/you/voicescript
cd voicescript

# Backend
cd server && npm install
cp .env.example .env   # fill in your keys
node index.js

# Frontend (new terminal)
cd client && npm install
npm run dev
```
## Environment Variables
| Variable          | Description                    |
|-------------------|--------------------------------|
| MONGO_URI         | MongoDB Atlas connection string|
| OPENAI_API_KEY    | OpenAI API key                 |
| GOOGLE_API_KEY    | Google Cloud API key           |
| VITE_API_URL      | Backend URL (frontend)         |
| VITE_SUPABASE_URL | Supabase project URL           |

## API Endpoints
| Method | Path             | Description              |
|--------|------------------|--------------------------|
| POST   | /api/transcribe  | Upload and transcribe    |
| GET    | /api/history     | Fetch saved transcriptions|
| DELETE | /api/history/:id | Delete a transcription   |

## Deployment
- Backend: Render (render.yaml included)
- Frontend: Netlify (netlify.toml included)
