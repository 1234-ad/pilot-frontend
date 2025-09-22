import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { 
  Target, 
  Home, 
  User, 
  LogOut, 
  Menu, 
  X,
  Building,
  Users
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Pilot</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/dashboard"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/homepage"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                {user?.role === 'brand' ? (
                  <Building className="h-4 w-4 text-blue-600" />
                ) : (
                  <Users className="h-4 w-4 text-blue-600" />
                )}
                <span className="font-medium">{user?.name}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">
                  {user?.role}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/homepage"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <div className="border-t pt-4 mt-4">
              <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700">
                {user?.role === 'brand' ? (
                  <Building className="h-4 w-4 text-blue-600" />
                ) : (
                  <Users className="h-4 w-4 text-blue-600" />
                )}
                <span className="font-medium">{user?.name}</span>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">
                  {user?.role}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar