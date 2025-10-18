// import React, { useState, useEffect, useRef } from 'react';
// import video1 from '../assets/video1.mp4';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//   const videoRef = useRef(null);
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   useEffect(() => {
//     const loadVideo = async () => {
//       if (videoRef.current) {
//         try {
//           videoRef.current.load();
//           await videoRef.current.play();
//           console.log('Video started playing');
//         } catch (error) {
//           console.error('Video playback error:', error);
//         }
//       }
//     };

//     loadVideo();

//     // Cleanup function
//     return () => {
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.src = '';
//         videoRef.current.load();
//       }
//     };
//   }, []);

//   const handleVideoLoad = () => {
//     setIsVideoLoaded(true);
//     console.log('Video loaded successfully');
//   };

//   return (
//     <main className="relative min-h-screen w-full overflow-hidden bg-black">
//       {/* Video Background */}
//       <div className="fixed inset-0 w-full h-full">
//         <video
//           ref={videoRef}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           onLoadedData={handleVideoLoad}
//         >
//           <source src={video1} type="video/mp4" />
//           Your browser does not support video playback.
//         </video>

//         {/* Video Overlay */}
//         <div className="absolute inset-0 bg-black/40 z-10"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
//           Welcome to JERSIFY
//         </h1>
        
//         <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl drop-shadow-xl">
//           Your Premier Destination for Authentic Football Jerseys
//         </p>
        
//         {/* Call to Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-6">
//           <NavLink 
//             to="/products" 
//             className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
//           >
//             Explore Jerseys
//           </NavLink>
          
//           <NavLink 
//             to="/products" 
//             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl backdrop-blur-sm"
//           >
//             Shop Now
//           </NavLink>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;



import React, { useState, useEffect, useRef } from 'react';
import video1 from '../assets/video1.mp4';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const loadVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.load();
          await videoRef.current.play();
          console.log('Video started playing');
        } catch (error) {
          console.error('Video playback error:', error);
        }
      }
    };

    loadVideo();

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current.load();
      }
    };
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    console.log('Video loaded successfully');
  };

  return (
    <main className="relative h-[100vh] w-full overflow-hidden">
      {/* Scoped Video Background */}
      <div className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video playback.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
          Welcome to JERSIFY
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-4xl drop-shadow-xl">
          Your Premier Destination for Authentic Football Jerseys
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <NavLink 
            to="/products" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Explore Jerseys
          </NavLink>

          <NavLink 
            to="/products" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl backdrop-blur-sm"
          >
            Shop Now
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Home;

