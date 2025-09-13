// import React from 'react';
// import video1 from '../assets/video1.mp4'
// import SplitText from '../components/SplitText'
// const handleAnimationComplete = () => {
//  // console.log('All letters have animated!');
// };


// const Home = () => {
//   return (
    
//     <div className='flex flex-col items-center mt-6 lg:mt-20'>

             

//                 <SplitText
//                      text={`JERSIFY: Where Club Passion Meets Global Style\n“Wear Your Loyalty. Rep Your Club. Rule the Streets.”\nFrom Manchester to Madrid—Jerseys That Speak Your Soul`}
//         className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
//         delay={50}
//         duration={0.4}
//         ease="power3.out"
//         splitType="chars"
//         from={{ opacity: 0, y: 40 }}
//         to={{ opacity: 1, y: 0 }}
//         threshold={0.1}
//         rootMargin="-100px"
//         textAlign="center"
//                        onLetterAnimationComplete={handleAnimationComplete}
//                 />
//          <span className='bg-gradient-to-r from-red-600 to-[#FFCAD4] text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
//           {" "}
//           From Manchester to Madrid—Jerseys That Speak Your Soul</span>
//              <SplitText
//                 text={`Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more. This isn’t just merch. It’s a badge of honor. A statement of passion. A way to connect with millions who live and breathe the beautiful game. Gear up, represent your colors, and let your jersey do the talking.`}
//         className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
//         delay={50}
//         duration={0.4}
//         ease="power3.out"
//         splitType="words"
//         from={{ opacity: 0, y: 20 }}
//         to={{ opacity: 1, y: 0 }}
//         threshold={0.1}
//         rootMargin="-100px"
//         textAlign="center"
//                  onLetterAnimationComplete={handleAnimationComplete}
//                  />

    


//       {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
//           JERSIFY: Where Club Passion Meets Global Style
//           “Wear Your Loyalty. Rep Your Club. Rule the Streets.”
//         <span className='bg-gradient-to-r from-red-600 to-[#FFCAD4] text-transparent bg-clip-text'>
//           {" "}
//           From Manchester to Madrid—Jerseys That Speak Your Soul</span>
//       </h1>
//       <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
//         Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more. This isn’t just merch. It’s a badge of honor. A statement of passion. A way to connect with millions who live and breathe the beautiful game. Gear up, represent your colors, and let your jersey do the talking.
//       </p>  */}


//        <div className="flex justify-center my-10">
//         <a
//           href="#"
//           className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
//         >
//           Explore
//         </a>
//         <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-blue-700 transition duration-500">
//           Shop Now
//         </a>
//       </div>


//           <div className="flex mt-10 justify-center">
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>


//     </div>
//   );
// };

// export default Home;

//ritam
// import React, { useState } from 'react';
// import video1 from '../assets/video1.mp4'
// import SplitText from '../components/SplitText'

// const Home = () => {
//   const [showText, setShowText] = useState(true);
//   const [showVideo, setShowVideo] = useState(false);

//   const handleAnimationComplete = () => {
//     // Immediately start transition after text animation
//     setShowText(false);
//     // Show video right after text starts fading
//     setTimeout(() => {
//       setShowVideo(true);
//     }, 500); // Shorter delay for smoother transition
//   };

//   return (
//     <div className='relative flex flex-col items-center mt-6 lg:mt-20 min-h-screen overflow-hidden'>
//       {/* Background Video with immediate play when shown */}
//       {showVideo && (
//         <div className="fixed inset-0 z-0 transition-opacity duration-500 ease-in">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline // Added for better mobile support
//             className="w-full h-full object-cover"
//           >
//             <source src={video1} type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         </div>
//       )}

//       {/* Text Content */}
//       <div className={`relative z-10 flex flex-col items-center transition-opacity duration-500 ${
//         showText ? 'opacity-100' : 'opacity-0'
//       }`}>
         
//                 <SplitText
//          className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
//          delay={30}
//                       text={`JERSIFY: Where Club Passion Meets Global Style\n“Wear Your Loyalty. Rep Your Club. Rule the Streets.”\nFrom Manchester to Madrid—Jerseys That Speak Your Soul`}
//          duration={0.4}
//          ease="power3.out"
//          splitType="chars"
//          from={{ opacity: 0, y: 40 }}
//          to={{ opacity: 1, y: 0 }}         threshold={0.1}
//          rootMargin="-100px"
//          textAlign="center"
//                         onLetterAnimationComplete={handleAnimationComplete}
//                  />
//       </div>

//       {/* Video Overlay Content */}
//       {showVideo && (
//         <div className="relative z-20 flex flex-col items-center animate-fade-in">
//                            <div className="flex mt-10 justify-center">
//         <video
//           autoPlay
//           loop
//           muted
//           className="rounded-lg w-screen border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
//         >
//           <source src={video1} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
        
//       </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


//adrian gsap trial

import React from 'react';
import video1 from '../assets/video1.mp4'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { gsap } from "gsap";

import { NavLink } from 'react-router-dom';
const Home = () => {

  useGSAP(() => {
    const heroSplit = new SplitText('.title',{type:'chars,words'});
    const paragraphSplit = new SplitText('.subtitle',{type:'lines'});
      heroSplit.chars.forEach((cahr) => cahr.classList.add('text-gradient'));
    gsap.from(heroSplit.chars,{
      yPercent:100,
      duration:1.8,
      ease:'expo.out',
      stagger:0.05
    });

    gsap.from(paragraphSplit.lines,{
      opacity:0,
      yPercent:100,
      duration:1.8,
      ease:'expo.out',
      stagger:0.06,
      delay:4
    })

  },[] )
  

  return (
    
    <div className='flex flex-col items-center mt-6 lg:mt-20'>


      <h1 className="title text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide max-w-7xl  ">
          JERSIFY: Where Club Passion Meets Global Style     
      </h1>
      <p className='subtitle mt-6  text-2xl sm:text-xl lg:text-4xl text-center tracking-wide  max-w-6xl  text-white/70 '>
                                From Manchester to Madrid—Jerseys That Speak Your Soul</p>


      <p className=' subtitle mt-4 text-lg text-center text-neutral-500 max-w-4xl'>
        Whether you're chanting in the stands or streaming the match at 2 AM, your loyalty deserves to be worn loud and proud. At JERSIFY, we bring you authentic, high-quality club jerseys from every corner of the footballing world—Premier League icons, La Liga legends, Serie A classics, and more. This isn’t just merch. It’s a badge of honor. A statement of passion. A way to connect with millions who live and breathe the beautiful game. Gear up, represent your colors, and let your jersey do the talking.
      </p> 


       <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Explore
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border hover:bg-blue-700 transition duration-500">
          Shop Now
        </a>
      </div>


          <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


    </div>
  );
};

export default Home;
