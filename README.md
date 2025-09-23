# 🇮🇳 Pilot Frontend - Indian Creator Economy Platform

A modern React-based SaaS platform designed specifically for the Indian creator economy, connecting influencers with Indian brands for authentic collaborations.

## 🚀 Features

### For Influencers
- **Multi-language Support**: Hindi, English, and regional language support
- **Indian Payment Integration**: INR currency, UPI, and local payment methods
- **Regional Brand Connections**: Connect with Indian brands across all tiers
- **Festival Season Campaigns**: Special campaigns during Indian festivals
- **Tier-based Opportunities**: Content for Tier 1, 2, and 3 cities

### For Brands
- **Local Market Focus**: Target Indian demographics effectively
- **Regional Campaign Management**: State and city-specific campaigns
- **Cultural Context**: Campaigns aligned with Indian festivals and traditions
- **Cost-effective Solutions**: Pricing optimized for Indian market

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 + Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13 with Indian theme colors
- **State Management**: Zustand 4.4.1
- **Routing**: React Router DOM 6.15.0
- **Forms**: React Hook Form 7.45.4
- **Icons**: Lucide React 0.263.1

## 🔧 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

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

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🐛 Bug Fixes Applied

### Critical Issues Fixed:
1. **Tailwind CSS Import**: Fixed commented import in `src/index.css`
2. **Missing Tailwind Config**: Added `tailwind.config.js` with Indian theme
3. **Conflicting Styles**: Removed default Vite CSS conflicts
4. **Indian Localization**: Added Hindi text and Indian context

### Performance Improvements:
- Optimized component loading
- Added proper error boundaries
- Improved form validation
- Enhanced mobile responsiveness

## 🎨 Indian Theme Customization

### Color Palette
```css
/* Indian Flag Colors */
--saffron: #FF9933
--green-india: #138808
--navy-blue: #000080

/* Cultural Colors */
--rupee-gold: #FFD700
--festival-red: #DC143C
--monsoon-blue: #4682B4
--spice-orange: #FF6347
```

### Typography
- **Hindi**: Noto Sans Devanagari
- **Bengali**: Noto Sans Bengali  
- **Tamil**: Noto Sans Tamil
- **English**: Inter, Segoe UI

## 📱 Demo Credentials

### Influencer Account
- **Email**: `creator@example.com`
- **Phone**: `9876543210`
- **Password**: `password123`

### Brand Account  
- **Email**: `brand@example.com`
- **Phone**: `9123456789`
- **Password**: `password123`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📂 Project Structure

```
src/
├── components/
│   ├── auth/           # Login, Register components
│   ├── layout/         # Navbar, Footer
│   └── pages/          # Main page components
├── store/              # Zustand state management
├── assets/             # Images, icons
├── App.jsx             # Main app component
└── main.jsx           # Entry point
```

## 🌟 Indian Market Features

### Language Support
- **Primary**: Hindi + English
- **Regional**: Bengali, Tamil, Telugu, Marathi
- **UI Elements**: Bilingual labels and messages

### Payment Integration Ready
- **UPI**: PhonePe, Google Pay, Paytm
- **Banking**: NEFT, RTGS, IMPS
- **Wallets**: Paytm, MobiKwik, Freecharge

### Cultural Context
- **Festival Campaigns**: Diwali, Holi, Eid, Christmas
- **Regional Events**: State-specific festivals
- **Local Brands**: Focus on Indian companies

## 🔮 Roadmap for SaaS Launch (3 Months)

### Month 1: Foundation
- [ ] Backend API development
- [ ] Database schema design
- [ ] User authentication system
- [ ] Payment gateway integration

### Month 2: Core Features
- [ ] Campaign management system
- [ ] Real-time messaging
- [ ] Analytics dashboard
- [ ] Mobile app development

### Month 3: Launch Preparation
- [ ] Beta testing with Indian creators
- [ ] Performance optimization
- [ ] Security audits
- [ ] Marketing website

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and queries:
- **Email**: support@pilot-creator.com
- **WhatsApp**: +91-XXXXX-XXXXX
- **Telegram**: @PilotCreatorSupport

## 🙏 Acknowledgments

- Indian Creator Community
- Open Source Contributors
- React & Vite Teams
- Tailwind CSS Team

---

**Made with ❤️ in India for Indian Creators** 🇮🇳