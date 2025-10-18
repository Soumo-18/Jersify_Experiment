import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [showFront, setShowFront] = useState(true);
  const [showRatingBreakdown, setShowRatingBreakdown] = useState(false);

  const jerseys = [
    { id: 1, name: 'Manchester United Home', club: 'Manchester United', league: 'Premier League', category: 'Home', price: 89.99, image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', backImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', description: 'Official Manchester United home jersey featuring the iconic red color with club crest and sponsor logos.', rating: 4.5, totalReviews: 234 },
    { id: 2, name: 'Real Madrid Away', club: 'Real Madrid', league: 'La Liga', category: 'Away', price: 94.99, image: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400', backImage: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400', description: 'Real Madrid away kit with premium fabric and authentic club details.', rating: 4.7, totalReviews: 189 },
    { id: 3, name: 'Barcelona Home', club: 'Barcelona', league: 'La Liga', category: 'Home', price: 92.99, image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', backImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', description: 'Classic Barcelona home jersey with traditional blaugrana stripes.', rating: 4.6, totalReviews: 312 },
    { id: 4, name: 'Bayern Munich Third', club: 'Bayern Munich', league: 'Bundesliga', category: 'Third', price: 87.99, image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400', backImage: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400', description: 'Bayern Munich third kit with modern design and club badge.', rating: 4.4, totalReviews: 156 },
    { id: 5, name: 'Liverpool Home', club: 'Liverpool', league: 'Premier League', category: 'Home', price: 89.99, image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', backImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', description: 'Liverpool home jersey in classic red with club crest.', rating: 4.8, totalReviews: 278 },
    { id: 6, name: 'PSG Away', club: 'Paris Saint-Germain', league: 'Ligue 1', category: 'Away', price: 99.99, image: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400', backImage: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400', description: 'PSG away kit featuring premium materials and club branding.', rating: 4.5, totalReviews: 201 },
    { id: 7, name: 'Juventus Home', club: 'Juventus', league: 'Serie A', category: 'Home', price: 85.99, image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', backImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', description: 'Juventus home jersey with iconic black and white stripes.', rating: 4.3, totalReviews: 167 },
    { id: 8, name: 'Chelsea Goalkeeper', club: 'Chelsea', league: 'Premier League', category: 'Goalkeeper', price: 79.99, image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', backImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', description: 'Chelsea goalkeeper kit with padded elbows and unique design.', rating: 4.2, totalReviews: 98 },
  ];

  const jersey = jerseys.find(j => j.id === parseInt(id));

  if (!jersey) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Jersey not found</div>;
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  const ratingBreakdown = [
    { stars: 5, count: Math.floor(jersey.totalReviews * 0.6) },
    { stars: 4, count: Math.floor(jersey.totalReviews * 0.25) },
    { stars: 3, count: Math.floor(jersey.totalReviews * 0.1) },
    { stars: 2, count: Math.floor(jersey.totalReviews * 0.03) },
    { stars: 1, count: Math.floor(jersey.totalReviews * 0.02) },
  ];

  const reviews = [
    { id: 1, user: 'John D.', rating: 5, comment: 'Amazing quality! Fits perfectly and looks great.', date: '2024-01-15' },
    { id: 2, user: 'Sarah M.', rating: 4, comment: 'Good jersey, but shipping took a bit long.', date: '2024-01-10' },
    { id: 3, user: 'Mike R.', rating: 5, comment: 'Authentic and comfortable. Highly recommend!', date: '2024-01-05' },
  ];

  const handleAddToWishlist = () => {
    if (!isInWishlist(jersey.id)) {
      addToWishlist(jersey);
      toast.success('Added to wishlist!');
    } else {
      toast('Already in wishlist', { icon: '💙' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate('/products')} className="mb-6 text-orange-500 hover:underline">
          ← Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div>
            <div className="bg-gray-800 rounded-lg p-8 mb-4">
              <img
                src={showFront ? jersey.image : jersey.backImage}
                alt={jersey.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowFront(true)}
                className={`flex-1 py-2 rounded ${showFront ? 'bg-orange-500' : 'bg-gray-800'}`}
              >
                Front View
              </button>
              <button
                onClick={() => setShowFront(false)}
                className={`flex-1 py-2 rounded ${!showFront ? 'bg-orange-500' : 'bg-gray-800'}`}
              >
                Back View
              </button>
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{jersey.name}</h1>
            <p className="text-gray-400 mb-4">{jersey.club} • {jersey.league}</p>
            
            {/* Rating */}
            <div 
              className="flex items-center gap-2 mb-4 relative cursor-pointer"
              onMouseEnter={() => setShowRatingBreakdown(true)}
              onMouseLeave={() => setShowRatingBreakdown(false)}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(jersey.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
              <span>{jersey.rating} ({jersey.totalReviews} reviews)</span>

              {showRatingBreakdown && (
                <div className="absolute top-8 left-0 bg-gray-800 p-4 rounded-lg shadow-xl z-10 w-64">
                  {ratingBreakdown.map(({ stars, count }) => (
                    <div key={stars} className="flex items-center gap-2 mb-2">
                      <span className="w-12">{stars} star</span>
                      <div className="flex-1 bg-gray-700 h-2 rounded">
                        <div
                          className="bg-yellow-400 h-2 rounded"
                          style={{ width: `${(count / jersey.totalReviews) * 100}%` }}
                        />
                      </div>
                      <span className="w-12 text-right">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="text-4xl font-bold text-orange-500 mb-6">${jersey.price}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Select Size</h3>
              <div className="flex gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded ${
                      selectedSize === size ? 'bg-orange-500' : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  <Minus size={20} />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 py-3 rounded-lg font-semibold">
                Add to Cart
              </button>
              <button 
                onClick={handleAddToWishlist}
                className={`p-3 rounded-lg transition ${isInWishlist(jersey.id) ? 'bg-red-500 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <Heart size={24} className={isInWishlist(jersey.id) ? 'fill-current' : ''} />
              </button>
            </div>

            {/* Description */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-300">{jersey.description}</p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map(review => (
              <div key={review.id} className="border-b border-gray-700 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{review.user}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
