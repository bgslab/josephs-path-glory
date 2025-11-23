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

### Phase 3: Firebase Cloud Sync
- **Real-Time Sync** - Changes appear across all devices in 2-3 seconds
- **Google Sign-In** - Secure authentication with Google accounts
- **Multi-Device Support** - Access from any device with your Google account
- **Offline Persistence** - Works offline, auto-syncs when internet returns
- **Auto-Migration** - First sign-in uploads all local schools to cloud
- **Cost:** $0/month (Firebase free tier)

### Phase 3.5: Team Collaboration
- **Shared Team Workspace** - John, Joseph, Mom, and Coach all see the same schools
- **Individual Google Accounts** - Everyone signs in with their own Google account
- **Contributor Attribution** - Each school shows "Added by [Name]" for transparency
- **Filter by Contributor** - View only schools added by specific team members
- **Team Management** - Create team or join existing team with Team ID
- **Real-Time Team Sync** - Changes from any team member appear instantly for everyone

### Phase 4: School Discovery (AI Reverse Lookup)
- **Smart Filters** - Search by level, state, conference, minimum score
- **AI-Powered Discovery** - Find top 10 schools matching Joseph's profile
- **Stack-Ranked Results** - Schools ranked 1-10 with scores and reasoning
- **Quick Preview** - See all 5 dimension scores at a glance
- **Deep Dive Option** - Click "Full Research" for comprehensive analysis
- **Quick Add** - Save discovered schools to tracker with one click
- **Already Tracked Badge** - Shows which schools are already in your list

### Phase 5: Multi-Action System
- **Multiple Actions Per School** - Track unlimited actions for each school
- **Add or Replace** - Choose to add new action or replace existing one
- **Action History** - Complete audit log of all action changes per school
- **Activity Tab** - New tab in school detail showing all activity with timestamps
- **Bulk Action Creation** - Add the same action to multiple schools at once
- **Action Timestamps** - See when actions were added, modified, or completed
- **Automatic Migration** - Existing actions automatically converted to new system

### Phase 6: Profile & Auto-Fit ✨ NEW
- **Joseph's Profile** - Store GPA, position, physical characteristics, and skills
- **Physical Characteristics** - Height, weight, 40-yard dash, vertical, bench, squat
- **Skills Selection** - Toggle skills like Lead Blocker, Pass Catcher, Route Runner
- **Auto-Fit Badges** - Schools show 🟢 Good Fit, 🟡 Stretch, or 🔴 Reach based on GPA
- **Level-Based GPA Requirements** - JUCO/D3 (2.0), D2/NAIA (2.2), D1 (2.3)
- **Scoring Fix** - Corrected weighted score calculation for accurate Overall Scores

## 🚀 Live App

Access the app at: **[https://bgslab.github.io/josephs-path-glory](https://bgslab.github.io/josephs-path-glory)**

## 🔑 Setup

1. **Open the app** in your browser: https://bgslab.github.io/josephs-path-glory
2. **Sign in with Google** - Click "Sign In" button in top-right header
3. **Set up team collaboration:**
   - **First person (John):** Create new team, save the Team ID shown in alert
   - **Other members (Joseph, Mom, Coach):** Join existing team using Team ID
4. **Go to Settings** - Enter your Claude API key (get from [console.anthropic.com](https://console.anthropic.com/))
5. **Start researching schools** with AI or add them manually
6. **Share Team ID** - Give the Team ID to family members so they can join and collaborate

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
- Family has financial considerations → App provides cost data for informed decisions
- Needs to build more film → JUCO vs 4-year decision critical
- Current offers: Elmhurst D3, interest from Beloit D3, Quincy D2
- Top JUCO targets: Coffeyville CC, Iowa Western CC, Hutchinson CC

The AI analysis is specifically tuned to:
1. Financial analysis (present cost breakdowns, scholarship potential, 4-year expenses for family to assess fit)
2. TE development track record (specific examples)
3. Program stability (coaching turnover = red flag)
4. Transfer pipeline (where do players go next?)
5. Playing time reality (honest assessment)

## 📝 Roadmap

### ✅ Completed (v1.7)
- [x] Phase 1: Core Database & Dashboard
- [x] Phase 2: AI Research Integration
- [x] Phase 2.5: Multi-Factor Scoring System
- [x] Phase 3: Firebase Cloud Sync
- [x] Phase 3.5: Team Collaboration
- [x] Phase 4: School Discovery (AI Reverse Lookup)
- [x] Phase 5: Multi-Action System (v1.6)
  - Multiple actions per school
  - Action history/audit log
  - Activity tab with timestamps
  - Add new or replace existing actions
  - Overdue action highlights
- [x] Phase 6: Profile & Auto-Fit (v1.7)
  - Joseph's Profile (GPA, position, physical characteristics, skills)
  - Profile Editor with comprehensive fields
  - Physical: height, weight, 40-time, vertical, bench, squat
  - Skills: Lead Blocker, Pass Catcher, Route Runner, etc.
  - Auto-fit badges (Good Fit/Stretch/Reach) based on GPA
  - Fixed scoring bug (weighted calculation)
- [x] Phase 7: Enhanced School Cards (v1.8)
  - Conference displayed on dashboard cards
  - Division level for JUCOs (NJCAA D1, D3, CCCAA)
  - Driving time from Crystal Lake, IL in AI research
  - Quick Facts section in AI tab

### 🔜 Future Enhancements
- [ ] Enhanced Contact Tracking
  - Quick-add contact entry form
  - Interactive ratings system
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
- **Team-based access** - Team members see shared data, isolated from other teams
- **Secure team membership** - Only team members can view/edit team's schools
- **API key stored locally** - never transmitted except to Anthropic API
- **Firestore security rules** - Team membership verified on every operation
- **Export your data** anytime as JSON backup
- **Works offline** - Full functionality without internet
- **No tracking** - Zero analytics or data collection

## 🤝 Credits

Built by Claude Code for John Akalaonu
**Version:** 1.8 Enhanced School Cards
**Date:** November 22, 2025
**GitHub:** [bgslab/josephs-path-glory](https://github.com/bgslab/josephs-path-glory)

---

**For Joseph:** Make smart recruiting decisions, avoid $100k+ debt, find the right path to D1 football. 🏈
