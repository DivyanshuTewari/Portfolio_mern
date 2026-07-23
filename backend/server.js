import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contactRoutes.js';

// Load Env variables and refresh configuration
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL ? [process.env.CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'] : '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connection
const mongoURI = process.env.MONGO_URI;

if (mongoURI) {
  mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 5000 // 5 seconds timeout
  })
    .then(() => console.log('Successfully connected to MongoDB Database.'))
    .catch(err => {
      console.error('MongoDB database connection failed:', err.message);
      console.warn('Backend server will continue running.');
    });
} else {
  console.warn('WARNING: MONGO_URI is not set in environment variables. DB connection skipped.');
}

// Routes
app.use('/api/contact', contactRoutes);

// Simple healthcheck route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'MERN Portfolio Backend is running.' });
});

// Serve frontend assets in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('MERN Portfolio Backend API running in development mode. Please connect to Vite dev server.');
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
