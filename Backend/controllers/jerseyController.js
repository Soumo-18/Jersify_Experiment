import asyncHandler from 'express-async-handler';
import Jersey from '../models/jerseyModel.js';
import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose'; // <-- Import Mongoose

// ... (createJersey, getAdminJerseys, getJerseyById functions are unchanged) ...
const createJersey = asyncHandler(async (req, res) => {
  const { name, sku, description, price, team, league, brand, season, kitType, gender, category, variants } = req.body;
  if (!req.files || req.files.length === 0) {
    res.status(400);
    throw new Error('No image files uploaded');
  }
  const images = req.files.map(file => ({ public_id: file.filename, url: file.path }));
  const parsedVariants = JSON.parse(variants);
  const jersey = new Jersey({ name, sku, description, price, team, league, brand, season, kitType, gender, category, variants: parsedVariants, images });
  const createdJersey = await jersey.save();
  res.status(201).json(createdJersey);
});

const getAdminJerseys = asyncHandler(async (req, res) => {
  const jerseys = await Jersey.find({});
  res.json(jerseys);
});

const getJerseyById = asyncHandler(async (req, res) => {
  const jersey = await Jersey.findById(req.params.id);
  if (jersey) {
    res.json(jersey);
  } else {
    res.status(404);
    throw new Error('Jersey not found');
  }
});


// @desc    Update a jersey
// @route   PUT /api/jerseys/:id
// @access  Private/Admin
const updateJersey = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // ** NEW: Add a check to ensure the ID is a valid MongoDB ObjectId format **
  if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      throw new Error(`Invalid ID format: ${id}`);
  }

  const jersey = await Jersey.findById(id);

  if (!jersey) {
    res.status(404);
    throw new Error('Jersey not found');
  }

  // Handle Image Updates
  if (req.files && req.files.length > 0) {
    if (jersey.images && jersey.images.length > 0) {
      const publicIds = jersey.images.map(img => img.public_id);
      for (const publicId of publicIds) {
        await cloudinary.uploader.destroy(publicId);
      }
    }
    jersey.images = req.files.map(file => ({ public_id: file.filename, url: file.path }));
  }

  // Update text fields
  jersey.name = req.body.name || jersey.name;
  jersey.sku = req.body.sku || jersey.sku;
  jersey.description = req.body.description || jersey.description;
  jersey.price = req.body.price || jersey.price;
  jersey.team = req.body.team || jersey.team;
  jersey.league = req.body.league || jersey.league;
  jersey.brand = req.body.brand || jersey.brand;
  jersey.season = req.body.season || jersey.season;
  jersey.kitType = req.body.kitType || jersey.kitType;
  jersey.gender = req.body.gender || jersey.gender;
  jersey.category = req.body.category || jersey.category;
  
  if (req.body.variants) {
    jersey.variants = JSON.parse(req.body.variants);
  }
  
  const updatedJersey = await jersey.save();
  res.json(updatedJersey);
});

// ... (toggleJerseyStatus function is unchanged) ...
const toggleJerseyStatus = asyncHandler(async (req, res) => {
    const jersey = await Jersey.findById(req.params.id);
    if (jersey) {
        jersey.isActive = !jersey.isActive;
        await jersey.save();
        res.json({ message: 'Jersey status updated', isActive: jersey.isActive });
    } else {
        res.status(404);
        throw new Error('Jersey not found');
    }
});

export { createJersey, getAdminJerseys, getJerseyById, updateJersey, toggleJerseyStatus };
