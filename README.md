# 🚀 InfluencerPilot Frontend

A modern React application for connecting Indian brands with influencers, featuring role-based dashboards and comprehensive campaign management.

## 📋 Project Status

### ✅ **Completed Components**
- **Homepage Components**: Influencer & Brand homepages with Indian market focus
- **Dashboard Components**: Analytics and management dashboards (implementation pending)
- **Navigation**: Responsive navbar with role-based features
- **Authentication Store**: State management ready for integration
- **Responsive Design**: Mobile-first approach with Indian theme

### 🔄 **Integration Ready**
- **Auth Module**: Placeholders ready for teammate's login/signup components
- **Backend APIs**: All endpoints documented and integration points identified
- **State Management**: Zustand store configured for seamless data flow

## 🏗️ Architecture

### **Tech Stack**
- **React 18** with Vite for fast development
- **React Router** for navigation
- **Zustand** for state management
- **Tailwind CSS** with Indian theme colors
- **Lucide React** for consistent icons

### **Project Structure**
```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx           # Responsive navigation
│   └── pages/
│       ├── BrandHomepage.jsx    # Brand dashboard overview
│       ├── BrandDashboard.jsx   # Detailed brand analytics
│       ├── InfluencerHomepage.jsx # Influencer opportunities
│       └── InfluencerDashboard.jsx # Influencer analytics
├── store/
│   └── authStore.js             # Authentication state
└── App.jsx                      # Main routing component
```

## 🎨 Features

### **For Influencers**
- 📊 Performance analytics (followers, engagement, earnings)
- 🔥 Hot opportunities from Indian brands (Flipkart, Zomato, Paytm, Myntra)
- 📱 Platform-wise statistics (Instagram, YouTube, Twitter)
- 📈 Trending categories in Indian market
- 💰 INR-based earnings tracking
- 🗣️ Multi-language support indicators

### **For Brands**
- 🎯 Campaign management dashboard
- 👥 Influencer discovery and management
- 📊 Reach and engagement analytics
- 💳 Budget tracking in INR
- 🚀 Quick campaign creation tools
- 📱 Mobile-optimized interface

### **Common Features**
- 🔐 Role-based authentication
- 📱 Fully responsive design
- 🇮🇳 Indian market focus (currency, brands, languages)
- ⚡ Fast loading with optimized performance
- 🎨 Modern UI with Indian flag color scheme

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone https://github.com/1234-ad/pilot-frontend.git
cd pilot-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Demo Login**
For testing purposes, the app includes demo login buttons:
- **Demo Influencer**: Access influencer features
- **Demo Brand**: Access brand features

## 🔗 Integration Guide

### **For Auth Module Integration**
1. Replace auth placeholders in `App.jsx`
2. Import your Login/Register components
3. Connect to the auth store using provided methods

### **For Backend Integration**
1. Review `INTEGRATION_GUIDE.md` for detailed API endpoints
2. Replace mock data with real API calls
3. Update button handlers with actual functionality

### **Auth Store Usage**
```javascript
import { useAuthStore } from './store/authStore'

// Login user after authentication
const { login } = useAuthStore()
login({
  id: user.id,
  name: user.name,
  email: user.email,
  role: 'influencer' | 'brand'  // Must be exactly these values
})

// Check authentication status
const { user, isAuthenticated } = useAuthStore()
```

## 🎨 Theming

### **Indian Market Colors**
```css
/* Available Tailwind classes */
.text-saffron      /* #FF9933 - Indian flag saffron */
.text-green-india  /* #138808 - Indian flag green */
.text-rupee-gold   /* #FFD700 - Currency gold */
.text-festival-red /* #DC143C - Festival colors */
```

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 📱 Mobile Features

- Touch-friendly buttons (44px minimum)
- Collapsible navigation menu
- Optimized text sizing
- Swipe-friendly card layouts
- Mobile-first responsive design

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] Demo login works for both roles
- [ ] Navigation between homepage and dashboard
- [ ] Mobile responsive design
- [ ] Button interactions provide feedback
- [ ] Loading states display correctly
- [ ] Logout functionality works

### **Browser Support**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔧 Configuration

### **Environment Variables**
```env
# Add these when integrating with backend
VITE_API_BASE_URL=your_api_url
VITE_APP_ENV=development|production
```

### **Tailwind Configuration**
Custom Indian theme colors and fonts are configured in `tailwind.config.js`

## 📚 Documentation

- **Integration Guide**: `INTEGRATION_GUIDE.md` - Comprehensive backend integration
- **Component Docs**: Inline comments in component files
- **API Endpoints**: Documented in integration guide

## 🤝 Team Collaboration

### **Division of Work**
- **This Repository**: Homepage & Dashboard components ✅
- **Auth Module**: Login/Signup components (teammate)
- **Backend**: API endpoints and database (backend team)

### **Integration Points**
1. Auth store interface for login/logout
2. API endpoints for data fetching
3. Route protection and navigation

## 🚨 Important Notes

### **Critical Requirements**
- User role must be exactly `'influencer'` or `'brand'`
- All currency displayed in INR (₹)
- Mobile-responsive design maintained
- Error handling for all API calls
- Loading states for all data fetching

### **Ready for Integration**
- ✅ Auth placeholders in place
- ✅ API integration points documented
- ✅ Error handling implemented
- ✅ Loading states configured
- ✅ Mobile responsive
- ✅ Production ready

## 📞 Support

For questions about integration or component usage:
1. Check `INTEGRATION_GUIDE.md`
2. Review component code comments
3. Test with demo login functionality

---

**🎉 Ready for seamless team integration and backend connection!**

## 📄 License

This project is part of a team collaboration for InfluencerPilot platform.