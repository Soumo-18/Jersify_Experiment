import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [savedForLater, setSavedForLater] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (item, size, quantity) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id && cartItem.size === size);
      if (existingItem) {
        return prev.map(cartItem => 
          cartItem.id === item.id && cartItem.size === size
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        const cartItem = {
          ...item,
          size,
          quantity,
          cartId: `${item.id}-${size}-${Date.now()}`
        };
        return [...prev, cartItem];
      }
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, quantity) => {
    setCart(prev => prev.map(item => 
      item.cartId === cartId ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const saveForLater = (cartId) => {
    const item = cart.find(item => item.cartId === cartId);
    if (item) {
      const savedItem = { ...item, quantity: 1, savedId: `saved-${Date.now()}` };
      setSavedForLater(prev => [...prev, savedItem]);
      removeFromCart(cartId);
    }
  };

  const moveToCart = (savedId) => {
    const item = savedForLater.find(item => item.savedId === savedId);
    if (item) {
      const cartItem = { ...item, quantity: 1, cartId: `${item.id}-${item.size}-${Date.now()}` };
      delete cartItem.savedId;
      setCart(prev => [...prev, cartItem]);
      setSavedForLater(prev => prev.filter(item => item.savedId !== savedId));
    }
  };

  const removeFromSaved = (savedId) => {
    setSavedForLater(prev => prev.filter(item => item.savedId !== savedId));
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      savedForLater,
      addToCart, 
      removeFromCart, 
      updateQuantity,
      getTotalPrice,
      getTotalItems,
      clearCart,
      saveForLater,
      moveToCart,
      removeFromSaved,
      showNotification 
    }}>
      {children}
    </CartContext.Provider>
  );
};
