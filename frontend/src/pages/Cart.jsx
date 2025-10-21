import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const Cart = () => {
  const navigate = useNavigate();
  const { 
    cart, 
    savedForLater, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice, 
    getTotalItems,
    saveForLater,
    moveToCart,
    removeFromSaved
  } = useCart();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={handleContinueShopping}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-400"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <ShoppingBag className="w-6 h-6 text-orange-500" />
            <h1 className="text-2xl font-bold">Your Cart ({getTotalItems()})</h1>
          </div>
        </div>

        {/* Main Layout - Two Column on Desktop, Single Column on Mobile */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Cart Items and Saved for Later */}
          <div className="flex-1 lg:w-2/3">
            {/* Cart Items Section */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-8 shadow-2xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-6 text-orange-400">Cart Items</h2>
              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.cartId} className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all duration-300 border border-gray-600">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                        <p className="text-gray-300 text-sm">{item.club}</p>
                        <p className="text-orange-400 font-bold text-lg">${item.price}</p>
                        <p className="text-sm text-gray-300">Size: {item.size}</p>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-6">
                          <button
                            onClick={() => updateQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                            className="p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-all duration-200"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-16 text-center text-xl font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-3 bg-gray-600 rounded-lg hover:bg-gray-500 transition-all duration-200"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="flex gap-6">
                          <button
                            onClick={() => {
                              saveForLater(item.cartId);
                              toast.success(`${item.name} saved for later`);
                            }}
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm"
                          >
                            Save for Later
                          </button>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-red-400 hover:text-red-300 hover:scale-110 transition-all duration-200"
                          >
                            <Trash2 size={28} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price Details Panel for Mobile - Shows before Saved for Later */}
            {cart.length > 0 && (
              <div className="lg:hidden mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border border-gray-700">
                  <h2 className="text-xl font-semibold mb-6 text-orange-400">Price Details</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Price ({getTotalItems()} item{getTotalItems() > 1 ? 's' : ''})</span>
                      <span className="text-white font-medium">${getTotalPrice()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Delivery Charges</span>
                      <span className="text-green-400 font-medium">FREE</span>
                    </div>
                    
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-white">Total Amount</span>
                        <span className="text-2xl font-bold text-orange-500">${getTotalPrice()}</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 mt-4">
                      <p className="text-green-400 text-sm font-medium">You will save $0 on this order</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Place Order
                  </button>
                  
                  <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <span>🔒</span>
                    <span>Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Save for Later Section */}
            {savedForLater.length > 0 && (
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <h2 className="text-xl font-semibold text-orange-400">Saved for Later ({savedForLater.length})</h2>
                </div>
                <div className="space-y-4">
                  {savedForLater.map((item) => (
                    <div key={item.savedId} className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-5 flex gap-4 hover:shadow-lg transition-all duration-300 border border-gray-600">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                        <p className="text-gray-300 text-sm">{item.club}</p>
                        <p className="text-orange-400 font-bold text-lg">${item.price}</p>
                        <p className="text-sm text-gray-300">Size: {item.size}</p>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <button
                          onClick={() => {
                            moveToCart(item.savedId);
                            toast.success(`${item.name} moved to cart`);
                          }}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                        >
                          Move to Cart
                        </button>
                        <button
                          onClick={() => removeFromSaved(item.savedId)}
                          className="text-red-400 hover:text-red-300 hover:scale-110 transition-all duration-200"
                        >
                          <Trash2 size={28} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Price Details Panel (Desktop Only) */}
          {cart.length > 0 && (
            <div className="hidden lg:block lg:w-1/3">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl border border-gray-700 sticky top-8">
                <h2 className="text-xl font-semibold mb-6 text-orange-400">Price Details</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Price ({getTotalItems()} item{getTotalItems() > 1 ? 's' : ''})</span>
                    <span className="text-white font-medium">${getTotalPrice()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Delivery Charges</span>
                    <span className="text-green-400 font-medium">FREE</span>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">Total Amount</span>
                      <span className="text-2xl font-bold text-orange-500">${getTotalPrice()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-900/30 border border-green-700 rounded-lg p-3 mt-4">
                    <p className="text-green-400 text-sm font-medium">You will save $0 on this order</p>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Place Order
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <span>🔒</span>
                  <span>Safe and Secure Payments. Easy returns. 100% Authentic products.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;