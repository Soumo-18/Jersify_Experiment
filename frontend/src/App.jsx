import React from 'react'
import Navbar from './components/layout/Navbar'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import ScrollVelocity from './pages/auth/Login'
import Footer from './components/layout/Footer'
import Products from './pages/Products'

const App = () => {
  return (
    <>
    
   
< Navbar />
<div className="max-w-7xl mx-auto pt-20 px-6">
  < Home />
</div>
<Products/>
 {/* < Register />
 < Footer />
 <ScrollVelocity
  texts={["Bayern Munich", "Borussia Dortmund", "RB Leipzig","Real Madrid", "Barcelona", "Atlético Madrid","Arsenal", "Manchester City", "Liverpool"]} 
  velocity={100} 
  className="custom-scroll-text text-2xl w-full text-shadow-[4px_2px_8px_white] text-white bg-gray-900 "
/> */}

    </>
  )
}

export default App