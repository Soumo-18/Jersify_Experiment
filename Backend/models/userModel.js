import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const addressSchema = mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pinCode: { type: String, required: true },
  country: { type: String, required: true, default: 'India' },
});

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // Not required for Google Sign-In
    },
    phoneNumber: {
      type: String,
      // Optional, can be added later
    },
    addresses: [addressSchema], // Array of address objects
    googleId: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isProfileComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Method to compare entered password with the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  // Ensure password exists before comparing (for Google users)
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware to hash password before saving a new user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', userSchema);

export default User;