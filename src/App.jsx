import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import Navbar from './components/layout/Navbar'
import InfluencerHomepage from './components/pages/InfluencerHomepage'
import BrandHomepage from './components/pages/BrandHomepage'
import InfluencerDashboard from './components/pages/InfluencerDashboard'
import BrandDashboard from './components/pages/BrandDashboard'

// Placeholder components for auth routes (will be replaced by teammate's components)
const AuthPlaceholder = ({ type }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {type === 'login' ? 'Login' : 'Register'}
      </h2>
      <p className="text-gray-600 mb-6">
        This {type} component will be integrated from the auth module.
      </p>
      <div className="space-y-4">
        <button 
          onClick={() => {
            // Demo login for testing
            const demoUser = {
              id: 1,
              name: 'Demo User',
              email: 'demo@example.com',
              role: type === 'login' ? 'influencer' : 'brand'
            }
            useAuthStore.getState().login(demoUser)
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Demo {type === 'login' ? 'Influencer' : 'Brand'} Login
        </button>
        <button 
          onClick={() => {
            const demoUser = {
              id: 2,
              name: 'Demo Brand',
              email: 'brand@example.com',
              role: type === 'login' ? 'brand' : 'influencer'
            }
            useAuthStore.getState().login(demoUser)
          }}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Demo {type === 'login' ? 'Brand' : 'Influencer'} Login
        </button>
      </div>
    </div>
  </div>
)

function App() {
  const { user, isAuthenticated } = useAuthStore()

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {isAuthenticated && <Navbar />}
        
        <main>
          <Routes>
            {/* Auth routes - placeholders for integration */}
            <Route 
              path="/login" 
              element={!isAuthenticated ? <AuthPlaceholder type="login" /> : <Navigate to="/homepage" />} 
            />
            <Route 
              path="/register" 
              element={!isAuthenticated ? <AuthPlaceholder type="register" /> : <Navigate to="/homepage" />} 
            />
            
            {/* Protected routes - your components */}
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
            
            {/* Default redirects */}
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