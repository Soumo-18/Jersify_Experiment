import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import toast from "react-hot-toast"

export default function OAuthCallback() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const token = searchParams.get('token')
    
    if (!token) {
      toast.error("Authentication failed. Please try again.")
      navigate("/login")
      return
    }

    try {
      // Decode JWT token to get user info
      const payload = JSON.parse(atob(token.split('.')[1]))
      
      // Store token and user data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(payload))
      
      // Check if profile is complete
      if (payload.isProfileComplete) {
        toast.success("Login successful!")
        navigate("/home")
      } else {
        toast.success("Please complete your profile to continue")
        navigate("/auth/complete-profile")
      }
    } catch (error) {
      toast.error("Invalid authentication token. Please try again.")
      navigate("/login")
    }
  }, [navigate, searchParams])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-white text-lg">Completing authentication...</p>
        <p className="text-neutral-400 text-sm mt-2">Please wait while we redirect you</p>
      </div>
    </div>
  )
}