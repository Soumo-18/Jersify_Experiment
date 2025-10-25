// Authentication utility functions

export const getToken = () => {
  return localStorage.getItem('token')
}

export const getUser = () => {
  const userStr = localStorage.getItem('user')
  return userStr ? JSON.parse(userStr) : null
}

export const isAuthenticated = () => {
  const token = getToken()
  if (!token) return false
  
  try {
    // Check if token is expired
    const payload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now() / 1000
    return payload.exp > currentTime
  } catch (error) {
    return false
  }
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.href = '/login'
}

export const isProfileComplete = () => {
  const user = getUser()
  return user ? user.isProfileComplete : false
}

export const isAdmin = () => {
  const user = getUser()
  return user ? user.role === 'admin' : false
}