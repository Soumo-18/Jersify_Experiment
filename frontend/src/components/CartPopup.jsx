import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    onClose();
    navigate('/products');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 min-h-screen">
        <div className="bg-gray-900 rounded-lg shadow-2xl w-[800px] h-[600px] flex flex-col m-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-500" />
            <h2 className="text-xl font-bold text-white">Your Cart ({getTotalItems()})</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag size={64} className="mb-4 opacity-50" />
              <p className="text-lg">Your cart is empty</p>
              <button 
                onClick={handleContinueShopping}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.cartId} className="bg-gray-800 rounded-lg p-4 flex gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.club}</p>
                  <p className="text-orange-500 font-bold text-xl mt-1">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-gray-400">Size: {item.size}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <button
                        onClick={() => updateQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                        className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-white text-lg w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="p-1 bg-gray-700 rounded hover:bg-gray-600"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.cartId)}
                  className="text-red-500 hover:text-red-400 self-start"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-700 p-4 space-y-3">
            <div className="flex justify-between items-center text-white">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-orange-500">${getTotalPrice()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Go to Checkout
            </button>
            <button
              onClick={handleContinueShopping}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default CartPopup;
