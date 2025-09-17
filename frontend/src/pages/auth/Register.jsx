// import React from 'react';

// const Register = () => {
//   return (
//     <div className="w-full px-4 md:px-8 py-6 flex justify-center items-center min-h-screen">
//       <div className="lg:w-1/4  bg-white shadow-soft-xl rounded-2xl">
//         <div className="p-6 text-center border-b">
//           <h5 className="text-lg font-semibold">Register with</h5>
//         </div>
//         <div className="flex justify-center flex-wrap gap-4 p-4 md:p-8">
//           {/* Facebook */}
//           <div className="flex justify-center w-1/3 sm:w-1/4">
//             <a className="w-full flex justify-center items-center px-4 py-3 border border-gray-200 rounded-lg hover:opacity-75 transition">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
//                 <circle cx="32" cy="32" r="30" fill="#3C5A9A" />
//                 <path fill="#fff" d="M39 21h-5c-1.7 0-3 1.3-3 3v4h8l-1 6h-7v14h-6V34h-5v-6h5v-4c0-4.4 3.6-8 8-8h5v6z" />
//               </svg>
//             </a>
//           </div>

//           {/* Apple */}
//           <div className="flex justify-center w-1/3 sm:w-1/4">
//             <a className="w-full flex justify-center items-center px-4 py-3 border border-gray-200 rounded-lg hover:opacity-75 transition">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
//                 <path d="M33 10c2-2.4 3-5.6 2.5-8.7-3.2.2-6.6 2.1-8.5 4.7-2 2.8-3.4 6.5-2.8 10.1 3.4.1 6.8-1.8 8.8-4.8zM40.9 33c.1 9.3 7.9 12.4 8 12.5-.1.3-1.2 4.5-4.4 9.1-3 4.1-5.6 7.8-10 7.9-3.8.1-5.1-2.7-10-2.7-4.9 0-6.1 2.8-10 2.7-4.1-.2-7.1-4.3-9.3-8-6-9.8-7.8-24.3-2.3-33 2.4-4 6.4-6.8 11.1-6.9 3.4-.1 6.6 2.3 9.1 2.3 2.4 0 6.4-2.5 11-2.2 1.1.1 8.7.7 11.7 9.1-.4.3-8.1 4.2-8 12.1z" fill="#000" />
//               </svg>
//             </a>
//           </div>

//           {/* Google */}
//           <div className="flex justify-center w-1/3 sm:w-1/4">
//             <a href='https://www.google.com/' className="w-full flex justify-center items-center px-4 py-3 border border-gray-200 rounded-lg hover:opacity-75 transition">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
//                 <path fill="#4285F4" d="M58 30H32v10h15c-2 6-7 10-15 10-9 0-17-8-17-17s8-17 17-17c4 0 7 1.5 10 4l7-7c-4-4-10-6-17-6-15 0-27 12-27 27s12 27 27 27 26-12 26-27c0-2-.2-4-.5-6z" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         <div className="text-center py-2">
//           <p className="text-sm text-slate-500">or</p>
//         </div>

//         <div className="p-6">
//           <form>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-4 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-fuchsia-500 text-sm"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-fuchsia-500 text-sm"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-fuchsia-500 text-sm"
//               />
//             </div>

//             <div className="flex items-center mb-4">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="w-4 h-4 text-fuchsia-600 border-gray-300 rounded focus:ring-fuchsia-500"
//               />
//               <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
//                 I agree to the <span className="font-semibold underline">Terms and Conditions</span>
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 text-white font-semibold bg-gradient-to-r from-gray-900 to-slate-800 rounded-md hover:bg-slate-700 transition"
//             >
//               Sign up
//             </button>

//             <p className="mt-4 text-sm text-center">
//               Already have an account?{' '}
//               <a href="../pages/sign-in.html" className="font-semibold text-slate-700 hover:underline">
//                 Sign in
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;




import { useState } from "react"
import { Mail, Lock, User } from "lucide-react"

import { Link } from "react-router-dom"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [focusedField, setFocusedField] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Image Section - Hidden on mobile, shown on md and up */}
      <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center p-8">
        <div className="w-full h-full max-h-[600px] bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
            alt="Professional workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-neutral-400 text-base">Join us today and get started</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Full Name
              </label>
              <div className="relative">
                <User
                  className={
                    "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
                    (focusedField === "name" ? "text-orange-500" : "text-neutral-500")
                  }
                />
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your full name"
                  className={
                    "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "name" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
              </div>
            </div>

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
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Create a strong password"
                  className={
                    "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "password" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 text-base mt-8"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <p className="text-neutral-400 text-base">
              Already have an account?{" "}
              {/* <Link
                href="/login"
                className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200"
              >
                Sign in here
              </Link> */}
              <Link to="/login" className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200">
  Sign in here
</Link>

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
