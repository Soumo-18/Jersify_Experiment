// // import React from 'react'

// // const Login = () => {
// //   return (
// //     <>
    
    
// //     </>
// //   )
// // }

// // export default Login


// // import { useRef, useLayoutEffect, useState } from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useSpring,
// //   useTransform,
// //   useMotionValue,
// //   useVelocity,
// //   useAnimationFrame,
// // } from "motion/react";

// // function useElementWidth(ref) {
// //   const [width, setWidth] = useState(0);

// //   useLayoutEffect(() => {
// //     function updateWidth() {
// //       if (ref.current) {
// //         setWidth(ref.current.offsetWidth);
// //       }
// //     }
// //     updateWidth();
// //     window.addEventListener("resize", updateWidth);
// //     return () => window.removeEventListener("resize", updateWidth);
// //   }, [ref]);

// //   return width;
// // }

// //  export const ScrollVelocity = ({
// //   scrollContainerRef,
// //   texts = [],
// //   velocity = 100,
// //   className = "",
// //   damping = 50,
// //   stiffness = 400,
// //   numCopies = 6,
// //   velocityMapping = { input: [0, 1000], output: [0, 5] },
// //   parallaxClassName,
// //   scrollerClassName,
// //   parallaxStyle,
// //   scrollerStyle,
// // }) => {
// //   function VelocityText({
// //     children,
// //     baseVelocity = velocity,
// //     scrollContainerRef,
// //     className = "",
// //     damping,
// //     stiffness,
// //     numCopies,
// //     velocityMapping,
// //     parallaxClassName,
// //     scrollerClassName,
// //     parallaxStyle,
// //     scrollerStyle,
// //   }) {
// //     const baseX = useMotionValue(0);
// //     const scrollOptions = scrollContainerRef
// //       ? { container: scrollContainerRef }
// //       : {};
// //     const { scrollY } = useScroll(scrollOptions);
// //     const scrollVelocity = useVelocity(scrollY);
// //     const smoothVelocity = useSpring(scrollVelocity, {
// //       damping: damping ?? 50,
// //       stiffness: stiffness ?? 400,
// //     });
// //     const velocityFactor = useTransform(
// //       smoothVelocity,
// //       velocityMapping?.input || [0, 1000],
// //       velocityMapping?.output || [0, 5],
// //       { clamp: false }
// //     );

// //     const copyRef = useRef(null);
// //     const copyWidth = useElementWidth(copyRef);

// //     function wrap(min, max, v) {
// //       const range = max - min;
// //       const mod = (((v - min) % range) + range) % range;
// //       return mod + min;
// //     }

// //     const x = useTransform(baseX, (v) => {
// //       if (copyWidth === 0) return "0px";
// //       return `${wrap(-copyWidth, 0, v)}px`;
// //     });

// //     const directionFactor = useRef(1);
// //     useAnimationFrame((t, delta) => {
// //       let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

// //       if (velocityFactor.get() < 0) {
// //         directionFactor.current = -1;
// //       } else if (velocityFactor.get() > 0) {
// //         directionFactor.current = 1;
// //       }

// //       moveBy += directionFactor.current * moveBy * velocityFactor.get();
// //       baseX.set(baseX.get() + moveBy);
// //     });

// //     const spans = [];
// //     for (let i = 0; i < (numCopies ?? 1); i++) {
// //       spans.push(
// //         <span
// //           className={`flex-shrink-0 ${className}`}
// //           key={i}
// //           ref={i === 0 ? copyRef : null}
// //         >
// //           {children}
// //         </span>
// //       );
// //     }

// //     return (
// //       <div
// //         className={`${parallaxClassName} relative overflow-hidden`}
// //         style={parallaxStyle}
// //       >
// //         <motion.div
// //           className={`${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`}
// //           style={{ x, ...scrollerStyle }}
// //         >
// //           {spans}
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <section>
// //       {texts.map((text, index) => (
// //         <VelocityText
// //           key={index}
// //           className={className}
// //           baseVelocity={index % 2 !== 0 ? -velocity : velocity}
// //           scrollContainerRef={scrollContainerRef}
// //           damping={damping}
// //           stiffness={stiffness}
// //           numCopies={numCopies}
// //           velocityMapping={velocityMapping}
// //           parallaxClassName={parallaxClassName}
// //           scrollerClassName={scrollerClassName}
// //           parallaxStyle={parallaxStyle}
// //           scrollerStyle={scrollerStyle}
// //         >
// //           {text}&nbsp;
// //         </VelocityText>
// //       ))}
// //     </section>
// //   );
// // }; 


// // export default ScrollVelocity;

// // ScrollVelocity.jsx





// // ScrollVelocity.jsx

// // import { useRef, useLayoutEffect, useState } from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useSpring,
// //   useTransform,
// //   useMotionValue,
// //   useVelocity,
// //   useAnimationFrame,
// // } from "motion/react";

// // function useElementWidth(ref) {
// //   const [width, setWidth] = useState(0);
// //   useLayoutEffect(() => {
// //     function updateWidth() {
// //       if (ref.current) {
// //         setWidth(ref.current.offsetWidth);
// //       }
// //     }
// //     updateWidth();
// //     window.addEventListener("resize", updateWidth);
// //     return () => window.removeEventListener("resize", updateWidth);
// //   }, [ref]);
// //   return width;
// // }

// // function VelocityText({
// //   children,
// //   baseVelocity = 100,
// //   scrollContainerRef,
// //   className = "",
// //   damping = 50,
// //   stiffness = 400,
// //   numCopies = 1,
// //   velocityMapping = { input: [0, 1000], output: [0, 5] },
// //   parallaxClassName,
// //   scrollerClassName,
// //   parallaxStyle,
// //   scrollerStyle,
// // }) {
// //   const baseX = useMotionValue(0);
// //   const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
// //   const { scrollY } = useScroll(scrollOptions);
// //   const scrollVelocity = useVelocity(scrollY);
// //   const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
// //   const velocityFactor = useTransform(
// //     smoothVelocity,
// //     velocityMapping.input,
// //     velocityMapping.output,
// //     { clamp: false }
// //   );

// //   const copyRef = useRef(null);
// //   const copyWidth = useElementWidth(copyRef);

// //   function wrap(min, max, v) {
// //     const range = max - min;
// //     const mod = (((v - min) % range) + range) % range;
// //     return mod + min;
// //   }

// //   const x = useTransform(baseX, (v) => {
// //     if (copyWidth === 0) return "0px";
// //     return `${wrap(-copyWidth, 0, v)}px`;
// //   });

// //   const directionFactor = useRef(1);
// //   useAnimationFrame((t, delta) => {
// //     let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
// //     baseX.set(baseX.get() + moveBy);

// //     // Flip direction when reaching bounds
// //     if (baseX.get() > 0 || baseX.get() < -copyWidth) {
// //       directionFactor.current *= -1;
// //     }
// //   });

// //   const spans = [];
// //   for (let i = 0; i < numCopies; i++) {
// //     spans.push(
// //       <span className={`flex-shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
// //         {children}
// //       </span>
// //     );
// //   }

// //   return (
// //     <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
// //       <motion.div
// //         className={`${scrollerClassName} flex whitespace-nowrap`}
// //         style={{ x, ...scrollerStyle }}
// //       >
// //         {spans}
// //       </motion.div>
// //     </div>
// //   );
// // }

// // export const ScrollVelocity = ({
// //   children,
// //   scrollContainerRef,
// //   velocity = 75,
// //   className = "",
// //   damping = 50,
// //   stiffness = 400,
// //   numCopies = 1,
// //   velocityMapping = { input: [0, 1000], output: [0, 5] },
// //   parallaxClassName,
// //   scrollerClassName,
// //   parallaxStyle,
// //   scrollerStyle,
// // }) => {
// //   return (
// //     <VelocityText
// //       className={className}
// //       baseVelocity={velocity}
// //       scrollContainerRef={scrollContainerRef}
// //       damping={damping}
// //       stiffness={stiffness}
// //       numCopies={numCopies}
// //       velocityMapping={velocityMapping}
// //       parallaxClassName={parallaxClassName}
// //       scrollerClassName={scrollerClassName}
// //       parallaxStyle={parallaxStyle}
// //       scrollerStyle={scrollerStyle}
// //     >
// //       {children}
// //     </VelocityText>
// //   );
// // };

// // export default ScrollVelocity;


// // import ElectricBorder from '../../components/ElectricBorder';

// // const clubs = [
// //   'Manchester United',
// //   'Real Madrid',
// //   'AC Milan',
// //   'Bayern Munich',
// //   'Barcelona',
// //   'Juventus',
// // ];

// // const ScrollVelocity = () => {
// //   return (
// //     <div className="flex overflow-x-auto gap-4 p-4">
// //       {clubs.map((club, index) => (
// //         <ElectricBorder
// //           key={index}
// //           color="#7df9ff"
// //           speed={1.2}
// //           chaos={0.6}
// //           thickness={2}
// //           style={{ borderRadius: 12, padding: '12px', minWidth: '200px' }}
// //         >
// //           <div className="club-box text-center">
// //             <p className="text-white font-semibold text-lg">{club}</p>
// //           </div>
// //         </ElectricBorder>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ScrollVelocity;

// // import ElectricBorder from '../../components/ElectricBorder';

// // const clubs = [
// //   "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Real Madrid", "Barcelona", "Atlético Madrid",
// //   "Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham Hotspur",
// //   "Juventus", "AC Milan", "Inter Milan", "Napoli", "AS Roma", "Paris Saint-Germain", "Marseille",
// //   "Ajax", "Feyenoord", "Porto", "Benfica", "Sporting CP", "Galatasaray", "Fenerbahçe", "Celtic",
// //   "Rangers", "Club Brugge", "Shakhtar Donetsk", "Al Hilal", "Al Nassr", "LA Galaxy", "New York City FC",
// //   "Flamengo", "River Plate", "Boca Juniors", "Sao Paulo", "Palmeiras", "Monterrey", "Tigres UANL",
// //   "Seattle Sounders", "Toronto FC", "Pachuca", "Cruzeiro", "Corinthians", "Vasco da Gama", "Besiktas",
// //   "Red Star Belgrade", "Dinamo Zagreb", "Anderlecht", "Leeds United", "Everton", "Roma", "Lazio"
// // ];

// // // Helper to chunk array into rows
// // const chunkArray = (arr, size) =>
// //   Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
// //     arr.slice(i * size, i * size + size)
// //   );

// // const ScrollVelocity = () => {
// //   const rows = chunkArray(clubs, 2); // 10 clubs per row

// //   return (
// //     <div className="w-full py-12 px-6 text-white">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-3xl font-bold text-center mb-10">Top Football Clubs</h2>

// //         <div className="space-y-8">
// //           {rows.map((rowClubs, rowIndex) => {
// //             const isEven = rowIndex % 2 === 0;
// //             const animationClass = isEven
// //               ? 'animate-[scrollLeft_40s_linear_infinite]'
// //               : 'animate-[scrollRight_40s_linear_infinite]';

// //             return (
// //               <div key={rowIndex} className="overflow-hidden w-full">
// //                 <div className={`flex whitespace-nowrap ${animationClass}`}>
// //                   {/* Duplicate content for seamless loop */}
// //                   {/* {[...rowClubs, ...rowClubs].map((club, index) => (
// //                     <ElectricBorder
// //                       key={`${rowIndex}-${index}`}
// //                       color="#7df9ff"
// //                       speed={1.2}
// //                       chaos={0.6}
// //                       thickness={2}
// //                       style={{ borderRadius: 12 }}
// //                       className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-60 px-4 py-3"
// //                     >
// //                       <div className="text-center">
// //                         <span className="text-lg font-medium">{club}</span>
// //                       </div>
// //                     </ElectricBorder> 
// //                   ))} */}
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScrollVelocity;


// import { useRef, useLayoutEffect, useState } from 'react';
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame
// } from 'motion/react';

// function useElementWidth(ref) {
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     function updateWidth() {
//       if (ref.current) {
//         setWidth(ref.current.offsetWidth);
//       }
//     }
//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, [ref]);

//   return width;
// }


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






// export const ScrollVelocity = ({
//   scrollContainerRef,
//   texts =[clubs.join(" • ")],
 
//   velocity = 100,
//   className = '',
//   damping = 50,
//   stiffness = 400,
//   numCopies = 6,
//   velocityMapping = { input: [0, 1000], output: [0, 5] },
//   parallaxClassName,
//   scrollerClassName,
//   parallaxStyle,
//   scrollerStyle
// }) => {
//   function VelocityText({
//     children,
//     baseVelocity = velocity,
//     scrollContainerRef,
//     className = '',
//     damping,
//     stiffness,
//     numCopies,
//     velocityMapping,
//     parallaxClassName,
//     scrollerClassName,
//     parallaxStyle,
//     scrollerStyle
//   }) {
//     const baseX = useMotionValue(0);
//     const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
//     const { scrollY } = useScroll(scrollOptions);
//     const scrollVelocity = useVelocity(scrollY);
//     const smoothVelocity = useSpring(scrollVelocity, {
//       damping: damping ?? 50,
//       stiffness: stiffness ?? 400
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

//     const x = useTransform(baseX, v => {
//       if (copyWidth === 0) return '0px';
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
//         <span className={`flex-shrink-0 ${className}`} key={i} ref={i === 0 ? copyRef : null}>
//           {children}
//         </span>
//       );
//     }

//     return (
//       <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
//         <motion.div
//           className={`${scrollerClassName} flex whitespace-nowrap text-center text-2xl font-bold tracking-[-0.02em] drop-shadow`}
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


















import { useState } from "react"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const API_BASE_URL = "http://localhost:5000/api"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [focusedField, setFocusedField] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Store token and user data
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data))
        
        toast.success("Login successful!")
        navigate("/home")
      } else {
        toast.error(data.message || "Login failed")
      }
    } catch (error) {
      toast.error("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/users/auth/google`
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Image Section - Football related */}
      <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center p-10">
        <div className="w-full h-full max-h-[600px] bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1993&q=80"
            alt="Football stadium"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-neutral-400 text-base">Sign in to your account</p>
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full mb-6 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 text-base flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-neutral-900 text-neutral-400">Or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className={
                    "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
                    (focusedField === "email" ? "text-orange-500" : "text-neutral-500")
                  }
                />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email address"
                  className={
                    "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "email" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="relative">
                <Lock
                  className={
                    "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
                    (focusedField === "password" ? "text-orange-500" : "text-neutral-500")
                  }
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  className={
                    "w-full pl-11 pr-12 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "password" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                  className="w-4 h-4 bg-neutral-800 border-2 border-neutral-600 rounded focus:ring-orange-500 focus:ring-2 text-orange-500"
                />
                <label htmlFor="rememberMe" className="text-sm text-neutral-300">
                  Remember me
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 text-base mt-8"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-neutral-400 text-base">
              Don't have an account?{" "}
              <Link to="/register" className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


