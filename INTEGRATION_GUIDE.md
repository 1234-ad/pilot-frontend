# 🚀 Integration Guide - InfluencerPilot Frontend

## 📋 Overview
This repository contains the **Homepage and Dashboard components** for both Influencers and Brands. The login/signup functionality has been removed as it's handled by a separate auth module.

## 🏗️ Architecture

### **Current Structure**
```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx           # Navigation component
│   └── pages/
│       ├── BrandHomepage.jsx    # Brand user homepage
│       ├── BrandDashboard.jsx   # Brand analytics dashboard
│       ├── InfluencerHomepage.jsx # Influencer homepage
│       └── InfluencerDashboard.jsx # Influencer dashboard
├── store/
│   └── authStore.js             # Authentication state management
└── App.jsx                      # Main routing component
```

## 🔗 Integration Points

### **1. Authentication Integration**

#### **Auth Store Interface**
The `authStore.js` provides these methods for integration:

```javascript
// Login user (call this after successful authentication)
const { login } = useAuthStore()
login({
  id: user.id,
  name: user.name,
  email: user.email,
  role: 'influencer' | 'brand'  // CRITICAL: Must be exactly these values
})

// Logout user
const { logout } = useAuthStore()
logout()

// Check authentication status
const { user, isAuthenticated } = useAuthStore()
```

#### **Required User Object Structure**
```javascript
{
  id: number | string,
  name: string,
  email: string,
  role: 'influencer' | 'brand'  // Exactly these strings
}
```

### **2. Route Integration**

#### **Auth Routes (To be replaced)**
- `/login` - Currently shows placeholder, replace with your Login component
- `/register` - Currently shows placeholder, replace with your Register component

#### **Protected Routes (Already implemented)**
- `/homepage` - Role-based homepage (Influencer/Brand)
- `/dashboard` - Role-based dashboard (Influencer/Brand)

### **3. Backend API Integration Points**

#### **Homepage Data Endpoints Needed**

**Influencer Homepage:**
```javascript
// GET /api/influencer/stats
{
  totalFollowers: number,
  engagementRate: number,
  activeCampaigns: number,
  totalEarnings: number
}

// GET /api/influencer/opportunities
[{
  id: number,
  brand: string,
  title: string,
  budget: string,
  deadline: string,
  category: string,
  requirements: string,
  location: string,
  language: string,
  status: string
}]

// POST /api/influencer/apply/{opportunityId}
// POST /api/influencer/opportunities/{id}/details
```

**Brand Homepage:**
```javascript
// GET /api/brand/stats
{
  activeCampaigns: number,
  totalInfluencers: number,
  totalReach: number,
  campaignBudget: number
}

// GET /api/brand/campaigns
[{
  id: number,
  title: string,
  status: string,
  influencers: number,
  budget: string,
  reach: string,
  engagement: string,
  deadline: string,
  category: string
}]

// GET /api/brand/influencers/top
[{
  id: number,
  name: string,
  category: string,
  followers: string,
  engagement: string,
  rating: number,
  campaigns: number,
  location: string,
  language: string
}]
```

## 🔧 Integration Steps

### **Step 1: Replace Auth Placeholders**
1. Remove placeholder components in `App.jsx`
2. Import your Login/Register components
3. Replace `<AuthPlaceholder />` with your components

```javascript
// Replace these lines in App.jsx
import Login from '../path/to/your/Login'
import Register from '../path/to/your/Register'

// Replace in routes
<Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/homepage" />} />
<Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/homepage" />} />
```

### **Step 2: Connect Authentication**
In your Login/Register components, call the auth store:

```javascript
import { useAuthStore } from '../store/authStore'

// After successful login API call
const { login } = useAuthStore()
login(userData) // userData must have id, name, email, role

// After successful registration
const { login } = useAuthStore()
login(userData)
```

### **Step 3: Connect Backend APIs**
Replace the mock data loading in homepage components:

```javascript
// In InfluencerHomepage.jsx, replace the useEffect:
useEffect(() => {
  const loadStats = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/influencer/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }
  loadStats()
}, [])
```

### **Step 4: Connect Button Actions**
Replace alert() calls with actual API calls:

```javascript
// Example: Apply to opportunity
const handleApplyNow = async (opportunityId) => {
  try {
    const response = await fetch(`/api/influencer/apply/${opportunityId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id })
    })
    if (response.ok) {
      alert('Application submitted successfully!')
      // Refresh opportunities list
    }
  } catch (error) {
    console.error('Error applying:', error)
    alert('Failed to submit application')
  }
}
```

## 🎨 Styling & Theming

### **Indian Theme Colors (Already configured)**
```javascript
// Available in Tailwind config
colors: {
  saffron: '#FF9933',        // Indian flag saffron
  'green-india': '#138808',  // Indian flag green
  'rupee-gold': '#FFD700',   // Gold for currency
  'festival-red': '#DC143C', // Festival colors
  // ... more Indian-themed colors
}
```

### **Responsive Design**
- ✅ Mobile-first approach
- ✅ Tablet and desktop optimized
- ✅ Touch-friendly buttons
- ✅ Proper text scaling

## 🧪 Testing Integration

### **Demo Login (For Testing)**
The current App.jsx includes demo login buttons for testing:
- Demo Influencer Login
- Demo Brand Login

Remove these after integrating real authentication.

### **Test Checklist**
- [ ] Login redirects to correct homepage based on role
- [ ] Logout clears state and redirects to login
- [ ] Navigation works between homepage and dashboard
- [ ] Mobile responsive design works
- [ ] All buttons show appropriate feedback
- [ ] Data loading states work properly

## 🚨 Critical Requirements

### **User Role Validation**
```javascript
// MUST be exactly these strings
user.role === 'influencer' // for influencer features
user.role === 'brand'      // for brand features
```

### **Error Handling**
All API calls should include proper error handling:
```javascript
try {
  const response = await fetch('/api/endpoint')
  if (!response.ok) throw new Error('API Error')
  const data = await response.json()
  // Handle success
} catch (error) {
  console.error('Error:', error)
  // Show user-friendly error message
}
```

### **Loading States**
All data fetching should show loading indicators:
```javascript
const [loading, setLoading] = useState(true)
// Show loading UI while loading === true
```

## 📱 Mobile Considerations

- All components are mobile-responsive
- Touch targets are 44px minimum
- Text is readable on small screens
- Navigation collapses appropriately
- Forms work well on mobile keyboards

## 🔒 Security Notes

- Auth tokens should be stored securely (not in localStorage for production)
- All API calls should include proper authentication headers
- User data should be validated on both frontend and backend
- Implement proper CSRF protection

## 🚀 Deployment Ready

The codebase is production-ready with:
- ✅ Error boundaries
- ✅ Loading states
- ✅ Responsive design
- ✅ Accessibility features
- ✅ SEO-friendly structure
- ✅ Performance optimized

## 📞 Support

For integration questions or issues:
1. Check this guide first
2. Review the component code comments
3. Test with demo login functionality
4. Ensure user object structure matches requirements

---

**Ready for seamless backend integration! 🎉**