// import React from 'react'
// import Navbar from './components/layout/Navbar'
// import Register from './pages/auth/Register'
// import Home from './pages/Home'
// import ScrollVelocity from './pages/auth/Login'
// import Footer from './components/layout/Footer'
// import Products from './pages/Products'
// import Stairs from './components/common/Stairs'
// import ThemeToggle from './components/common/ThemeToggle'
// import './index.css'
// import Projects from './pages/Projects';
// import FeatureSection from './components/FeatureSection'
// import PrimeMembership from './components/PrimeMembership'
// import { BrowserRouter,Routes, Route, Navigate  } from 'react-router-dom'
// import Login from './pages/auth/Login'
// const App = () => {
//     return (
//      <>
//       <div>
//         {/* <Navbar />
//         <Home />
//         <PrimeMembership /> */}
//        <Routes >
//          <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//        </Routes>
//         {/* <Signup />
//         <Login /> */}
//          {/* < Navbar />        
//          <div className="max-w-7xl mx-auto pt-20 px-6">
//         < Home />
//        </div> 
//         <Projects />
//         <Products/>
//         < Register />
//         <FeatureSection />
//         < Footer /> */}
       
        
//       {/* <ScrollVelocity velocity={110} className="w-full  py-12 px-6 text-white">
//   <div className="max-w-7xl mx-auto">
//     <h2 className="text-3xl font-bold text-center mb-10">Top Football Clubs</h2>

//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
//       {[
//         "Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Real Madrid", "Barcelona", "Atlético Madrid",
//         "Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham Hotspur",
//         "Juventus", "AC Milan", "Inter Milan", "Napoli", "AS Roma", "Paris Saint-Germain", "Marseille",
//         "Ajax", "Feyenoord", "Porto", "Benfica", "Sporting CP", "Galatasaray", "Fenerbahçe", "Celtic",
//         "Rangers", "Club Brugge", "Shakhtar Donetsk", "Al Hilal", "Al Nassr", "LA Galaxy", "New York City FC",
//         "Flamengo", "River Plate", "Boca Juniors", "Sao Paulo", "Palmeiras", "Monterrey", "Tigres UANL"
//       ].map((club, index) => (
//         <div key={index} className="bg-white/10 hover:bg-white/20 rounded-lg p-4 shadow-md transition duration-300">
//           <span className="text-lg font-medium">{club}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </ScrollVelocity> */}

// {/* <ScrollVelocity />  */}





//       </div>
     
//      </>
//   );
// }

// export default App

//working withour stairs
// import React from 'react'
// import Navbar from './components/layout/Navbar'
// import Register from './pages/auth/Register'
// import Home from './pages/Home'
// import Landing from './pages/Landing'
// import Login from './pages/auth/Login'
// import Footer from './components/layout/Footer'
// import './index.css'
// import { Routes, Route } from 'react-router-dom'
// import PrimeMembership from './components/PrimeMembership'

// const App = () => {
//   return (
//     <>
//       <Routes>
//         {/* Landing page as default route without navbar/footer */}
//         <Route path="/" element={<Landing />} />
        
//         {/* Home page with navbar and footer */}
//         <Route path="/home" element={
//           <>
//             <Navbar />
//             <Home />
//             <PrimeMembership />
//             <Footer />
//           </>
//         } />
        
//         {/* Other pages with navbar and footer */}
//         <Route path="/login" element={
//           <>
//             <Navbar />
//             <Login />

//             <Footer />
//           </>
//         } />
        
//         <Route path="/register" element={
//           <>
//             <Navbar />
//             <Register />
//             <Footer />
//           </>
//         } />
//       </Routes>
//     </>
//   )
// }

// export default App


//expo with stairs 
// import React, { useState, useEffect } from 'react'
// import Navbar from './components/layout/Navbar'
// import Register from './pages/auth/Register'
// import Home from './pages/Home'
// import Landing from './pages/Landing'
// import Login from './pages/auth/Login'
// import Footer from './components/layout/Footer'
// import Stairs from './components/common/Stairs'
// import './index.css'
// import { Routes, Route } from 'react-router-dom'
// import PrimeMembership from './components/PrimeMembership'

// const App = () => {
//   const [showStairs, setShowStairs] = useState(true);

//   useEffect(() => {
//     // Check if this is the first visit
//     const hasVisited = sessionStorage.getItem('hasVisited');
    
//     if (!hasVisited) {
//       setShowStairs(true);
//       // Mark as visited
//       sessionStorage.setItem('hasVisited', 'true');
//     } else {
//       setShowStairs(false);
//     }
//   }, []);

//   const handleStairsComplete = () => {
//     setShowStairs(false);
//   };

//   const mainContent = (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/home" element={
//         <>
//           <Navbar />
//           <Home />
//           <PrimeMembership />
//           <Footer />
//         </>
//       } />
//       <Route path="/login" element={
//         <>
//           <Navbar />
//           <Login />
//           <Footer />
//         </>
//       } />
//       <Route path="/register" element={
//         <>
//           <Navbar />
//           <Register />
//           <Footer />
//         </>
//       } />
//     </Routes>
//   );

//   return (
//     <>
//       {showStairs ? (
//         <Stairs onAnimationComplete={handleStairsComplete}>
//           {mainContent}
//         </Stairs>
//       ) : (
//         mainContent
//       )}
//     </>
//   );
// };

// export default App;

//expo 2
import React, { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import Footer from './components/layout/Footer'
import Stairs from './components/common/Stairs'
import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import PrimeMembership from './components/PrimeMembership'

const App = () => {
  const [showStairs, setShowStairs] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Always show stairs except on landing page
    if (location.pathname !== '/') {
      setShowStairs(true);
    }
  }, [location.pathname]); // Trigger on route changes

  const handleStairsComplete = () => {
    setShowStairs(false);
  };

  const mainContent = (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={
        <>
          <Navbar />
          <Home />
          <PrimeMembership />
          <Footer />
        </>
      } />
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
    </Routes>
  );

  return (
    <>
      {showStairs && location.pathname !== '/' ? (
        <Stairs onAnimationComplete={handleStairsComplete}>
          {mainContent}
        </Stairs>
      ) : (
        mainContent
      )}
    </>
  );
};

export default App;