import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Google Gen AI client if key exists
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// --- API ROUTES ---

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'MLBB Ranked Companion Backend',
    geminiConfigured: Boolean(aiClient),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Draft tactical explanation route using Gemini
app.post('/api/gemini/explain', async (req: Request, res: Response) => {
  try {
    const { alliedHeroes, enemyHeroes, targetHero, questionContext } = req.body;

    if (!aiClient) {
      return res.status(200).json({
        available: false,
        explanation:
          'AI Assistant commentary is ready. Set your GEMINI_API_KEY in environment variables or AI Studio Secrets to enable live Gemini tactical breakdowns. Rule-based analytics are fully functional without an API key.',
        source: 'system-fallback'
      });
    }

    const prompt = `You are a professional esports analyst for Mobile Legends: Bang Bang (MLBB).
Provide a concise, high-level tactical draft breakdown based STRICTLY on known game mechanics and the provided heroes.
Do NOT invent fake win rate numbers or fabricate player statistics.

Draft Context:
- Allied Team: ${alliedHeroes?.join(', ') || 'None selected'}
- Enemy Team: ${enemyHeroes?.join(', ') || 'None selected'}
- Focus Hero: ${targetHero || 'General team composition'}
- Strategic Question: ${questionContext || 'What are the main draft win conditions and timing windows?'}

Respond with 3 focused bullet points:
1. Team synergy or counter interaction
2. Power spike timing (Early / Mid / Late game)
3. Key objective win condition (Turtle / Lord contest, split push, or 5v5 teamfight)`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const explanationText = response.text || 'Analysis currently unavailable.';

    return res.json({
      available: true,
      explanation: explanationText,
      source: 'gemini-2.5-flash'
    });
  } catch (error: any) {
    console.error('Error generating draft explanation:', error);
    return res.status(500).json({
      available: false,
      error: 'Failed to generate AI tactical analysis.',
      details: error.message || String(error)
    });
  }
});

// Start server with Vite middleware in dev or static serving in prod
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`MLBB Ranked Companion running on http://localhost:${PORT}`);
  });
}

startServer();
