import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import InfluencerHomepage from './components/pages/InfluencerHomepage'
import BrandHomepage from './components/pages/BrandHomepage'
import InfluencerDashboard from './components/pages/InfluencerDashboard'
import BrandDashboard from './components/pages/BrandDashboard'

function App() {
  const { user, isAuthenticated } = useAuthStore()

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {isAuthenticated && <Navbar />}
        
        <main>
          <Routes>
            {/* Public routes */}
            <Route 
              path="/login" 
              element={!isAuthenticated ? <Login /> : <Navigate to="/homepage" />} 
            />
            <Route 
              path="/register" 
              element={!isAuthenticated ? <Register /> : <Navigate to="/homepage" />} 
            />
            
            {/* Protected routes */}
            <Route 
              path="/homepage" 
              element={
                isAuthenticated ? (
                  user?.role === 'influencer' ? <InfluencerHomepage /> : <BrandHomepage />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            
            <Route 
              path="/dashboard" 
              element={
                isAuthenticated ? (
                  user?.role === 'influencer' ? <InfluencerDashboard /> : <BrandDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            
            {/* Default redirect */}
            <Route 
              path="/" 
              element={<Navigate to={isAuthenticated ? "/homepage" : "/login"} />} 
            />
            
            {/* Catch all route */}
            <Route 
              path="*" 
              element={<Navigate to={isAuthenticated ? "/homepage" : "/login"} />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App