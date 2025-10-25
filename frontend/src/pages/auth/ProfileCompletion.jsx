import { useState, useEffect } from "react"
import { Phone, MapPin, User } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"
import toast from "react-hot-toast"

const API_BASE_URL = "http://localhost:5000/api"

export default function ProfileCompletion() {
  const [formData, setFormData] = useState({
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
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    // Get token from URL params (from OAuth callback) or localStorage
    const token = searchParams.get('token') || localStorage.getItem('token')
    
    if (!token) {
      toast.error("Please login first")
      navigate("/login")
      return
    }

    // If token is from URL, store it
    if (searchParams.get('token')) {
      localStorage.setItem('token', token)
    }

    // Decode token to get user info (basic JWT decode)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      setUser(payload)
      
      // If profile is already complete, redirect to home
      if (payload.isProfileComplete) {
        navigate("/home")
      }
    } catch (error) {
      toast.error("Invalid session. Please login again.")
      navigate("/login")
    }
  }, [navigate, searchParams])

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
    if (!formData.phoneNumber) {
      toast.error("Phone number is required")
      return
    }

    const address = formData.addresses[0]
    if (!address.street || !address.city || !address.state || !address.pinCode) {
      toast.error("Please fill in all address fields")
      return
    }

    setIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${API_BASE_URL}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // Update stored user data and token
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data))
        
        toast.success("Profile completed successfully!")
        setTimeout(() => {
          window.location.href = "/home"
        }, 1000)
      } else {
        toast.error(data.message || "Failed to update profile")
      }
    } catch (error) {
      toast.error("Network error. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      {/* Image Section - Football related */}
      <div className="hidden md:flex md:flex-1 bg-neutral-900 items-center justify-center p-8">
        <div className="w-full h-full max-h-[600px] bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Football team celebration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Complete Your Profile</h1>
            <p className="text-neutral-400 text-base">
              Welcome {user.name}! Please complete your profile to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Number Field */}
            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
                Phone Number *
              </label>
              <div className="relative">
                <Phone
                  className={
                    "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 " +
                    (focusedField === "phoneNumber" ? "text-orange-500" : "text-neutral-500")
                  }
                />
                <input
                  id="phoneNumber"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                  onFocus={() => setFocusedField("phoneNumber")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your phone number"
                  className={
                    "w-full pl-11 pr-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 " +
                    (focusedField === "phoneNumber" ? "border-orange-500" : "border-neutral-600 hover:border-neutral-500")
                  }
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Address Information *
              </h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  required
                  value={formData.addresses[0].street}
                  onChange={(e) => handleAddressChange("street", e.target.value)}
                  placeholder="Street Address"
                  className="w-full px-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.addresses[0].city}
                    onChange={(e) => handleAddressChange("city", e.target.value)}
                    placeholder="City"
                    className="w-full px-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                  <input
                    type="text"
                    required
                    value={formData.addresses[0].state}
                    onChange={(e) => handleAddressChange("state", e.target.value)}
                    placeholder="State"
                    className="w-full px-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={formData.addresses[0].pinCode}
                    onChange={(e) => handleAddressChange("pinCode", e.target.value)}
                    placeholder="PIN Code"
                    className="w-full px-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                  <input
                    type="text"
                    value={formData.addresses[0].country}
                    onChange={(e) => handleAddressChange("country", e.target.value)}
                    placeholder="Country"
                    className="w-full px-4 py-3.5 bg-neutral-800 rounded-xl text-white text-base placeholder-neutral-500 outline-none transition-colors duration-200 border-2 border-neutral-600 hover:border-neutral-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 text-base mt-8"
            >
              {isLoading ? "Completing Profile..." : "Complete Profile"}
            </button>
          </form>

          {/* Info */}
          <div className="text-center mt-6">
            <p className="text-neutral-400 text-sm">
              This information helps us provide better service and delivery options.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}