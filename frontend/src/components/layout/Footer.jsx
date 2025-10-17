// import React from 'react'
// import { FaFacebook, FaInstagram } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <>
// <div className="footer w-full h-full sm:footer-horizontal  bg-base-200 text-base-content p-10">
//  <div className='flex justify-between'>
//   <ul className='flex flex-col'>
//     <h6 className="font-semibold">Services</h6>
//     <a className="hover:bg-white/20 ">Branding</a>
//     <a className="hover:bg-white/20 ">Design</a>
//     <a className="hover:bg-white/20 ">Marketing</a>
//     <a className="hover:bg-white/20 ">Advertisement</a>
//   </ul>
//   <ul className='flex flex-col'>
//     <h6 className="font-semibold">Company</h6>
//     <a className="hover:bg-white/20 ">About us</a>
//     <a className="hover:bg-white/20">Contact</a>
//     <a className="hover:bg-white/20 ">Jobs</a>
//     <a className="hover:bg-white/20 ">Press kit</a>
//   </ul>
//   <ul className='flex flex-col'>
//     <h6 className="font-semibold">Legal</h6>
//     <a className="hover:bg-white/20 ">Terms of use</a>
//     <a className="hover:bg-white/20 ">Privacy policy</a>
//     <a className="hover:bg-white/20 ">Cookie policy</a>
//   </ul>
//   <div>
//     <h6 className="font-semibold">Newsletter</h6>
//     <div className="">
//       <label>Enter your email address</label>
//       <div className="flex space-x-2">
//         <input
//           type="text"
//           placeholder="username@site.com"
//           className='rounded-xl  text-center border hover:border-lime-300 px-4 py-2' />
//         <button className=" text-xl border hover:bg-orange-500 py-2 px-3">Subscribe</button>
//       </div>
//     </div>
//   </div>
//   </div>
// </div>
//     </>
//   )
// }

// export default Footer


import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer w-full h-full sm:footer-horizontal bg-orange-100 text-orange-900 p-10">
      <div className="flex flex-wrap justify-between gap-6">
        <ul className="flex flex-col space-y-2">
          <h6 className="font-semibold text-orange-800">Services</h6>
          <Link to="/branding" className="hover:text-orange-600">Branding</Link>
          <Link to="/design" className="hover:text-orange-600">Design</Link>
          <Link to="/marketing" className="hover:text-orange-600">Marketing</Link>
          <Link to="/advertisement" className="hover:text-orange-600">Advertisement</Link>
        </ul>
        <ul className="flex flex-col space-y-2">
          <h6 className="font-semibold text-orange-800">Company</h6>
          <Link to="/about" className="hover:text-orange-600">About us</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
          <Link to="/jobs" className="hover:text-orange-600">Jobs</Link>
          <Link to="/press" className="hover:text-orange-600">Press kit</Link>
        </ul>
        <ul className="flex flex-col space-y-2">
          <h6 className="font-semibold text-orange-800">Legal</h6>
          <Link to="/terms" className="hover:text-orange-600">Terms of use</Link>
          <Link to="/privacy" className="hover:text-orange-600">Privacy policy</Link>
          <Link to="/cookies" className="hover:text-orange-600">Cookie policy</Link>
        </ul>
        <div className="flex flex-col space-y-2">
          <h6 className="font-semibold text-orange-800">Newsletter</h6>
          <label htmlFor="email">Enter your email address</label>
          <div className="flex space-x-2">
            <input
              id="email"
              type="email"
              placeholder="username@site.com"
              className="input input-bordered w-full max-w-xs text-orange-900"
            />
            <button className="btn bg-orange-500 text-white hover:bg-orange-600">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center space-x-4 text-2xl text-orange-700">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
          <FaInstagram />
        </a>
      </div>
    </div>
  )
}

export default Footer










