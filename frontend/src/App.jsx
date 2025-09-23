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
import React from 'react'
import Navbar from './components/layout/Navbar'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Footer from './components/layout/Footer'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';
 import FeatureSection from './components/FeatureSection'
import PrimeMembership from './components/PrimeMembership'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      <Projects />
      <FeatureSection />
      <PrimeMembership />
      <Footer />
    </>
  )
}

export default App