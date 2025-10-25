import './config/envLoader.js';
import express from 'express';
import passport from 'passport';
import cors from 'cors'; 
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import './config/passport-setup.js';
import jerseyRoutes from './routes/jerseyRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();

// --- Middleware ---
// Allow requests from your frontend origin
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
}));

app.use(express.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/jerseys', jerseyRoutes);

// --- Error Handling Middleware ---
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);