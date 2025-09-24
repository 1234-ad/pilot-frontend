import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  DollarSign,
  Calendar,
  Target,
  Star,
  ArrowRight,
  Instagram,
  Youtube,
  Twitter,
  MapPin,
  Zap,
  Gift,
  Bell,
  Settings,
  Eye
} from 'lucide-react'

const InfluencerHomepage = () => {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    totalFollowers: 0,
    engagementRate: 0,
    activeCampaigns: 0,
    totalEarnings: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call for stats
    const loadStats = async () => {
      setLoading(true)
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setStats({
          totalFollowers: 452000,
          engagementRate: 8.5,
          activeCampaigns: 5,
          totalEarnings: 125000
        })
      } catch (error) {
        console.error('Error loading stats:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadStats()
  }, [])

  const recentOpportunities = [
    {
      id: 1,
      brand: 'Flipkart',
      title: 'Big Billion Days Campaign',
      budget: '₹45,000',
      deadline: '2025-10-15',
      category: 'E-commerce',
      requirements: 'Instagram Reel + Story',
      location: 'Pan India',
      language: 'Hindi/English',
      status: 'open'
    },
    {
      id: 2,
      brand: 'Zomato',
      title: 'Food Festival Promotion',
      budget: '₹28,000',
      deadline: '2025-10-20',
      category: 'Food & Beverage',
      requirements: 'YouTube Short + Instagram',
      location: 'Mumbai, Delhi, Bangalore',
      language: 'Regional preferred',
      status: 'open'
    },
    {
      id: 3,
      brand: 'Paytm',
      title: 'Digital Payment Awareness',
      budget: '₹65,000',
      deadline: '2025-10-25',
      category: 'Fintech',
      requirements: 'Educational content series',
      location: 'Tier 2 cities focus',
      language: 'Hindi mandatory',
      status: 'open'
    },
    {
      id: 4,
      brand: 'Myntra',
      title: 'Festive Fashion Collection',
      budget: '₹35,000',
      deadline: '2025-11-05',
      category: 'Fashion',
      requirements: 'Try-on haul + styling tips',
      location: 'Major metros',
      language: 'English/Hindi',
      status: 'open'
    }
  ]

  const platformStats = [
    { platform: 'Instagram', followers: '254K', engagement: '9.2%', icon: Instagram, color: 'text-pink-600' },
    { platform: 'YouTube', followers: '121K', engagement: '7.8%', icon: Youtube, color: 'text-red-600' },
    { platform: 'Twitter', followers: '77K', engagement: '6.5%', icon: Twitter, color: 'text-blue-600' }
  ]

  const trendingCategories = [
    { name: 'Festival Season', growth: '+45%', icon: '🎉' },
    { name: 'Fintech', growth: '+38%', icon: '💳' },
    { name: 'Regional Content', growth: '+52%', icon: '🗣️' },
    { name: 'EdTech', growth: '+29%', icon: '📚' }
  ]

  // Handler functions for button clicks
  const handleApplyNow = (opportunityId) => {
    // This will be connected to backend API
    console.log(`Applying to opportunity ${opportunityId}`)
    alert(`Application submitted for opportunity ${opportunityId}! You'll receive a confirmation email shortly.`)
  }

  const handleViewDetails = (opportunityId) => {
    // Navigate to opportunity details page
    console.log(`Viewing details for opportunity ${opportunityId}`)
    // navigate(`/opportunities/${opportunityId}`)
    alert(`Opportunity details will open here. (Backend integration pending)`)
  }

  const handleQuickAction = (action) => {
    switch(action) {
      case 'dashboard':
        navigate('/dashboard')
        break
      case 'campaigns':
        alert('Campaigns page will be available after backend integration')
        break
      case 'earnings':
        alert('Earnings report will be available after backend integration')
        break
      case 'notifications':
        alert('Notifications feature coming soon')
        break
      case 'settings':
        alert('Settings page will be available after backend integration')
        break
      default:
        console.log(`Action: ${action}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-saffron via-orange-500 to-green-india text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">🇮🇳</span>
                <h1 className="text-2xl lg:text-3xl font-bold">
                  नमस्ते {user?.name || 'Creator'}! Welcome back
                </h1>
              </div>
              <p className="text-lg lg:text-xl opacity-90 mb-4">
                Ready to create amazing content for Indian brands?
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span>Active Creator</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Gift className="h-4 w-4" />
                  <span>Festival Season Ready</span>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-xl lg:text-2xl font-bold">
                  ₹{loading ? '...' : stats.totalEarnings.toLocaleString('en-IN')}
                </div>
                <div className="text-sm opacity-75">This Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-saffron">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Followers</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  {loading ? '...' : stats.totalFollowers.toLocaleString('en-IN')}
                </p>
              </div>
              <Users className="h-8 w-8 text-saffron" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-india">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  {loading ? '...' : `${stats.engagementRate}%`}
                </p>
              </div>
              <Heart className="h-8 w-8 text-green-india" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  {loading ? '...' : stats.activeCampaigns}
                </p>
              </div>
              <Target className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Earnings</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  ₹{loading ? '...' : stats.totalEarnings.toLocaleString('en-IN')}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Opportunities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    🔥 Hot Opportunities from Indian Brands
                  </h2>
                  <button 
                    onClick={() => handleQuickAction('opportunities')}
                    className="text-saffron hover:text-orange-600 text-sm font-medium flex items-center transition-colors"
                  >
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{opportunity.brand}</h3>
                            <span className="px-2 py-1 bg-saffron/10 text-saffron text-xs rounded-full">
                              {opportunity.category}
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              {opportunity.status}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2 font-medium">{opportunity.title}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(opportunity.deadline).toLocaleDateString('en-IN')}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {opportunity.location}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Language: {opportunity.language} • {opportunity.requirements}
                          </p>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:text-right">
                          <div className="text-lg font-bold text-green-600 mb-2">{opportunity.budget}</div>
                          <div className="flex lg:flex-col gap-2">
                            <button 
                              onClick={() => handleApplyNow(opportunity.id)}
                              className="flex-1 lg:flex-none px-4 py-2 bg-saffron text-white text-sm rounded-lg hover:bg-orange-600 transition-colors font-medium"
                            >
                              Apply Now
                            </button>
                            <button 
                              onClick={() => handleViewDetails(opportunity.id)}
                              className="flex-1 lg:flex-none px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Eye className="h-4 w-4 inline mr-1" />
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Platform Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
              <div className="space-y-4">
                {platformStats.map((platform) => {
                  const IconComponent = platform.icon
                  return (
                    <div key={platform.platform} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-5 w-5 ${platform.color}`} />
                        <span className="font-medium">{platform.platform}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{platform.followers}</div>
                        <div className="text-sm text-gray-600">{platform.engagement}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Trending Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                📈 Trending in India
              </h3>
              <div className="space-y-3">
                {trendingCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">{category.growth}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-saffron/10 to-green-india/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleQuickAction('dashboard')}
                  className="block w-full bg-saffron text-white text-center py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  View Dashboard
                </button>
                <button 
                  onClick={() => handleQuickAction('campaigns')}
                  className="block w-full bg-green-india text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  My Campaigns
                </button>
                <button 
                  onClick={() => handleQuickAction('earnings')}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Earnings Report
                </button>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleQuickAction('notifications')}
                    className="flex-1 bg-gray-100 text-gray-700 text-center py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Bell className="h-4 w-4 inline mr-1" />
                    Alerts
                  </button>
                  <button 
                    onClick={() => handleQuickAction('settings')}
                    className="flex-1 bg-gray-100 text-gray-700 text-center py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Settings className="h-4 w-4 inline mr-1" />
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfluencerHomepage