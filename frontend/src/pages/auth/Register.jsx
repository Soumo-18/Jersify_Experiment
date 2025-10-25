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
import { Mail, Lock, User, Phone, MapPin, Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const API_BASE_URL = "http://localhost:5000/api"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    addresses: [{
      street: "",
      city: "",
      state: "",
      pinCode: "",
      country: "India"
    }]
  })
  const [focusedField, setFocusedField] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddressChange = (field, value, index = 0) => {
    setFormData((prev) => ({
      ...prev,
      addresses: prev.addresses.map((addr, i) => 
        i === index ? { ...addr, [field]: value } : addr
      )
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.phoneNumber) {
      toast.error("Please fill in all required fields")
      return
    }

    const address = formData.addresses[0]
    if (!address.street || !address.city || !address.state || !address.pinCode) {
      toast.error("Please fill in all address fields")
      return
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Registration successful! Please login.")
        navigate("/login")
      } else {
        toast.error(data.message || "Registration failed")
      }
    } catch (error) {
      toast.error("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = () => {
    window.location.href = `${API_BASE_URL}/users/auth/google`
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Image Section - Football related */}
      <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center p-8">
        <div className="w-full h-full max-h-[600px] bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
            alt="Football jersey collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-neutral-400 text-base">Join the football community</p>
          </div>

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full mb-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base flex items-center justify-center gap-3 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-neutral-900 text-neutral-400">Or register with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Full Name *
              </label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${focusedField === "name" ? "text-orange-500" : "text-neutral-500"}`} />
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 ${focusedField === "name" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500"}`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email Address *
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${focusedField === "email" ? "text-orange-500" : "text-neutral-500"}`} />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email address"
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 ${focusedField === "email" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500"}`}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password *
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${focusedField === "password" ? "text-orange-500" : "text-neutral-500"}`} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Create a strong password"
                  className={`w-full pl-10 pr-10 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 ${focusedField === "password" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500"}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-1">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${focusedField === "phoneNumber" ? "text-orange-500" : "text-neutral-500"}`} />
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  onFocus={() => setFocusedField("phoneNumber")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your phone number"
                  className={`w-full pl-10 pr-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 ${focusedField === "phoneNumber" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500"}`}
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-white flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Address Information *
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="text"
                  required
                  value={formData.addresses[0].street}
                  onChange={(e) => handleAddressChange("street", e.target.value)}
                  placeholder="Street Address"
                  className="w-full px-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                />
                
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.addresses[0].city}
                    onChange={(e) => handleAddressChange("city", e.target.value)}
                    placeholder="City"
                    className="w-full px-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                  <input
                    type="text"
                    required
                    value={formData.addresses[0].state}
                    onChange={(e) => handleAddressChange("state", e.target.value)}
                    placeholder="State"
                    className="w-full px-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.addresses[0].pinCode}
                    onChange={(e) => handleAddressChange("pinCode", e.target.value)}
                    placeholder="PIN Code"
                    className="w-full px-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                  <input
                    type="text"
                    value={formData.addresses[0].country}
                    onChange={(e) => handleAddressChange("country", e.target.value)}
                    placeholder="Country"
                    className="w-full px-4 py-3 bg-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base mt-6"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-neutral-400 text-sm">
              Already have an account?{" "}
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
