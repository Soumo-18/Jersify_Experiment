import express from 'express';
import { protect, admin } from '../middlewares/authMiddleware.js';
import upload from '../config/cloudinary.js';
import {
  createJersey,
  getAdminJerseys,
  getJerseyById,
  updateJersey,
  toggleJerseyStatus,
} from '../controllers/jerseyController.js';

const router = express.Router();

// Admin Routes
router.route('/')
  .post(protect, admin, upload.array('images', 5), createJersey); // 'images' is the field name, 5 is max files

router.route('/admin')
  .get(protect, admin, getAdminJerseys);

router.route('/:id')
  .get(getJerseyById) // Public can also get a single jersey
  .put(protect, admin, upload.array('images', 5), updateJersey);

router.route('/:id/toggle')
  .patch(protect, admin, toggleJerseyStatus);

export default router;