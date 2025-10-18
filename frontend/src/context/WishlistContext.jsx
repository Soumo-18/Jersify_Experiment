import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToWishlist = (item) => {
    setWishlist(prev => [...prev, item]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist, showNotification }}>
      {children}
    </WishlistContext.Provider>
  );
};
