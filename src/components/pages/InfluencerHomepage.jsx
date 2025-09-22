import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
  Twitter
} from 'lucide-react'

const InfluencerHomepage = () => {
  const { user } = useAuthStore()
  const [stats, setStats] = useState({
    totalFollowers: 0,
    engagementRate: 0,
    activeCampaigns: 0,
    totalEarnings: 0
  })

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        totalFollowers: 45200,
        engagementRate: 8.5,
        activeCampaigns: 3,
        totalEarnings: 12500
      })
    }, 1000)
  }, [])

  const recentOpportunities = [
    {
      id: 1,
      brand: 'Nike',
      title: 'Summer Fitness Campaign',
      budget: '$2,500',
      deadline: '2025-10-15',
      category: 'Fitness',
      requirements: 'Instagram post + Story'
    },
    {
      id: 2,
      brand: 'Starbucks',
      title: 'New Coffee Launch',
      budget: '$1,800',
      deadline: '2025-10-20',
      category: 'Food & Beverage',
      requirements: 'TikTok video'
    },
    {
      id: 3,
      brand: 'Samsung',
      title: 'Galaxy Phone Review',
      budget: '$3,200',
      deadline: '2025-10-25',
      category: 'Technology',
      requirements: 'YouTube review + Instagram'
    }
  ]

  const platformStats = [
    { platform: 'Instagram', followers: '25.4K', engagement: '9.2%', icon: Instagram, color: 'text-pink-600' },
    { platform: 'YouTube', followers: '12.1K', engagement: '7.8%', icon: Youtube, color: 'text-red-600' },
    { platform: 'Twitter', followers: '7.7K', engagement: '6.5%', icon: Twitter, color: 'text-blue-600' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Ready to create amazing content and grow your influence?
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/dashboard"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Dashboard
              </Link>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Browse Campaigns
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Followers</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.totalFollowers.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                <p className="text-2xl font-bold text-gray-900">{stats.engagementRate}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeCampaigns}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${stats.totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Platform Performance */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Platform Performance</h3>
              </div>
              <div className="p-6 space-y-4">
                {platformStats.map((platform, index) => {
                  const IconComponent = platform.icon
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-6 w-6 ${platform.color}`} />
                        <div>
                          <p className="font-medium text-gray-900">{platform.platform}</p>
                          <p className="text-sm text-gray-600">{platform.followers} followers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{platform.engagement}</p>
                        <p className="text-xs text-gray-500">engagement</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Recent Opportunities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">New Opportunities</h3>
                <Link
                  to="/campaigns"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                >
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentOpportunities.map((opportunity) => (
                    <div key={opportunity.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{opportunity.title}</h4>
                          <p className="text-sm text-gray-600">by {opportunity.brand}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{opportunity.budget}</p>
                          <p className="text-xs text-gray-500">budget</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {opportunity.category}
                        </span>
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(opportunity.deadline).toLocaleDateString()}
                          </span>
                          <button className="text-blue-600 hover:text-blue-800 font-medium">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 p-4 rounded-lg hover:bg-blue-100 transition-colors">
              <Target className="h-5 w-5" />
              <span>Find Campaigns</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-green-50 text-green-700 p-4 rounded-lg hover:bg-green-100 transition-colors">
              <Star className="h-5 w-5" />
              <span>Update Profile</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-purple-50 text-purple-700 p-4 rounded-lg hover:bg-purple-100 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>View Analytics</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-yellow-50 text-yellow-700 p-4 rounded-lg hover:bg-yellow-100 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>Messages</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfluencerHomepage