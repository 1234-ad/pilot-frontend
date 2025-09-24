import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  Search,
  Edit,
  Settings,
  Bell,
  Play,
  Pause
} from 'lucide-react'

const BrandHomepage = () => {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    activeCampaigns: 0,
    totalInfluencers: 0,
    totalReach: 0,
    campaignBudget: 0
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
          activeCampaigns: 5,
          totalInfluencers: 23,
          totalReach: 1250000,
          campaignBudget: 450000 // Changed to INR
        })
      } catch (error) {
        console.error('Error loading stats:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadStats()
  }, [])

  const activeCampaigns = [
    {
      id: 1,
      title: 'Diwali Festival Collection',
      status: 'Active',
      influencers: 8,
      budget: '₹1,50,000',
      reach: '4.5L',
      engagement: '8.2%',
      deadline: '2025-10-30',
      category: 'Fashion'
    },
    {
      id: 2,
      title: 'Winter Wear Launch',
      status: 'Active',
      influencers: 5,
      budget: '₹85,000',
      reach: '2.8L',
      engagement: '9.1%',
      deadline: '2025-10-15',
      category: 'Apparel'
    },
    {
      id: 3,
      title: 'New Year Sale Campaign',
      status: 'Planning',
      influencers: 0,
      budget: '₹1,20,000',
      reach: '0',
      engagement: '0%',
      deadline: '2025-11-15',
      category: 'E-commerce'
    }
  ]

  const topInfluencers = [
    {
      id: 1,
      name: 'Priya Sharma',
      category: 'Fashion & Lifestyle',
      followers: '1.25L',
      engagement: '9.2%',
      rating: 4.8,
      campaigns: 3,
      location: 'Mumbai',
      language: 'Hindi, English'
    },
    {
      id: 2,
      name: 'Arjun Kapoor',
      category: 'Fitness & Health',
      followers: '89K',
      engagement: '8.7%',
      rating: 4.9,
      campaigns: 2,
      location: 'Delhi',
      language: 'Hindi, Punjabi'
    },
    {
      id: 3,
      name: 'Sneha Reddy',
      category: 'Beauty & Skincare',
      followers: '1.56L',
      engagement: '7.9%',
      rating: 4.7,
      campaigns: 4,
      location: 'Bangalore',
      language: 'English, Telugu'
    }
  ]

  // Handler functions for button clicks
  const handleCampaignAction = (action, campaignId) => {
    switch(action) {
      case 'view':
        console.log(`Viewing campaign ${campaignId}`)
        alert(`Campaign details will open here. (Backend integration pending)`)
        break
      case 'edit':
        console.log(`Editing campaign ${campaignId}`)
        alert(`Campaign editor will open here. (Backend integration pending)`)
        break
      case 'pause':
        console.log(`Pausing campaign ${campaignId}`)
        alert(`Campaign paused successfully!`)
        break
      case 'resume':
        console.log(`Resuming campaign ${campaignId}`)
        alert(`Campaign resumed successfully!`)
        break
      default:
        console.log(`Action: ${action} for campaign ${campaignId}`)
    }
  }

  const handleInfluencerAction = (action, influencerId) => {
    switch(action) {
      case 'view':
        console.log(`Viewing influencer ${influencerId}`)
        alert(`Influencer profile will open here. (Backend integration pending)`)
        break
      case 'message':
        console.log(`Messaging influencer ${influencerId}`)
        alert(`Messaging feature will be available after backend integration`)
        break
      case 'hire':
        console.log(`Hiring influencer ${influencerId}`)
        alert(`Hiring process will start here. (Backend integration pending)`)
        break
      default:
        console.log(`Action: ${action} for influencer ${influencerId}`)
    }
  }

  const handleQuickAction = (action) => {
    switch(action) {
      case 'dashboard':
        navigate('/dashboard')
        break
      case 'create-campaign':
        alert('Campaign creation wizard will be available after backend integration')
        break
      case 'find-influencers':
        alert('Influencer discovery page will be available after backend integration')
        break
      case 'analytics':
        alert('Analytics dashboard will be available after backend integration')
        break
      case 'messages':
        alert('Messaging center will be available after backend integration')
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
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Welcome back, {user?.name || 'Brand Partner'}! 🚀
            </h1>
            <p className="text-lg lg:text-xl text-purple-100 mb-8">
              Manage your campaigns and connect with top Indian influencers
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleQuickAction('dashboard')}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Dashboard
              </button>
              <button 
                onClick={() => handleQuickAction('create-campaign')}
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create Campaign
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  {loading ? '...' : stats.activeCampaigns}
                </p>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Influencers</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  {loading ? '...' : stats.totalInfluencers}
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Reach</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  {loading ? '...' : `${(stats.totalReach / 100000).toFixed(1)}L`}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Campaign Budget</p>
                <p className="text-xl lg:text-2xl font-bold text-gray-900">
                  ₹{loading ? '...' : (stats.campaignBudget / 1000).toFixed(0)}K
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Campaigns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
                <button
                  onClick={() => handleQuickAction('campaigns')}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center transition-colors"
                >
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {activeCampaigns.map((campaign) => (
                    <div key={campaign.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex flex-col lg:flex-row justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              campaign.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {campaign.status}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {campaign.category}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            {campaign.influencers} influencers • Deadline: {new Date(campaign.deadline).toLocaleDateString('en-IN')}
                          </div>
                        </div>
                        <div className="mt-2 lg:mt-0 lg:text-right">
                          <p className="font-bold text-purple-600 text-lg">{campaign.budget}</p>
                          <p className="text-xs text-gray-500">budget</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-gray-600">Reach</p>
                          <p className="font-semibold">{campaign.reach}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Engagement</p>
                          <p className="font-semibold">{campaign.engagement}</p>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <p className="text-gray-600">Status</p>
                          <p className="font-semibold">{campaign.status}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <button 
                          onClick={() => handleCampaignAction('view', campaign.id)}
                          className="flex items-center px-3 py-1 text-purple-600 hover:text-purple-800 text-sm font-medium border border-purple-200 rounded hover:bg-purple-50 transition-colors"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </button>
                        <button 
                          onClick={() => handleCampaignAction('edit', campaign.id)}
                          className="flex items-center px-3 py-1 text-gray-600 hover:text-gray-800 text-sm font-medium border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        {campaign.status === 'Active' ? (
                          <button 
                            onClick={() => handleCampaignAction('pause', campaign.id)}
                            className="flex items-center px-3 py-1 text-orange-600 hover:text-orange-800 text-sm font-medium border border-orange-200 rounded hover:bg-orange-50 transition-colors"
                          >
                            <Pause className="h-4 w-4 mr-1" />
                            Pause
                          </button>
                        ) : (
                          <button 
                            onClick={() => handleCampaignAction('resume', campaign.id)}
                            className="flex items-center px-3 py-1 text-green-600 hover:text-green-800 text-sm font-medium border border-green-200 rounded hover:bg-green-50 transition-colors"
                          >
                            <Play className="h-4 w-4 mr-1" />
                            Resume
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Influencers */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Top Influencers</h3>
                <button
                  onClick={() => handleQuickAction('find-influencers')}
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center transition-colors"
                >
                  Browse <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                {topInfluencers.map((influencer) => (
                  <div key={influencer.id} className="border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-all">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {influencer.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-gray-900 truncate">{influencer.name}</p>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            <span className="text-xs font-medium">{influencer.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{influencer.category}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                          <span>{influencer.followers} followers</span>
                          <span className="font-semibold text-green-600">{influencer.engagement}</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-2">
                          📍 {influencer.location} • 🗣️ {influencer.language}
                        </div>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => handleInfluencerAction('view', influencer.id)}
                            className="flex-1 px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded hover:bg-purple-100 transition-colors"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => handleInfluencerAction('message', influencer.id)}
                            className="flex-1 px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                          >
                            Message
                          </button>
                          <button 
                            onClick={() => handleInfluencerAction('hire', influencer.id)}
                            className="flex-1 px-2 py-1 text-xs bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
                          >
                            Hire
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

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button 
              onClick={() => handleQuickAction('create-campaign')}
              className="flex items-center justify-center space-x-2 bg-purple-50 text-purple-700 p-4 rounded-lg hover:bg-purple-100 transition-colors font-medium"
            >
              <Plus className="h-5 w-5" />
              <span>Create Campaign</span>
            </button>
            <button 
              onClick={() => handleQuickAction('find-influencers')}
              className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 p-4 rounded-lg hover:bg-blue-100 transition-colors font-medium"
            >
              <Search className="h-5 w-5" />
              <span>Find Influencers</span>
            </button>
            <button 
              onClick={() => handleQuickAction('analytics')}
              className="flex items-center justify-center space-x-2 bg-green-50 text-green-700 p-4 rounded-lg hover:bg-green-100 transition-colors font-medium"
            >
              <BarChart3 className="h-5 w-5" />
              <span>View Analytics</span>
            </button>
            <button 
              onClick={() => handleQuickAction('messages')}
              className="flex items-center justify-center space-x-2 bg-yellow-50 text-yellow-700 p-4 rounded-lg hover:bg-yellow-100 transition-colors font-medium"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Messages</span>
            </button>
          </div>
          
          {/* Additional Actions */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={() => handleQuickAction('notifications')}
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Bell className="h-4 w-4 mr-1" />
              Notifications
            </button>
            <button 
              onClick={() => handleQuickAction('settings')}
              className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-800 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandHomepage