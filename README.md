# Joseph's Path to Glory

**College football recruiting management app for tight end prospects**

## 🏈 Overview

Joseph's Path to Glory is a comprehensive recruiting management system designed specifically for Joseph, a high school senior tight end navigating the college recruiting process. The app combines manual school tracking with AI-powered research to help make informed decisions about JUCO and 4-year programs.

## ✨ Features

### Phase 1: Core Database & Dashboard
- **School Tracker** - Manage 50+ schools with complete CRUD operations
- **Smart Filtering** - Filter by level (JUCO/D1/D2/D3/NAIA), sort by interest/rating/date/name
- **Data Persistence** - localStorage-based storage, survives browser sessions
- **Export/Import** - Backup and restore data as JSON
- **Mobile-First Design** - Optimized for iPhone, responsive across all devices

### Phase 2: AI Research Integration
- **Claude API Integration** - Powered by Claude Sonnet 4
- **Comprehensive Analysis** - Financial breakdown, coaching staff, program momentum, TE development
- **Red Flags & Opportunities** - Brutally honest assessment tailored to Joseph's situation
- **Contact Scripts** - Ready-to-use Twitter DM and email templates
- **JUCO Comparison** - For 4-year schools, how they stack up vs JUCO options

### Phase 2.5: Multi-Factor Scoring System
- **5-Dimension Scoring** - Playing time, position development, transfer pipeline, coaching stability, academic fit
- **Position Versatility** - Dual assessment for TE and FB/H-back roles
- **Weighted Calculations** - Different weights by school level (JUCO/D1/D2/D3/NAIA)
- **Visual Score Badges** - Color-coded indicators (🟢🟡🟠🔴)
- **Cost-Neutral Analysis** - Financial data without affordability judgments

### Phase 3: Firebase Cloud Sync ✨ NEW
- **Real-Time Sync** - Changes appear across all devices in 2-3 seconds
- **Google Sign-In** - Secure authentication with Google accounts
- **Multi-Device Support** - John, Joseph, and family share the same data
- **Offline Persistence** - Works offline, auto-syncs when internet returns
- **Auto-Migration** - First sign-in uploads all local schools to cloud
- **Cost:** $0/month (Firebase free tier)

## 🚀 Live App

Access the app at: **[https://bgslab.github.io/josephs-path-glory](https://bgslab.github.io/josephs-path-glory)**

## 🔑 Setup

1. **Open the app** in your browser: https://bgslab.github.io/josephs-path-glory
2. **Sign in with Google** - Click "Sign In" button in top-right header
3. **Go to Settings** - Enter your Claude API key (get from [console.anthropic.com](https://console.anthropic.com/))
4. **Start researching schools** with AI or add them manually
5. **Access from any device** - Sign in with the same Google account on all devices

## 💻 Technical Details

- **Stack:** Pure vanilla JavaScript (no frameworks)
- **Storage:** localStorage + Firebase Firestore (hybrid sync)
- **Dependencies:** Firebase SDK (CDN)
- **Authentication:** Google Sign-In via Firebase Auth
- **Database:** Firestore (real-time NoSQL database)
- **File Size:** Single ~100KB HTML file
- **UTF-8 Safe:** All emojis verified ✅
- **Cost:** $0/month (Firebase free tier)

## 📊 Data Structure

Each school record includes:
- Basic info (name, level, location, conference)
- Coaching staff (head coach, TE coach, recruiting contact)
- Contact history (communications log)
- Action items (tasks with owners and due dates)
- Ratings (5-star system across 5 categories)
- AI analysis (if researched with Claude)
- Notes

## 🎯 Joseph's Context

This app is built for Joseph's specific situation:
- HS senior TE who missed junior season (injury) → LIMITED FILM
- Mid-to-low 2.X GPA, no test scores → ACADEMIC RISK
- Family financial constraints → $120k+ debt = deal-breaker
- Needs to build more film → JUCO vs 4-year decision critical
- Current offers: Elmhurst D3, interest from Beloit D3, Quincy D2
- Top JUCO targets: Coffeyville CC, Iowa Western CC, Hutchinson CC

The AI analysis is specifically tuned to:
1. Financial viability (will this bankrupt the family?)
2. TE development track record (specific examples)
3. Program stability (coaching turnover = red flag)
4. Transfer pipeline (where do players go next?)
5. Playing time reality (honest assessment)

## 📝 Roadmap

### ✅ Completed (v1.0)
- [x] Phase 1: Core Database & Dashboard
- [x] Phase 2: AI Research Integration
- [x] Phase 2.5: Multi-Factor Scoring System
- [x] Phase 3: Firebase Cloud Sync

### 🔜 Future Enhancements
- [ ] Enhanced Contact & Action Tracking
  - Quick-add contact entry form
  - Quick-add action item form
  - Interactive ratings system
  - Overdue action highlights
- [ ] Comparison & Analytics
  - Side-by-side school comparison (2-3 schools)
  - Visual charts (cost comparison, ratings radar)
  - Timeline view of recruiting process
- [ ] Polish & Optimization
  - PWA support for installable app
  - Push notifications for action items
  - Advanced filtering (combine multiple criteria)
  - Print-friendly views
  - Score override with version history

## 🔒 Privacy & Security

- **Cloud sync** via Firebase Firestore (secured by authentication)
- **Google Sign-In** - Industry-standard OAuth 2.0 authentication
- **User isolation** - Each user only sees their own data
- **API key stored locally** - never transmitted except to Anthropic API
- **Firestore security rules** - Only authenticated users can read/write
- **Export your data** anytime as JSON backup
- **Works offline** - Full functionality without internet
- **No tracking** - Zero analytics or data collection

## 🤝 Credits

Built by Claude Code for John Akalaonu
**Version:** 1.0 Production
**Date:** November 17, 2025
**GitHub:** [bgslab/josephs-path-glory](https://github.com/bgslab/josephs-path-glory)

---

**For Joseph:** Make smart recruiting decisions, avoid $100k+ debt, find the right path to D1 football. 🏈
