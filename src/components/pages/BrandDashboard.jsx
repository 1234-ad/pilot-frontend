import { useState, useEffect } from 'react'
import { useAuthStore } from '../../store/authStore'
import { 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign,
  Calendar,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Eye,
  MessageCircle,
  BarChart3,
  Search
} from 'lucide-react'

const BrandDashboard = () => {
  const { user } = useAuthStore()
  const [activeTab, setActiveTab] = useState('overview')
  const [stats, setStats] = useState({
    activeCampaigns: 0,
    totalInfluencers: 0,
    totalReach: 0,
    campaignBudget: 0,
    pendingProposals: 0,
    completedCampaigns: 0
  })

  useEffect(() => {
    // Simulate loading stats
    setTimeout(() => {
      setStats({
        activeCampaigns: 5,
        totalInfluencers: 23,
        totalReach: 1250000,
        campaignBudget: 45000,
        pendingProposals: 12,
        completedCampaigns: 8
      })
    }, 1000)
  }, [])

  const campaigns = [
    {
      id: 1,
      title: 'Summer Collection Launch',
      status: 'active',
      influencers: 8,
      budget: '$15,000',
      spent: '$12,000',
      reach: '450K',
      engagement: '8.2%',
      deadline: '2025-10-30',
      proposals: 15,
      approved: 8
    },
    {
      id: 2,
      title: 'Back to School Campaign',
      status: 'active',
      influencers: 5,
      budget: '$8,500',
      spent: '$6,200',
      reach: '280K',
      engagement: '9.1%',
      deadline: '2025-10-15',
      proposals: 8,
      approved: 5
    },
    {
      id: 3,
      title: 'Holiday Gift Guide',
      status: 'planning',
      influencers: 0,
      budget: '$12,000',
      spent: '$0',
      reach: '0',
      engagement: '0%',
      deadline: '2025-11-15',
      proposals: 0,
      approved: 0
    },
    {
      id: 4,
      title: 'Spring Fashion Week',
      status: 'completed',
      influencers: 12,
      budget: '$20,000',
      spent: '$18,500',
      reach: '850K',
      engagement: '7.8%',
      deadline: '2025-09-15',
      proposals: 25,
      approved: 12
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
      campaigns: 3,
      totalReach: '375K',
      avgCost: '$2,500'
    },
    {
      id: 2,
      name: 'Mike Chen',
      category: 'Fitness',
      followers: '89K',
      engagement: '8.7%',
      rating: 4.9,
      campaigns: 2,
      totalReach: '178K',
      avgCost: '$1,800'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      category: 'Beauty',
      followers: '156K',
      engagement: '7.9%',
      rating: 4.7,
      campaigns: 4,
      totalReach: '624K',
      avgCost: '$3,200'
    }
  ]

  const recentProposals = [
    { id: 1, influencer: 'Alex Thompson', campaign: 'Summer Collection', status: 'pending', rate: '$2,200', submitted: '2 hours ago' },
    { id: 2, influencer: 'Lisa Wang', campaign: 'Back to School', status: 'approved', rate: '$1,500', submitted: '1 day ago' },
    { id: 3, influencer: 'David Kim', campaign: 'Summer Collection', status: 'rejected', rate: '$3,500', submitted: '2 days ago' },
    { id: 4, influencer: 'Maria Garcia', campaign: 'Holiday Gift Guide', status: 'pending', rate: '$1,800', submitted: '3 days ago' }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Clock className="h-4 w-4 text-yellow-600" />
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case 'planning':
        return <Calendar className="h-4 w-4 text-blue-600" />
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
      case 'planning':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'approved':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Brand Dashboard</h1>
            <p className="text-gray-600">Manage your campaigns and track performance, {user?.name}!</p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            Create Campaign
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
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
              <Users className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Influencers</p>
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
                <p className="text-sm font-medium text-gray-600">Budget</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${stats.campaignBudget.toLocaleString()}
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
              {['overview', 'campaigns', 'influencers', 'proposals', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-purple-500 text-purple-600'
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
            {/* Active Campaigns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {campaigns.filter(c => c.status === 'active').map((campaign) => (
                      <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                            <p className="text-sm text-gray-600">{campaign.influencers} influencers</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-purple-600">{campaign.budget}</p>
                            <p className="text-xs text-gray-500">spent: {campaign.spent}</p>
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Proposals */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Proposals</h3>
                </div>
                <div className="p-6 space-y-4">
                  {recentProposals.slice(0, 4).map((proposal) => (
                    <div key={proposal.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{proposal.influencer}</p>
                        <p className="text-sm text-gray-600">{proposal.campaign}</p>
                        <p className="text-xs text-gray-500">{proposal.submitted}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{proposal.rate}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                          {proposal.status}
                        </span>
                      </div>
                    </div>
                  ))}
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
                        <div className="flex items-center space-x-2 mt-1">
                          {getStatusIcon(campaign.status)}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {campaign.status}
                          </span>
                          <span className="text-sm text-gray-600">
                            {campaign.influencers} influencers
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-600">{campaign.budget}</p>
                        <p className="text-xs text-gray-500">spent: {campaign.spent}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Reach</p>
                        <p className="font-semibold">{campaign.reach}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Engagement</p>
                        <p className="font-semibold">{campaign.engagement}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Proposals</p>
                        <p className="font-semibold">{campaign.proposals}</p>
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
                      {campaign.status === 'planning' && (
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Launch
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'influencers' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Influencers</h3>
              <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                <Search className="h-4 w-4 mr-1" />
                Find More
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topInfluencers.map((influencer) => (
                  <div key={influencer.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                          {influencer.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{influencer.name}</h4>
                          <p className="text-sm text-gray-600">{influencer.category}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                            <span>{influencer.followers} followers</span>
                            <span>•</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 mr-1" />
                              {influencer.rating}
                            </div>
                            <span>•</span>
                            <span>{influencer.campaigns} campaigns</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{influencer.engagement}</p>
                        <p className="text-sm text-gray-600">{influencer.totalReach} total reach</p>
                        <p className="text-xs text-gray-500">Avg: {influencer.avgCost}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                        View Profile
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Message
                      </button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                        Invite to Campaign
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'proposals' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">All Proposals</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentProposals.map((proposal) => (
                  <div key={proposal.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{proposal.influencer}</h4>
                        <p className="text-sm text-gray-600">{proposal.campaign}</p>
                        <p className="text-xs text-gray-500">Submitted {proposal.submitted}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{proposal.rate}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                          {proposal.status}
                        </span>
                      </div>
                    </div>
                    {proposal.status === 'pending' && (
                      <div className="mt-3 flex space-x-2">
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                          Approve
                        </button>
                        <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                          Reject
                        </button>
                        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                          View Profile
                        </button>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
              <div className="space-y-4">
                {campaigns.filter(c => c.status !== 'planning').map((campaign) => (
                  <div key={campaign.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{campaign.title}</p>
                      <p className="text-sm text-gray-600">{campaign.reach} reach • {campaign.engagement} engagement</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-purple-600">{campaign.budget}</p>
                      <p className="text-xs text-gray-500">spent: {campaign.spent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Average Engagement</span>
                  </div>
                  <span className="font-bold text-gray-900">8.4%</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-yellow-500" />
                    <span className="font-medium">Cost Per Engagement</span>
                  </div>
                  <span className="font-bold text-gray-900">$0.12</span>
                </div>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">Avg Reach per Campaign</span>
                  </div>
                  <span className="font-bold text-gray-900">365K</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrandDashboard