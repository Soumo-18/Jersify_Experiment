import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import toast from 'react-hot-toast';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemove = (id, name) => {
    removeFromWishlist(id);
    toast.success(`${name} removed from wishlist`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Wishlist</h1>

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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
