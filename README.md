# Pilot Frontend - Influencer Collaboration Platform

A modern React-based frontend application for connecting brands with influencers. Built with Vite, TailwindCSS, and comprehensive features for role-based user management.

## 🚀 Features

### ✅ Authentication System
- **Login/Register** with form validation
- **Role Selection** during registration (Brand/Influencer)
- **Persistent Authentication** using localStorage
- **Protected Routing** with role-based access control

### ✅ Role-Based Pages

#### For Influencers:
- **Homepage**: Welcome dashboard with stats, opportunities, and quick actions
- **Dashboard**: Comprehensive analytics with platform performance, campaign management, and earnings tracking
- **Features**: 
  - Platform statistics (Instagram, YouTube, Twitter)
  - Campaign progress tracking
  - Earnings overview
  - Engagement metrics

#### For Brands:
- **Homepage**: Campaign management overview with influencer discovery
- **Dashboard**: Complete brand management with campaign analytics
- **Features**:
  - Active campaign monitoring
  - Influencer performance tracking
  - Proposal management system
  - Budget and ROI analytics

### ✅ UI/UX Features
- **Responsive Design** - Mobile-first approach
- **Modern Interface** - Clean, professional design
- **Interactive Components** - Hover effects, transitions
- **Role-Based Navigation** - Different nav items based on user role
- **Loading States** - Smooth user experience
- **Form Validation** - Real-time validation with error messages

## 🛠 Tech Stack

- **Frontend Framework**: React 19 with Vite
- **Styling**: TailwindCSS 4.1
- **Routing**: React Router DOM v6
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/1234-ad/pilot-frontend.git
   cd pilot-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🏗 Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── Login.jsx          # Login form component
│   │   └── Register.jsx       # Registration with role selection
│   ├── layout/
│   │   └── Navbar.jsx         # Navigation component
│   └── pages/
│       ├── InfluencerHomepage.jsx    # Influencer landing page
│       ├── BrandHomepage.jsx         # Brand landing page
│       ├── InfluencerDashboard.jsx   # Influencer analytics dashboard
│       └── BrandDashboard.jsx        # Brand management dashboard
├── store/
│   └── authStore.js           # Authentication state management
├── App.jsx                    # Main app with routing
└── main.jsx                   # App entry point
```

## 🔐 Authentication Flow

1. **Registration**: Users select their role (Brand/Influencer) during signup
2. **Login**: Simple email/password authentication with role detection
3. **Role-Based Routing**: Users are redirected to appropriate pages based on their role
4. **Persistent Sessions**: Authentication state persists across browser sessions

## 🎯 Demo Credentials

For testing purposes, the app uses simple role detection:
- **Influencer**: Use any email without "brand" in it
- **Brand**: Use any email containing "brand" (e.g., brand@example.com)
- **Password**: Any password (minimum 6 characters)

## 📱 Pages Overview

### Influencer Pages
- **Homepage** (`/homepage`): Stats overview, new opportunities, platform performance
- **Dashboard** (`/dashboard`): Detailed analytics, campaign management, earnings tracking

### Brand Pages  
- **Homepage** (`/homepage`): Campaign overview, top influencers, quick actions
- **Dashboard** (`/dashboard`): Campaign management, influencer tracking, proposal handling

## 🎨 Design Features

- **Gradient Backgrounds**: Eye-catching hero sections
- **Card-Based Layout**: Clean, organized information display
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Grid**: Adapts to different screen sizes
- **Color-Coded Status**: Visual indicators for different states
- **Professional Typography**: Clear hierarchy and readability

## 🚦 Routing

- `/` - Redirects to homepage or login based on auth status
- `/login` - Login page
- `/register` - Registration page with role selection
- `/homepage` - Role-based homepage (Influencer/Brand)
- `/dashboard` - Role-based dashboard (Influencer/Brand)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Components

1. **AuthStore**: Manages user authentication state
2. **Protected Routes**: Ensures authenticated access
3. **Role-Based Components**: Different content based on user role
4. **Responsive Design**: Mobile-first approach

## 🎯 Future Enhancements

- Backend API integration
- Real-time messaging system
- Campaign creation workflow
- Influencer search and filtering
- Payment integration
- Analytics dashboard with charts
- File upload functionality
- Email notifications

## 📄 License

This project is part of a team development exercise for an influencer collaboration platform.

## 🤝 Contributing

This is a team project. Each member is responsible for specific features:
- Authentication system ✅
- Homepage and Dashboard implementation ✅
- Campaign management (upcoming)
- Messaging system (upcoming)
- Search and discovery (upcoming)

---

**Built with ❤️ using React, Vite, and TailwindCSS**