import mongoose from 'mongoose';

const variantSchema = mongoose.Schema({
  size: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
});

const reviewSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const jerseySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number },
    team: { type: String, required: true },
    league: { type: String, required: true },
    brand: { type: String, required: true },
    season: { type: String, required: true },
    kitType: { type: String, required: true }, // Home, Away, Third
    gender: { type: String, required: true }, // Men, Women, Kids
    category: { type: String, required: true }, // Modern, Retro
    variants: [variantSchema],
    images: [{
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    }],
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true }, // For soft delete/hiding
  },
  { timestamps: true }
);

// Calculate total stock whenever variants are changed
jerseySchema.virtual('totalStock').get(function() {
  return this.variants.reduce((acc, variant) => acc + variant.quantity, 0);
});

const Jersey = mongoose.model('Jersey', jerseySchema);
export default Jersey;