// import React from 'react'

// const Login = () => {
//   return (
//     <>
    
    
//     </>
//   )
// }

// export default Login


// import { useRef, useLayoutEffect, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
// } from "motion/react";

// function useElementWidth(ref) {
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     function updateWidth() {
//       if (ref.current) {
//         setWidth(ref.current.offsetWidth);
//       }
//     }
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, [ref]);

//   return width;
// }

//  export const ScrollVelocity = ({
//   scrollContainerRef,
//   texts = [],
//   velocity = 100,
//   className = "",
//   damping = 50,
//   stiffness = 400,
//   numCopies = 6,
//   velocityMapping = { input: [0, 1000], output: [0, 5] },
//   parallaxClassName,
//   scrollerClassName,
//   parallaxStyle,
//   scrollerStyle,
// }) => {
//   function VelocityText({
//     children,
//     baseVelocity = velocity,
//     scrollContainerRef,
//     className = "",
//     damping,
//     stiffness,
//     numCopies,
//     velocityMapping,
//     parallaxClassName,
//     scrollerClassName,
//     parallaxStyle,
//     scrollerStyle,
//   }) {
//     const baseX = useMotionValue(0);
//     const scrollOptions = scrollContainerRef
//       ? { container: scrollContainerRef }
//       : {};
//     const { scrollY } = useScroll(scrollOptions);
//     const scrollVelocity = useVelocity(scrollY);
//     const smoothVelocity = useSpring(scrollVelocity, {
//       damping: damping ?? 50,
//       stiffness: stiffness ?? 400,
//     });
//     const velocityFactor = useTransform(
//       smoothVelocity,
//       velocityMapping?.input || [0, 1000],
//       velocityMapping?.output || [0, 5],
//       { clamp: false }
//     );

//     const copyRef = useRef(null);
//     const copyWidth = useElementWidth(copyRef);

//     function wrap(min, max, v) {
//       const range = max - min;
//       const mod = (((v - min) % range) + range) % range;
//       return mod + min;
//     }

//     const x = useTransform(baseX, (v) => {
//       if (copyWidth === 0) return "0px";
//       return `${wrap(-copyWidth, 0, v)}px`;
//     });

//     const directionFactor = useRef(1);
//     useAnimationFrame((t, delta) => {
//       let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//       if (velocityFactor.get() < 0) {
//         directionFactor.current = -1;
//       } else if (velocityFactor.get() > 0) {
//         directionFactor.current = 1;
//       }

//       moveBy += directionFactor.current * moveBy * velocityFactor.get();
//       baseX.set(baseX.get() + moveBy);
//     });

//     const spans = [];
//     for (let i = 0; i < (numCopies ?? 1); i++) {
//       spans.push(
//         <span
//           className={`flex-shrink-0 ${className}`}
//           key={i}
//           ref={i === 0 ? copyRef : null}
//         >
//           {children}
//         </span>
//       );
//     }

//     return (
//       <div
//         className={`${parallaxClassName} relative overflow-hidden`}
//         style={parallaxStyle}
//       >
//         <motion.div
//           className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
//           style={{ x, ...scrollerStyle }}
//         >
//           {spans}
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <section>
//       {texts.map((text, index) => (
//         <VelocityText
//           key={index}
//           className={className}
//           baseVelocity={index % 2 !== 0 ? -velocity : velocity}
//           scrollContainerRef={scrollContainerRef}
//           damping={damping}
//           stiffness={stiffness}
//           numCopies={numCopies}
//           velocityMapping={velocityMapping}
//           parallaxClassName={parallaxClassName}
//           scrollerClassName={scrollerClassName}
//           parallaxStyle={parallaxStyle}
//           scrollerStyle={scrollerStyle}
//         >
//           {text}&nbsp;
//         </VelocityText>
//       ))}
//     </section>
//   );
// }; 


// export default ScrollVelocity;

// ScrollVelocity.jsx





// ScrollVelocity.jsx

// import { useRef, useLayoutEffect, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
// } from "motion/react";

// function useElementWidth(ref) {
//   const [width, setWidth] = useState(0);
//   useLayoutEffect(() => {
//     function updateWidth() {
//       if (ref.current) {
//         setWidth(ref.current.offsetWidth);
//       }
//     }
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, [ref]);
//   return width;
// }

// function VelocityText({
//   children,
//   baseVelocity = 100,
//   scrollContainerRef,
//   className = "",
//   damping = 50,
//   stiffness = 400,
//   numCopies = 1,
//   velocityMapping = { input: [0, 1000], output: [0, 5] },
//   parallaxClassName,
//   scrollerClassName,
//   parallaxStyle,
//   scrollerStyle,
// }) {
//   const baseX = useMotionValue(0);
//   const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
//   const { scrollY } = useScroll(scrollOptions);
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
//   const velocityFactor = useTransform(
//     smoothVelocity,
//     velocityMapping.input,
//     velocityMapping.output,
//     { clamp: false }
//   );

//   const copyRef = useRef(null);
//   const copyWidth = useElementWidth(copyRef);

//   function wrap(min, max, v) {
//     const range = max - min;
//     const mod = (((v - min) % range) + range) % range;
//     return mod + min;
//   }

//   const x = useTransform(baseX, (v) => {
//     if (copyWidth === 0) return "0px";
//     return `${wrap(-copyWidth, 0, v)}px`;
//   });

//   const directionFactor = useRef(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
//     baseX.set(baseX.get() + moveBy);

//     // Flip direction when reaching bounds
//     if (baseX.get() > 0 || baseX.get() < -copyWidth) {
//       directionFactor.current *= -1;
//     }
//   });

//   const spans = [];
//   for (let i = 0; i < numCopies; i++) {
//     spans.push(
//       <span className={`flex-shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
//         {children}
//       </span>
//     );
//   }

//   return (
//     <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
//       <motion.div
//         className={`${scrollerClassName} flex whitespace-nowrap`}
//         style={{ x, ...scrollerStyle }}
//       >
//         {spans}
//       </motion.div>
//     </div>
//   );
// }

// export const ScrollVelocity = ({
//   children,
//   scrollContainerRef,
//   velocity = 75,
//   className = "",
//   damping = 50,
//   stiffness = 400,
//   numCopies = 1,
//   velocityMapping = { input: [0, 1000], output: [0, 5] },
//   parallaxClassName,
//   scrollerClassName,
//   parallaxStyle,
//   scrollerStyle,
// }) => {
//   return (
//     <VelocityText
//       className={className}
//       baseVelocity={velocity}
//       scrollContainerRef={scrollContainerRef}
//       damping={damping}
//       stiffness={stiffness}
//       numCopies={numCopies}
//       velocityMapping={velocityMapping}
//       parallaxClassName={parallaxClassName}
//       scrollerClassName={scrollerClassName}
//       parallaxStyle={parallaxStyle}
//       scrollerStyle={scrollerStyle}
//     >
//       {children}
//     </VelocityText>
//   );
// };

// export default ScrollVelocity;


// import ElectricBorder from '../../components/ElectricBorder';

// const clubs = [
//   'Manchester United',
//   'Real Madrid',
//   'AC Milan',
//   'Bayern Munich',
//   'Barcelona',
//   'Juventus',
// ];

// const ScrollVelocity = () => {
//   return (
//     <div className="flex overflow-x-auto gap-4 p-4">
//       {clubs.map((club, index) => (
//         <ElectricBorder
//           key={index}
//           color="#7df9ff"
//           speed={1.2}
//           chaos={0.6}
//           thickness={2}
//           style={{ borderRadius: 12, padding: '12px', minWidth: '200px' }}
//         >
//           <div className="club-box text-center">
//             <p className="text-white font-semibold text-lg">{club}</p>
//           </div>
//         </ElectricBorder>
//       ))}
//     </div>
//   );
// };

// export default ScrollVelocity;

// import ElectricBorder from '../../components/ElectricBorder';

// const clubs = [
//   "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Real Madrid", "Barcelona", "Atlético Madrid",
//   "Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham Hotspur",
//   "Juventus", "AC Milan", "Inter Milan", "Napoli", "AS Roma", "Paris Saint-Germain", "Marseille",
//   "Ajax", "Feyenoord", "Porto", "Benfica", "Sporting CP", "Galatasaray", "Fenerbahçe", "Celtic",
//   "Rangers", "Club Brugge", "Shakhtar Donetsk", "Al Hilal", "Al Nassr", "LA Galaxy", "New York City FC",
//   "Flamengo", "River Plate", "Boca Juniors", "Sao Paulo", "Palmeiras", "Monterrey", "Tigres UANL",
//   "Seattle Sounders", "Toronto FC", "Pachuca", "Cruzeiro", "Corinthians", "Vasco da Gama", "Besiktas",
//   "Red Star Belgrade", "Dinamo Zagreb", "Anderlecht", "Leeds United", "Everton", "Roma", "Lazio"
// ];

// // Helper to chunk array into rows
// const chunkArray = (arr, size) =>
//   Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
//     arr.slice(i * size, i * size + size)
//   );

// const ScrollVelocity = () => {
//   const rows = chunkArray(clubs, 2); // 10 clubs per row

//   return (
//     <div className="w-full py-12 px-6 text-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">Top Football Clubs</h2>

//         <div className="space-y-8">
//           {rows.map((rowClubs, rowIndex) => {
//             const isEven = rowIndex % 2 === 0;
//             const animationClass = isEven
//               ? 'animate-[scrollLeft_40s_linear_infinite]'
//               : 'animate-[scrollRight_40s_linear_infinite]';

//             return (
//               <div key={rowIndex} className="overflow-hidden w-full">
//                 <div className={`flex whitespace-nowrap ${animationClass}`}>
//                   {/* Duplicate content for seamless loop */}
//                   {/* {[...rowClubs, ...rowClubs].map((club, index) => (
//                     <ElectricBorder
//                       key={`${rowIndex}-${index}`}
//                       color="#7df9ff"
//                       speed={1.2}
//                       chaos={0.6}
//                       thickness={2}
//                       style={{ borderRadius: 12 }}
//                       className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 px-4 py-3"
//                     >
//                       <div className="text-center">
//                         <span className="text-lg font-medium">{club}</span>
//                       </div>
//                     </ElectricBorder> 
//                   ))} */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollVelocity;


import { useRef, useLayoutEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}


const clubs = [
  "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Real Madrid", "Barcelona", "Atlético Madrid",
  "Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham Hotspur",
  "Juventus", "AC Milan", "Inter Milan", "Napoli", "AS Roma", "Paris Saint-Germain", "Marseille",
  "Ajax", "Feyenoord", "Porto", "Benfica", "Sporting CP", "Galatasaray", "Fenerbahçe", "Celtic",
  "Rangers", "Club Brugge", "Shakhtar Donetsk", "Al Hilal", "Al Nassr", "LA Galaxy", "New York City FC",
  "Flamengo", "River Plate", "Boca Juniors", "Sao Paulo", "Palmeiras", "Monterrey", "Tigres UANL",
  "Seattle Sounders", "Toronto FC", "Pachuca", "Cruzeiro", "Corinthians", "Vasco da Gama", "Besiktas",
  "Red Star Belgrade", "Dinamo Zagreb", "Anderlecht", "Leeds United", "Everton", "Roma", "Lazio"
];






export const ScrollVelocity = ({
  scrollContainerRef,
  texts =[clubs.join(" • ")],
 
  velocity = 100,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = '',
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, v => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < (numCopies ?? 1); i++) {
      spans.push(
        <span className={`flex-shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }

    return (
      <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap text-center text-2xl font-bold tracking-[-0.02em] drop-shadow`}
          style={{ x, ...scrollerStyle }}
        >
          {spans}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;
