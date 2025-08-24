import React from 'react'
import logo from '../../assets/logo.png'
import { Menu, X } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
const Navbar = () => {


  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen)
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <>
        {/* <div className='bg-zinc-800 text-white  '>
          <nav className=' w-full py-3 justify-between flex items-center'>
            <GiHamburgerMenu className='w-8 h-8 ml-4'  />
            <img className='m-auto ml-6 w-35 h-16 cursor-pointer ' src="./src/assets/Screenshot 2025-08-20 003255.png" alt="JERSIFY" />
            <input type="text" placeholder='Search' className='hover:border-amber-400 rounded-2xl text-2xl text-center m-auto  border border-gray-400 px-40 py-5' />
            <ul className='flex rounded bg-blue-400 space-x-6 ml-350  px-5 py-5  text-3xl  font-serif'>
              <li className='' >Home</li>
              <li  className='' >About</li>
              <li  className='' >Contact</li>             
            </ul>
            <button className='m-auto px-5 py-3 rounded hover:text-green-400 font-semibold text-4xl border text-center'>SignUp</button>
            <FaShoppingCart className='w-12 h-12 mr-8' />

          </nav>
        </div> */}

        {/* <div className='bg-inherit text-white sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 '>
          <nav className=' w-full py-3 justify-between flex  items-center'>
            <GiHamburgerMenu className='w-8 h-8 ml-4'  />
            <img className=' m-auto w- h-10 cursor-pointer ' src={logo} alt="JERSIFY" />
            <input type="text" placeholder='Search' className='rounded-2xl text-center m-auto  border border-gray-400 px-40 py-5' />
            <ul className='flex mx-auto space-x-6 justify-center px-10 py-4 gap-4 text-xl font-serif bg-emerald-300'>
              <li className='' >Home</li>
              <li  className='' >About</li>
              <li  className='' >Contact</li>             
            </ul>
            <button className='m-auto'>SignUp</button>
            <FaShoppingCart className='w-8 h-8 mr-4' />

          </nav>
        </div> */}




        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80' >
            <div className="container px-4 mx-auto relative lg:text-sm" >
               <div className="flex justify-between items-center">
                <div className="flex space-x-12 items-center flex-shrink-0">
                  <GiHamburgerMenu className='' />
                  <img className='h-10 w-20' src={logo} alt="logo" />
                  <input type="text" placeholder='Search' className='rounded-xl  text-center border hover:border-lime-300 px-6 py-2' />
                </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                          <li key={index}>
                            <a href={item.href}>{item.label}</a>
                          </li>
                        ))}
                     </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                   <a href="#" className="py-2 px-3 hover:border-fuchsia-400 border rounded-md">
                    Sign In
                  </a>
                  <a
                    href="#"
                    className="hover:scale-105 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                  >
                    Create an account
                  </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                          {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
               </div>
              {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
            </div>
        </nav>



      


    </>
  )
}


export default Navbar


