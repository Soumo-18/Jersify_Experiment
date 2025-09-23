

import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 text-base-content p-6 sm:p-10">
      <section className="text-center sm:text-left text-lg sm:text-xl font-bold mb-6">
        Copyright 2024-{year} | All Rights Reserved
      </section>

      <div className="flex flex-col md:flex-row md:justify-between flex-wrap gap-6">
         <ul className="flex flex-col gap-2 min-w-[150px]">
          <h6 className="font-semibold mb-2">Services</h6>
          <Link to="/branding" className="hover:bg-white/20 rounded px-2 py-1">Branding</Link>
          <Link to="/design" className="hover:bg-white/20 rounded px-2 py-1">Design</Link>
          <Link to="/marketing" className="hover:bg-white/20 rounded px-2 py-1">Marketing</Link>
          <Link to="/advertisement" className="hover:bg-white/20 rounded px-2 py-1">Advertisement</Link>
        </ul>

        
        <ul className="flex flex-col gap-2 min-w-[150px]">
          <h6 className="font-semibold mb-2">Company</h6>
          <Link to="/about" className="hover:bg-white/20 rounded px-2 py-1">About us</Link>
          <Link to="/contact" className="hover:bg-white/20 rounded px-2 py-1">Contact</Link>
          <Link to="/jobs" className="hover:bg-white/20 rounded px-2 py-1">Jobs</Link>
          <Link to="/press-kit" className="hover:bg-white/20 rounded px-2 py-1">Press kit</Link>
        </ul>

        
        <ul className="flex flex-col gap-2 min-w-[150px]">
          <h6 className="font-semibold mb-2">Legal</h6>
          <Link to="/terms" className="hover:bg-white/20 rounded px-2 py-1">Terms of use</Link>
          <Link to="/privacy" className="hover:bg-white/20 rounded px-2 py-1">Privacy policy</Link>
          <Link to="/cookies" className="hover:bg-white/20 rounded px-2 py-1">Cookie policy</Link>
        </ul>

        
        <div className="min-w-[250px]">
          <h6 className="font-semibold mb-2">Newsletter</h6>
          <label className="block mb-2">Enter your email address</label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="text"
              placeholder="username@site.com"
              className="rounded-xl text-center border hover:border-lime-300 px-4 py-2 w-full sm:w-auto"
            />
            <button className="text-lg border hover:bg-orange-500  py-[6px] px-4 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



