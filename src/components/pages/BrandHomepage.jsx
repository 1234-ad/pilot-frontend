import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign,
  Calendar,
  Star,
  ArrowRight,
  Plus,
  Eye,
  MessageCircle,
  BarChart3,
  Search
} from 'lucide-react'

const BrandHomepage = () => {
  const { user } = useAuthStore()
  const [stats, setStats] = useState({
    activeCampaigns: 0,
    totalInfluencers: 0,
    totalReach: 0,
    campaignBudget: 0
  })

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        activeCampaigns: 5,
        totalInfluencers: 23,
        totalReach: 1250000,
        campaignBudget: 45000
      })
    }, 1000)
  }, [])

  const activeCampaigns = [
    {
      id: 1,
      title: 'Summer Collection Launch',
      status: 'Active',
      influencers: 8,
      budget: '$15,000',
      reach: '450K',
      engagement: '8.2%',
      deadline: '2025-10-30'
    },
    {
      id: 2,
      title: 'Back to School Campaign',
      status: 'Active',
      influencers: 5,
      budget: '$8,500',
      reach: '280K',
      engagement: '9.1%',
      deadline: '2025-10-15'
    },
    {
      id: 3,
      title: 'Holiday Gift Guide',
      status: 'Planning',
      influencers: 0,
      budget: '$12,000',
      reach: '0',
      engagement: '0%',
      deadline: '2025-11-15'
    }
  ]

  const topInfluencers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'Fashion',
      followers: '125K',
      engagement: '9.2%',
      rating: 4.8,
      campaigns: 3
    },
    {
      id: 2,
      name: 'Mike Chen',
      category: 'Fitness',
      followers: '89K',
      engagement: '8.7%',
      rating: 4.9,
      campaigns: 2
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      category: 'Beauty',
      followers: '156K',
      engagement: '7.9%',
      rating: 4.7,
      campaigns: 4
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, {user?.name}! 🚀
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Manage your campaigns and connect with top influencers
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/dashboard"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Dashboard
              </Link>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Create Campaign
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
              <Target className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeCampaigns}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Influencers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalInfluencers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Reach</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(stats.totalReach / 1000000).toFixed(1)}M
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Campaign Budget</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${stats.campaignBudget.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Campaigns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
                <Link
                  to="/campaigns"
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
                >
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {activeCampaigns.map((campaign) => (
                    <div key={campaign.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              campaign.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {campaign.status}
                            </span>
                            <span className="text-sm text-gray-600">
                              {campaign.influencers} influencers
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-purple-600">{campaign.budget}</p>
                          <p className="text-xs text-gray-500">budget</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Reach</p>
                          <p className="font-semibold">{campaign.reach}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Engagement</p>
                          <p className="font-semibold">{campaign.engagement}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Deadline</p>
                          <p className="font-semibold">{new Date(campaign.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex space-x-2">
                        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                          View Details
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Influencers */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Top Influencers</h3>
                <Link
                  to="/influencers"
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center"
                >
                  Browse <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="p-6 space-y-4">
                {topInfluencers.map((influencer) => (
                  <div key={influencer.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                        {influencer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{influencer.name}</p>
                        <p className="text-sm text-gray-600">{influencer.category}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{influencer.followers} followers</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            {influencer.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{influencer.engagement}</p>
                      <p className="text-xs text-gray-500">{influencer.campaigns} campaigns</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center space-x-2 bg-purple-50 text-purple-700 p-4 rounded-lg hover:bg-purple-100 transition-colors">
              <Plus className="h-5 w-5" />
              <span>Create Campaign</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 p-4 rounded-lg hover:bg-blue-100 transition-colors">
              <Search className="h-5 w-5" />
              <span>Find Influencers</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-green-50 text-green-700 p-4 rounded-lg hover:bg-green-100 transition-colors">
              <BarChart3 className="h-5 w-5" />
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

export default BrandHomepage