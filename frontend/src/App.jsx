import React, { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import ProfileCompletion from './pages/auth/ProfileCompletion'
import OAuthCallback from './pages/auth/OAuthCallback'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/layout/Footer'
import Stairs from './components/common/Stairs'
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Projects from './pages/Projects.jsx'
const AppContent = () => {
  const location = useLocation()
  const isFromLanding = location.state?.fromLanding

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* Landing page as default route without navbar/footer */}
        <Route path="/" element={<Landing />} />
        
        {/* Home page with conditional staircase animation */}
        <Route path="/home" element={
          isFromLanding ? (
            <Stairs>
              <Navbar />
              <Home />
              <Projects/>
              <Footer />
            </Stairs>
          ) : (
            <>
              <Navbar />
              <Home />
              <Projects/>
              <Footer />
            </>
          )
        } />
        
        {/* Other pages with navbar and footer */}
        <Route path="/login" element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        } />
        
        <Route path="/register" element={
          <>
            <Navbar />
            <Register />
            <Footer />
          </>
        } />
        
        {/* OAuth callback route */}
        <Route path="/auth/callback" element={<OAuthCallback />} />
        
        {/* Profile completion route */}
        <Route path="/auth/complete-profile" element={<ProfileCompletion />} />
        
        <Route path="/products" element={
          <>
            <Navbar />
            <Products />
            <Footer />
          </>
        } />
        
        <Route path="/product/:id" element={
          <>
            <Navbar />
            <ProductDetail />
            <Footer />
          </>
        } />
        
        <Route path="/wishlist" element={
          <>
            <Navbar />
            <Wishlist />
            <Footer />
          </>
        } />
        
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
