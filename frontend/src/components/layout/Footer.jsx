

// import React from 'react'
// import { FaFacebook, FaInstagram } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// const year = new Date().getFullYear()

// const Footer = () => {
//   return (
//     <footer className="w-full bg-base-200 text-base-content p-6 sm:p-10">
//       <section className="text-center sm:text-left text-lg sm:text-xl font-bold mb-6">
//         Copyright 2024-{year} | All Rights Reserved
//       </section>

//       <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-6">
//          <ul className="flex flex-col items-center gap-2 min-w-[150px]">
//           <h6 className="font-semibold mb-2">Services</h6>
//           <Link to="/branding" className="hover:bg-white/20 rounded px-2 py-1">Branding</Link>
//           <Link to="/design" className="hover:bg-white/20 rounded px-2 py-1">Design</Link>
//           <Link to="/marketing" className="hover:bg-white/20 rounded px-2 py-1">Marketing</Link>
//           <Link to="/advertisement" className="hover:bg-white/20 rounded px-2 py-1">Advertisement</Link>
//         </ul>

        
//         <ul className="flex flex-col items-center gap-2 min-w-[150px]">
//           <h6 className="font-semibold mb-2">Company</h6>
//           <Link to="/about" className="hover:bg-white/20 rounded px-2 py-1">About us</Link>
//           <Link to="/contact" className="hover:bg-white/20 rounded px-2 py-1">Contact</Link>
//           <Link to="/jobs" className="hover:bg-white/20 rounded px-2 py-1">Jobs</Link>
//           <Link to="/press-kit" className="hover:bg-white/20 rounded px-2 py-1">Press kit</Link>
//         </ul>

        
//         <ul className="flex flex-col items-center gap-2 min-w-[150px]">
//           <h6 className="font-semibold mb-2">Legal</h6>
//           <Link to="/terms" className="hover:bg-white/20 rounded px-2 py-1">Terms of use</Link>
//           <Link to="/privacy" className="hover:bg-white/20 rounded px-2 py-1">Privacy policy</Link>
//           <Link to="/cookies" className="hover:bg-white/20 rounded px-2 py-1">Cookie policy</Link>
//         </ul>

        
//         {/* <div className="min-w-[250px]">
//           <h4 className="font-semibold text-xl mb-2">Newsletter</h4>
//           <label className="block mb-2">Enter your email address</label>
//           <div className="flex flex-col sm:flex-row sm:items-center gap-2">
//             <input
//               type="text"
//               placeholder="username@site.com"
//               className="rounded-xl text-center border hover:border-lime-300 px-6 py-3 w-full sm:w-auto mt-2"
//             />
//             <button className="text-lg border hover:bg-orange-500   py-[6px] px-6 rounded-xl">
//               Subscribe
//             </button>
//           </div>
//         </div> */}
//         <div className="min-w-[250px]">
//   <h4 className="font-semibold text-xl mb-2">Newsletter</h4>
//   <label htmlFor="newsletter-email" className="block mb-2">Enter your email address</label>
//   <div className="flex flex-col sm:flex-row sm:items-center gap-2">
//     <input
//       id="newsletter-email"
//       type="email"
//       placeholder="username@site.com"
//       className="rounded-xl text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 px-6 py-3 w-full sm:w-auto"
//     />
//     <button className="text-lg  hover:bg-orange-500 transition-colors py-[6px] px-6 rounded-xl">
//       Subscribe
//     </button>
//   </div>
// </div>


//       </div>
//     </footer>
//   )
// }

// export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 pt-2 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: stats / social (optional) */}
        {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div className="text-center sm:text-left">
            <div className="text-sm text-gray-300">200+ Designs</div>
            <div className="text-sm text-gray-300">60000+ Customers</div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 border-gray-800 pt-7">
          {/* Services / Quick Links */}
          <nav aria-label="Quick links" className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Company / Policies */}
          <nav aria-label="Policies" className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Policies</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms and Conditions</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Return Policy</Link></li>
              <li><Link to="/cancellation" className="text-gray-300 hover:text-white">Cancellation Policy</Link></li>
            </ul>
          </nav>

          {/* Legal / Exchange */}
          <nav aria-label="Exchange" className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Exchange</h3>
            <ul className="space-y-2">
              <li><Link to="/exchange" className="text-gray-300 hover:text-white">Create an exchange</Link></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3 className="font-semibold mb-3 text-lg">Stay in the loop</h3>
            <p className="text-sm text-gray-300 mb-3">Subscribe to our weekly newsletter</p>
            <form className="w-full flex flex-col sm:flex-row items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 rounded-md bg-gray-800 border border-gray-700 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
           <section className=" sm:text-center text-sm sm:text-xl font-bold mb-6">
                  JERSIFY | Rights Reserved © 2024-{year}  
           </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer









