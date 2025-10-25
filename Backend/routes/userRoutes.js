import express from 'express';
import passport from 'passport';
import {
  registerUser,
  loginUser,
  googleAuthCallback,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// --- Public Routes ---
router.post('/register', registerUser);
router.post('/login', loginUser);

// --- Google OAuth Routes ---
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  googleAuthCallback
);

// --- Private Routes ---
router.route('/profile').put(protect, updateUserProfile);
router.post('/logout', (req, res) => {
  res.json({ message: 'Logged out successfully' });
});

export default router;