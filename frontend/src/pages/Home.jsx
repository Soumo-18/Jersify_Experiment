import React, { useState, useEffect, useRef } from 'react';
import video1 from '../assets/video1.mp4';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    console.log('Video path:', video1);
    console.log('Video file exists:', !!video1);
  }, []);

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error('Video error:', e);
    console.error('Error code:', e.target?.error?.code);
    console.error('Error message:', e.target?.error?.message);
    setVideoError(true);
  };

  const handleVideoCanPlay = async (e) => {
    console.log('Video can play');
    try {
      await e.target.play();
      console.log('Video play started successfully');
      setShowPlayButton(false);
    } catch (error) {
      console.error('Auto-play was prevented:', error);
      setShowPlayButton(true);
    }
  };

  const handleManualPlay = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setShowPlayButton(false);
      } catch (error) {
        console.error('Manual play failed:', error);
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          key={video1}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onLoadStart={() => console.log('Video load started')}
          onLoadedMetadata={() => console.log('Video metadata loaded')}
          onCanPlay={handleVideoCanPlay}
          onCanPlayThrough={() => console.log('Video can play through')}
          style={{ 
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src={video1} type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      </div>

      {/* Fallback Background - only show if video fails */}
      {videoError && (
        <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 z-0">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <h2 className="text-2xl mb-4">Video Background Unavailable</h2>
              <p className="text-gray-300">Using fallback background</p>
            </div>
          </div>
        </div>
      )}

      {/* Loading State - only show while loading */}
      {!videoLoaded && !videoError && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-30">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p>Loading video background...</p>
          </div>
        </div>
      )}

      {/* Manual Play Button - shows when autoplay is blocked */}
      {showPlayButton && !videoError && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <button
            onClick={handleManualPlay}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Play Background Video
          </button>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
          Welcome to JERSIFY
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl drop-shadow-xl">
          Your Premier Destination for Authentic Football Jerseys
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <NavLink 
            to="/products" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Explore Jerseys
          </NavLink>
          
          <NavLink 
            to="/products" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl backdrop-blur-sm"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;