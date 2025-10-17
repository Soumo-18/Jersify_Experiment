import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Eye, ChevronDown, Search } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';

const Products = () => {
  const navigate = useNavigate();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLeague, setSelectedLeague] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [previewJersey, setPreviewJersey] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Home', 'Away', 'Third', 'Goalkeeper'];
  const leagues = ['All', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'];
  const priceRanges = ['All', 'Under $50', '$50-$100', 'Above $100'];

  const jerseys = [
    { id: 1, name: 'Manchester United Home', club: 'Manchester United', league: 'Premier League', category: 'Home', price: 89.99, image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', backImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400' },
    { id: 2, name: 'Real Madrid Away', club: 'Real Madrid', league: 'La Liga', category: 'Away', price: 94.99, image: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400', backImage: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400' },
    { id: 3, name: 'Barcelona Home', club: 'Barcelona', league: 'La Liga', category: 'Home', price: 92.99, image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', backImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400' },
    { id: 4, name: 'Bayern Munich Third', club: 'Bayern Munich', league: 'Bundesliga', category: 'Third', price: 87.99, image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400', backImage: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400' },
    { id: 5, name: 'Liverpool Home', club: 'Liverpool', league: 'Premier League', category: 'Home', price: 89.99, image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400', backImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400' },
    { id: 6, name: 'PSG Away', club: 'Paris Saint-Germain', league: 'Ligue 1', category: 'Away', price: 99.99, image: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400', backImage: 'https://images.unsplash.com/photo-1551854838-4e7e5f0e3f0e?w=400' },
    { id: 7, name: 'Juventus Home', club: 'Juventus', league: 'Serie A', category: 'Home', price: 85.99, image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400', backImage: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400' },
    { id: 8, name: 'Chelsea Goalkeeper', club: 'Chelsea', league: 'Premier League', category: 'Goalkeeper', price: 79.99, image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400', backImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400' },
  ];

  const filteredJerseys = jerseys.filter(jersey => {
    const categoryMatch = selectedCategory === 'All' || jersey.category === selectedCategory;
    const leagueMatch = selectedLeague === 'All' || jersey.league === selectedLeague;
    const priceMatch = priceRange === 'All' || 
      (priceRange === 'Under $50' && jersey.price < 50) ||
      (priceRange === '$50-$100' && jersey.price >= 50 && jersey.price <= 100) ||
      (priceRange === 'Above $100' && jersey.price > 100);
    const searchMatch = jersey.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jersey.club.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && leagueMatch && priceMatch && searchMatch;
  });

  const handleWishlistToggle = (jersey) => {
    if (!isInWishlist(jersey.id)) {
      addToWishlist(jersey);
      toast.success('Added to wishlist!');
    } else {
      toast('Already in wishlist', { icon: '💙' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold mb-8 text-center">Explore Jerseys</h1>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex gap-4 max-w-2xl mx-auto">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search jerseys or clubs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
            >
              Filters
              <ChevronDown className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} size={20} />
            </button>

            {showFilters && (
              <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl z-10 p-4 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2 text-gray-400">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 text-sm rounded transition ${
                          selectedCategory === cat
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-2 text-gray-400">League</h3>
                  <div className="flex flex-wrap gap-2">
                    {leagues.map(league => (
                      <button
                        key={league}
                        onClick={() => setSelectedLeague(league)}
                        className={`px-3 py-1 text-sm rounded transition ${
                          selectedLeague === league
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                      >
                        {league}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold mb-2 text-gray-400">Price Range</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map(range => (
                      <button
                        key={range}
                        onClick={() => setPriceRange(range)}
                        className={`px-3 py-1 text-sm rounded transition ${
                          priceRange === range
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Jersey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredJerseys.map(jersey => (
            <div
              key={jersey.id}
              onClick={() => navigate(`/product/${jersey.id}`)}
              className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={jersey.image}
                  alt={jersey.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Hover Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWishlistToggle(jersey);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm transition ${
                      isInWishlist(jersey.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-800 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={isInWishlist(jersey.id) ? 'fill-current' : ''} size={20} />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewJersey(jersey);
                    }}
                    className="p-2 bg-white/80 rounded-full hover:bg-orange-500 hover:text-white transition backdrop-blur-sm"
                  >
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{jersey.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{jersey.club}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-500 font-bold text-xl">${jersey.price}</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">{jersey.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJerseys.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No jerseys found matching your filters</p>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewJersey && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewJersey(null)}
        >
          <div
            className="bg-gray-800 rounded-lg max-w-4xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{previewJersey.name}</h2>
              <button
                onClick={() => setPreviewJersey(null)}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Front View</h3>
                <img
                  src={previewJersey.image}
                  alt="Front"
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-2">Back View</h3>
                <img
                  src={previewJersey.backImage}
                  alt="Back"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
