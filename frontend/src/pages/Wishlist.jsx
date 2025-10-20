import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemove = (id, name) => {
    removeFromWishlist(id);
    toast.success(`${name} removed from wishlist`);
  };

  const handleAddToCart = (item) => {
    addToCart(item, 'M', 1);
    removeFromWishlist(item.id);
    toast.success(
      <div>
        <span>{item.name} moved to cart</span>
        <button 
          onClick={() => navigate('/cart')}
          className="ml-2 underline text-orange-500 hover:text-orange-200"
        >
          Go to Cart
        </button>
      </div>,
      { duration: 4000 }
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        {wishlist.length > 0 ? (
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => navigate('/products')}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition"
            >
              ← Explore Jerseys
            </button>
            <h1 className="text-4xl font-bold">My Wishlist</h1>
            <div className="w-32"></div>
          </div>
        ) : (
          <h1 className="text-4xl font-bold mb-8 text-center">My Wishlist</h1>
        )}

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl mb-6">Your wishlist is empty</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg"
            >
              Explore Jerseys
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.club}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-500 font-bold text-xl">${item.price}</span>
                    <div className="flex gap-2">
                      <div className="relative group">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(item);
                          }}
                          className="p-2 bg-orange-500 hover:bg-orange-600 rounded transition"
                        >
                          <ShoppingCart size={20} />
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          Add to Cart
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(item.id, item.name);
                        }}
                        className="p-2 bg-red-500 hover:bg-red-600 rounded transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
