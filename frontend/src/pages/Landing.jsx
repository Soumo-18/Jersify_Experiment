// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import { gsap } from "gsap";

// const Landing = () => {
//   const navigate = useNavigate();
//   const [countdown, setCountdown] = useState(4);

//   // Countdown effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown(prev => {
//         if (prev <= 1) {
//           navigate('/home');
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [navigate]);

//   // Split text into characters for animation
//   const splitText = (text, className = '') => {
//     return text.split('').map((char, index) => (
//       <span 
//         key={index} 
//         className={`char inline-block ${char === ' ' ? 'w-4' : ''} ${className}`}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ));
//   };

//   // Split text into words for animation
//   const splitWords = (text) => {
//     return text.split(' ').map((word, index) => (
//       <span 
//         key={index} 
//         className={`word inline-block mr-3 overflow-hidden description-word`}
//       >
//         {word}
//       </span>
//     ));
//   };

//   // GSAP animations
//   // useGSAP(() => {
//   //   // Wait a bit for DOM to be ready
//   //   gsap.set(['.landing-title', '.landing-subtitle', '.landing-description'], { 
//   //     opacity: 1 
//   //   });

//   //   // Set initial states for characters and words
//   //   gsap.set('.title-char', { y: 100, opacity: 0 });
//   //   gsap.set('.subtitle-char', { y: 60, opacity: 0 });
//   //   gsap.set('.description-word', { y: 30, opacity: 0 });
//   //   gsap.set('.loading-container', { y: 20, opacity: 0 });

//   //   const tl = gsap.timeline({ delay: 0.5 });

//   //   // Title character animation - slower and more dramatic
//   //   tl.to('.title-char', {
//   //     y: 0,
//   //     opacity: 1,
//   //     duration: 0.8,
//   //     ease: 'back.out(1.7)',
//   //     stagger: 0.08,
//   //   })
    
//   //   // Subtitle character animation
//   //   .to('.subtitle-char', {
//   //     y: 0,
//   //     opacity: 1,
//   //     duration: 0.6,
//   //     ease: 'power2.out',
//   //     stagger: 0.06,
//   //   }, '-=1.5')
    
//   //   // Description word animation
//   //   .to('.description-word', {
//   //     y: 0,
//   //     opacity: 1,
//   //     duration: 0.5,
//   //     ease: 'power2.out',
//   //     stagger: 0.04,
//   //   }, '-=1')
    
//   //   // Loading indicator animation
//   //   .to('.loading-container', {
//   //     opacity: 1,
//   //     y: 0,
//   //     duration: 0.5,
//   //     ease: 'power2.out',
//   //   }, '-=0.5');

//   // }, []);
//     useGSAP(() => {
//     // Initial setup remains the same
//     gsap.set(['.landing-title', '.landing-subtitle', '.landing-description'], { 
//       opacity: 1 
//     });

//     gsap.set('.title-char', { y: 100, opacity: 0 });
//     gsap.set('.subtitle-char', { y: 60, opacity: 0 });
//     gsap.set('.description-word', { y: 30, opacity: 0 });
//     gsap.set('.loading-container', { y: 20, opacity: 0 });

//     const tl = gsap.timeline({ delay: 0.2 }); // Reduced initial delay

//     // Faster title animation
//     tl.to('.title-char', {
//       y: 0,
//       opacity: 1,
//       duration: 0.4, // Reduced from 0.8
//       ease: 'back.out(1.7)',
//       stagger: 0.03, // Reduced from 0.08
//     })
    
//     // Faster subtitle animation
//     .to('.subtitle-char', {
//       y: 0,
//       opacity: 1,
//       duration: 0.3, // Reduced from 0.6
//       ease: 'power2.out',
//       stagger: 0.02, // Reduced from 0.06
//     }, '-=0.8') // Adjusted overlap
    
//     // Faster description animation
//     .to('.description-word', {
//       y: 0,
//       opacity: 1,
//       duration: 0.2, // Reduced from 0.5
//       ease: 'power2.out',
//       stagger: 0.01, // Reduced from 0.04
//     }, '-=0.5') // Adjusted overlap
    
//     // Faster loading indicator
//     .to('.loading-container', {
//       opacity: 1,
//       y: 0,
//       duration: 0.3, // Reduced from 0.5
//       ease: 'power2.out',
//     }, '-=0.2');

//   }, []);

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden'>
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center text-center">
        
//         {/* Main Title with character animation */}
//         <h1 className="landing-title text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide max-w-6xl mb-8 text-white">
//           {splitText('JERSIFY: Where Club Passion Meets Global Style', 'title-char')}
//         </h1>

//         {/* Subtitle with character animation */}
//         {/* <p className='landing-subtitle text-xl sm:text-2xl lg:text-4xl font-semibold tracking-wide max-w-5xl mb-8 text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text'>
//           {splitText('From Manchester to Madrid—Jerseys That Speak Your Soul', 'subtitle-char')}
//         </p> */} 
//        <p className='landing-subtitle  text-xl sm:text-2xl lg:text-4xl font-black tracking-wide max-w-5xl mb-8'>
//   {splitText('From Manchester to Madrid—Jerseys That Speak Your Soul', 'subtitle-char')}
// </p>

//         {/* Description with word animation */}
//         <p className='landing-description text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-4xl mb-8'>
//           {splitWords("Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more.")}
//         </p>

//         {/* Loading indicator with countdown */}
//         <div className="loading-container mt-16 flex flex-col items-center space-y-4">
//           <div className="flex items-center space-x-2">
//             <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-75"></div>
//             <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></div>
//           </div>
//           <span className="text-white text-sm font-medium">
//             Redirecting to home in {countdown} second{countdown !== 1 ? 's' : ''}...
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Landing;


//expo 1 worked with stairs but no animation landing
// import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Landing = () => {
//   const navigate = useNavigate();


//   const [countdown, setCountdown] = useState(4);

//   // Add back the splitText function
//   const splitText = (text, className = '') => {
//     return text.split('').map((char, index) => (
//       <span 
//         key={index} 
//         className={`char inline-block ${char === ' ' ? 'w-4' : ''} ${className}`}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ));
//   };

//   // Add back the splitWords function
//   const splitWords = (text) => {
//     return text.split(' ').map((word, index) => (
//       <span 
//         key={index} 
//         className={`word inline-block mr-3 overflow-hidden description-word`}
//       >
//         {word}
//       </span>
//     ));
//   };





//   useEffect(() => {
//     // Use useEffect for navigation instead of direct setState
//     const timer = setTimeout(() => {
//       navigate('/home');
//     }, 4000); // 4 seconds delay

//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <div className='min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden'>
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center text-center">
        
//         {/* Main Title with character animation */}
//         <h1 className="landing-title text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide max-w-6xl mb-8 text-white">
//           {splitText('JERSIFY: Where Club Passion Meets Global Style', 'title-char')}
//         </h1>

//         {/* Subtitle with character animation */}
//         {/* <p className='landing-subtitle text-xl sm:text-2xl lg:text-4xl font-semibold tracking-wide max-w-5xl mb-8 text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text'>
//           {splitText('From Manchester to Madrid—Jerseys That Speak Your Soul', 'subtitle-char')}
//         </p> */} 
//        <p className='landing-subtitle  text-xl sm:text-2xl lg:text-4xl font-black tracking-wide max-w-5xl mb-8'>
//   {splitText('From Manchester to Madrid—Jerseys That Speak Your Soul', 'subtitle-char')}
// </p>

//         {/* Description with word animation */}
//         <p className='landing-description text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-4xl mb-8'>
//           {splitWords("Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more.")}
//         </p>

//         {/* Loading indicator with countdown */}
//         <div className="loading-container mt-16 flex flex-col items-center space-y-4">
//           <div className="flex items-center space-x-2">
//             <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
//             <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-75"></div>
//             <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></div>
//           </div>
//           <span className="text-white text-sm font-medium">
//             Redirecting to home in {countdown} second{countdown !== 1 ? 's' : ''}...
//           </span>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Landing;


//expo 2
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGSAP } from '@gsap/react';
// import { gsap } from "gsap";

// const Landing = () => {
//   const navigate = useNavigate();
//   const [countdown, setCountdown] = useState(4);

//   // Split text helper function
//   const splitText = (text, className = '') => {
//     return text.split('').map((char, index) => (
//       <span 
//         key={index} 
//         className={`char inline-block ${char === ' ' ? 'w-4' : ''} ${className}`}
//       >
//         {char === ' ' ? '\u00A0' : char}
//       </span>
//     ));
//   };

//   // GSAP Animation
//   useGSAP(() => {
//     gsap.set(['.landing-title', '.landing-subtitle', '.landing-description'], { 
//       opacity: 1 
//     });

//     gsap.set('.title-char', { y: 100, opacity: 0 });
//     gsap.set('.subtitle-char', { y: 60, opacity: 0 });
//     gsap.set('.description-word', { y: 30, opacity: 0 });

//     const tl = gsap.timeline({ delay: 0.2 });

//     tl.to('.title-char', {
//       y: 0,
//       opacity: 1,
//       duration: 0.4,
//       ease: 'back.out(1.7)',
//       stagger: 0.03,
//     })
//     .to('.subtitle-char', {
//       y: 0,
//       opacity: 1,
//       duration: 0.3,
//       ease: 'power2.out',
//       stagger: 0.02,
//     }, '-=0.5');
//   }, []);

//   // Navigation timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown(prev => {
//         if (prev <= 1) {
//           navigate('/home');
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [navigate]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
//       <h1 className="landing-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
//         {splitText('JERSIFY', 'title-char')}
//       </h1>
      
//       <p className="landing-subtitle text-xl sm:text-2xl lg:text-3xl mb-8 text-center">
//         {splitText('Where Club Passion Meets Global Style', 'subtitle-char')}
//       </p>

//       <div className="text-center text-lg text-gray-400 mt-8">
//         Redirecting to home in {countdown} seconds...
//       </div>
//     </div>
//   );
// };

// export default Landing;

//expo 3 

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";

const Landing = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(4);

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          navigate('/home');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  // Split text functions
  const splitText = (text, className = '') => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className={`char inline-block ${char === ' ' ? 'w-4' : ''} ${className}`}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const splitWords = (text) => {
    return text.split(' ').map((word, index) => (
      <span 
        key={index} 
        className={`word inline-block mr-3 overflow-hidden description-word`}
      >
        {word}
      </span>
    ));
  };

  useGSAP(() => {
    gsap.set(['.landing-title', '.landing-subtitle', '.landing-description'], { 
      opacity: 1 
    });

    gsap.set('.title-char', { y: 100, opacity: 0 });
    gsap.set('.subtitle-char', { y: 60, opacity: 0 });
    gsap.set('.description-word', { y: 30, opacity: 0 });
    gsap.set('.loading-container', { y: 20, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.2 });

    tl.to('.title-char', {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'back.out(1.7)',
      stagger: 0.03,
    })
    .to('.subtitle-char', {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
      stagger: 0.02,
    }, '-=0.8')
    .to('.description-word', {
      y: 0,
      opacity: 1,
      duration: 0.2,
      ease: 'power2.out',
      stagger: 0.01,
    }, '-=0.5')
    .to('.loading-container', {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    }, '-=0.2');
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Main Title with character animation */}
        {/* <h1 className="landing-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide max-w-6xl mb-8 text-white">
          {splitText('JERSIFY: Where Club Passion Meets Global Style', 'title-char')}
        </h1> */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide text-white mb-2">
            {splitText('JERSIFY: Where Club Passion', 'title-char')}
      </h1>
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide text-white">
           {splitText(' —Meets Global Style', 'title-char')}
    </h1>

        {/* Subtitle with character animation */}
        {/* <p className='landing-subtitle text-xl sm:text-2xl lg:text-4xl font-black tracking-wide max-w-5xl mb-8'>
          {splitText('From Manchester to Madrid—Jerseys That Speak Your Soul', 'subtitle-char')}
        </p> */}
      <div className='landing-subtitle text-xl sm:text-2xl lg:text-4xl font-black tracking-wide max-w-5xl mb-8'>
  <p className="mb-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
    {splitText('From Manchester to Madrid', 'subtitle-char')}
  </p>
  <p className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent ">
    {splitText('—Jerseys That Speak Your Soul', 'subtitle-char')}
  </p>
</div>

        {/* Description with word animation */}
        <p className='landing-description text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-4xl mb-8'>
          {splitWords("Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more.")}
        </p>

        {/* Loading indicator with countdown */}
        <div className="loading-container mt-16 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce delay-75"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></div>
          </div>
          <span className="text-white text-sm font-medium">
            Redirecting to home in {countdown} second{countdown !== 1 ? 's' : ''}...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;