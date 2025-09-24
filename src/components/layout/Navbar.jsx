import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { 
  Home, 
  BarChart3, 
  User, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Settings,
  MessageCircle,
  Search,
  Plus
} from 'lucide-react'

const Navbar = () => {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
    setShowUserMenu(false)
    setIsMenuOpen(false)
  }

  const handleNavigation = (path) => {
    navigate(path)
    setIsMenuOpen(false)
    setShowUserMenu(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    {
      name: 'Homepage',
      path: '/homepage',
      icon: Home,
      description: 'Dashboard overview'
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: BarChart3,
      description: 'Detailed analytics'
    }
  ]

  const userMenuItems = [
    {
      name: 'Profile',
      action: () => alert('Profile page will be available after backend integration'),
      icon: User
    },
    {
      name: 'Settings',
      action: () => alert('Settings page will be available after backend integration'),
      icon: Settings
    },
    {
      name: 'Notifications',
      action: () => alert('Notifications feature coming soon'),
      icon: Bell
    }
  ]

  const quickActions = user?.role === 'brand' ? [
    {
      name: 'Create Campaign',
      action: () => alert('Campaign creation wizard will be available after backend integration'),
      icon: Plus,
      color: 'text-purple-600 hover:text-purple-700'
    },
    {
      name: 'Find Influencers',
      action: () => alert('Influencer discovery page will be available after backend integration'),
      icon: Search,
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Messages',
      action: () => alert('Messaging center will be available after backend integration'),
      icon: MessageCircle,
      color: 'text-green-600 hover:text-green-700'
    }
  ] : [
    {
      name: 'Browse Opportunities',
      action: () => alert('Opportunities page will be available after backend integration'),
      icon: Search,
      color: 'text-saffron hover:text-orange-600'
    },
    {
      name: 'My Campaigns',
      action: () => alert('Campaigns page will be available after backend integration'),
      icon: BarChart3,
      color: 'text-green-india hover:text-green-700'
    },
    {
      name: 'Messages',
      action: () => alert('Messaging center will be available after backend integration'),
      icon: MessageCircle,
      color: 'text-blue-600 hover:text-blue-700'
    }
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/homepage')}
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-saffron to-green-india rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IP</span>
              </div>
              <span>InfluencerPilot</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              {quickActions.slice(0, 2).map((action, index) => {
                const IconComponent = action.icon
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className={`p-2 rounded-lg transition-colors ${action.color} hover:bg-gray-50`}
                    title={action.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </button>
                )
              })}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden lg:block text-left">
                  <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
                  <div className="text-xs text-gray-500 capitalize">{user?.role || 'User'}</div>
                </div>
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
                    <div className="text-xs text-gray-500">{user?.email || 'user@example.com'}</div>
                    <div className="text-xs text-blue-600 capitalize font-medium">{user?.role || 'User'}</div>
                  </div>
                  
                  {userMenuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <button
                        key={index}
                        onClick={item.action}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{item.name}</span>
                      </button>
                    )
                  })}
                  
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {/* Navigation Links */}
            <div className="space-y-2 mb-4">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <div className="text-left">
                      <div>{item.name}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-3">
                Quick Actions
              </div>
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon
                  return (
                    <button
                      key={index}
                      onClick={action.action}
                      className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{action.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* User Section */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center space-x-3 px-3 py-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{user?.name || 'User'}</div>
                  <div className="text-xs text-gray-500">{user?.email || 'user@example.com'}</div>
                  <div className="text-xs text-blue-600 capitalize font-medium">{user?.role || 'User'}</div>
                </div>
              </div>
              
              <div className="space-y-1">
                {userMenuItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <button
                      key={index}
                      onClick={item.action}
                      className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.name}</span>
                    </button>
                  )
                })}
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close menus */}
      {(showUserMenu || isMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowUserMenu(false)
            setIsMenuOpen(false)
          }}
        />
      )}
    </nav>
  )
}

export default Navbar