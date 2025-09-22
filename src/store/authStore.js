import { create } from 'zustand'

// Helper functions for localStorage
const getStoredAuth = () => {
  try {
    const stored = localStorage.getItem('auth-storage')
    return stored ? JSON.parse(stored) : { user: null, isAuthenticated: false }
  } catch {
    return { user: null, isAuthenticated: false }
  }
}

const setStoredAuth = (state) => {
  try {
    localStorage.setItem('auth-storage', JSON.stringify({
      user: state.user,
      isAuthenticated: state.isAuthenticated
    }))
  } catch {
    // Handle localStorage errors silently
  }
}

export const useAuthStore = create((set, get) => {
  // Initialize with stored state
  const initialState = getStoredAuth()
  
  return {
    user: initialState.user,
    isAuthenticated: initialState.isAuthenticated,
    
    login: (userData) => {
      const newState = { 
        user: userData, 
        isAuthenticated: true 
      }
      set(newState)
      setStoredAuth(newState)
    },
    
    logout: () => {
      const newState = { 
        user: null, 
        isAuthenticated: false 
      }
      set(newState)
      setStoredAuth(newState)
    },
    
    updateUser: (userData) => {
      const currentState = get()
      const newState = {
        ...currentState,
        user: { ...currentState.user, ...userData }
      }
      set(newState)
      setStoredAuth(newState)
    }
  }
})