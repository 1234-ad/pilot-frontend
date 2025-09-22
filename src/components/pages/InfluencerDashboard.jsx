import { useState, useEffect } from 'react'
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
  Clock,
  CheckCircle,
  XCircle,
  Instagram,
  Youtube,
  Twitter,
  BarChart3
} from 'lucide-react'

const InfluencerDashboard = () => {
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    totalFollowers: 0,
    engagementRate: 0,
    activeCampaigns: 0,
    totalEarnings: 0,
    pendingProposals: 0,
    completedCampaigns: 0
  })

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        totalFollowers: 45200,
        engagementRate: 8.5,
        activeCampaigns: 3,
        totalEarnings: 12500,
        pendingProposals: 5,
        completedCampaigns: 12
      })
    }, 1000)
  }, [])

  const campaigns = [
    {
      id: 1,
      brand: 'Nike',
      title: 'Summer Fitness Campaign',
      status: 'active',
      budget: '$2,500',
      deadline: '2025-10-15',
      progress: 75,
      deliverables: ['Instagram Post', 'Story', 'Reel']
    },
    {
      id: 2,
      brand: 'Starbucks',
      title: 'New Coffee Launch',
      status: 'pending',
      budget: '$1,800',
      deadline: '2025-10-20',
      progress: 0,
      deliverables: ['TikTok Video']
    },
    {
      id: 3,
      brand: 'Samsung',
      title: 'Galaxy Phone Review',
      status: 'completed',
      budget: '$3,200',
      deadline: '2025-09-30',
      progress: 100,
      deliverables: ['YouTube Review', 'Instagram Post']
    }
  ]

  const platformStats = [
    { platform: 'Instagram', followers: '25.4K', engagement: '9.2%', growth: '+5.2%', icon: Instagram, color: 'text-pink-600' },
    { platform: 'YouTube', followers: '12.1K', engagement: '7.8%', growth: '+3.1%', icon: Youtube, color: 'text-red-600' },
    { platform: 'Twitter', followers: '7.7K', engagement: '6.5%', growth: '+2.8%', icon: Twitter, color: 'text-blue-600' }
  ]

  const recentEarnings = [
    { date: '2025-09-20', campaign: 'Nike Summer Campaign', amount: '$2,500', status: 'paid' },
    { date: '2025-09-15', campaign: 'Beauty Brand Collab', amount: '$1,200', status: 'paid' },
    { date: '2025-09-10', campaign: 'Tech Review', amount: '$800', status: 'pending' },
    { date: '2025-09-05', campaign: 'Fashion Week', amount: '$3,000', status: 'paid' }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'pending':
        return <Clock className="h-4 w-4 text-blue-600" />
      default:
        return <XCircle className="h-4 w-4 text-red-600" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-yellow-100 text-yellow-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-red-100 text-red-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}! Here's your performance overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
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
                <p className="text-sm font-medium text-gray-600">Engagement</p>
                <p className="text-2xl font-bold text-gray-900">{stats.engagementRate}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Target className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeCampaigns}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Earnings</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${stats.totalEarnings.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-orange-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingProposals}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completedCampaigns}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['overview', 'campaigns', 'analytics', 'earnings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
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
                          <p className="text-xs text-green-600">{platform.growth}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Recent Campaigns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Campaigns</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {campaigns.slice(0, 3).map((campaign) => (
                      <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                            <p className="text-sm text-gray-600">by {campaign.brand}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(campaign.status)}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                              {campaign.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                          <span className="font-bold text-green-600">{campaign.budget}</span>
                          <span>Due: {new Date(campaign.deadline).toLocaleDateString()}</span>
                        </div>
                        {campaign.status === 'active' && (
                          <div className="mt-2">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{campaign.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: `${campaign.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'campaigns' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">All Campaigns</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                        <p className="text-sm text-gray-600">by {campaign.brand}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {campaign.deliverables.map((deliverable, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          {getStatusIcon(campaign.status)}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                        </div>
                        <p className="font-bold text-green-600">{campaign.budget}</p>
                        <p className="text-xs text-gray-500">Due: {new Date(campaign.deadline).toLocaleDateString()}</p>
                      </div>
                    </div>
                    {campaign.status === 'active' && (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${campaign.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Growth</h3>
              <div className="space-y-4">
                {platformStats.map((platform, index) => {
                  const IconComponent = platform.icon
                  return (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`h-8 w-8 ${platform.color}`} />
                        <div>
                          <p className="font-medium text-gray-900">{platform.platform}</p>
                          <p className="text-sm text-gray-600">{platform.followers} followers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{platform.growth}</p>
                        <p className="text-xs text-gray-500">this month</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-red-500" />
                    <span className="font-medium">Average Likes</span>
                  </div>
                  <span className="font-bold text-gray-900">3.2K</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">Average Comments</span>
                  </div>
                  <span className="font-bold text-gray-900">185</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Engagement Rate</span>
                  </div>
                  <span className="font-bold text-gray-900">8.5%</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Earnings</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentEarnings.map((earning, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{earning.campaign}</p>
                      <p className="text-sm text-gray-600">{new Date(earning.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{earning.amount}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        earning.status === 'paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {earning.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfluencerDashboard