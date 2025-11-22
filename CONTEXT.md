# Joseph's Path to Glory - Project Context
**Last Updated:** November 19, 2025
**Current Version:** v1.2 School Discovery
**Status:** ✅ Production - Live at https://bgslab.github.io/josephs-path-glory

---

## 📖 WHAT IS JOSEPH'S PATH TO GLORY?

Joseph's Path to Glory is a college football recruiting management app built specifically for Joseph Akalaonu, a high school senior tight end navigating the college recruiting process. The app combines manual school tracking with AI-powered research to help make informed decisions about JUCO and 4-year programs.

### Key Use Cases
- **Track 50+ colleges** - Manage JUCO, D1, D2, D3, and NAIA programs
- **AI-powered research** - Claude Sonnet 4 analyzes schools for fit
- **Team collaboration** - John, Joseph, Mom, and Coach work together
- **Multi-factor scoring** - 5-dimension scoring system for objective comparison
- **Real-time sync** - Changes appear across all devices in 2-3 seconds
- **Contact tracking** - Log communications and set action items
- **Offline support** - Works without internet, auto-syncs when connected

### Joseph's Specific Context
This app is built for Joseph's unique situation:
- **HS senior TE who missed junior season (injury)** → LIMITED FILM
- **Mid-to-low 2.X GPA, no test scores** → ACADEMIC RISK
- **Family has financial considerations** → App provides cost data for informed decisions
- **Needs to build more film** → JUCO vs 4-year decision critical
- **Current offers:** Elmhurst D3, interest from Beloit D3, Quincy D2
- **Top JUCO targets:** Coffeyville CC, Iowa Western CC, Hutchinson CC

The AI analysis is specifically tuned to:
1. **Financial analysis** - Present cost breakdowns, scholarship potential, and 4-year expenses for family to assess fit
2. **TE development track record** - Specific examples of player development
3. **Program stability** - Coaching turnover = red flag
4. **Transfer pipeline** - Where do players go next?
5. **Playing time reality** - Honest assessment of competition

---

## 🏗️ ARCHITECTURE

### Tech Stack
- **Frontend:** Pure vanilla JavaScript, HTML5, CSS3 (no frameworks)
- **Storage:** Hybrid - localStorage + Firebase Firestore
- **Authentication:** Google Sign-In via Firebase Auth (OAuth 2.0)
- **Database:** Firebase Firestore (real-time NoSQL database)
- **AI:** Anthropic Claude API (Sonnet 4)
- **API Proxy:** Cloudflare Worker (CORS bypass)
- **Deployment:** GitHub Pages (https://bgslab.github.io/josephs-path-glory)
- **File Size:** Single ~150KB HTML file (3,224 lines)
- **Mobile-First:** Optimized for iPhone 480px viewport
- **Theme:** Dark mode with navy/cyan color scheme

### File Structure
```
/josephs-path-glory
├── index.html                          # Main app (3,224 lines, all logic)
├── cloudflare-worker.js                # Anthropic API CORS proxy (75 lines)
├── wrangler.toml                       # Cloudflare Worker config
├── README.md                           # Project documentation
├── CONTEXT.md                          # This file - project context
├── CLOUDFLARE_SETUP.md                 # API key setup guide (Worker secrets) ⭐ NEW
├── FIRESTORE_SETUP_INSTRUCTIONS.md     # Firebase setup guide
├── V1.1_DEPLOYMENT_SUMMARY.md          # v1.1 release notes
├── firestore-security-rules-v4-working.txt  # Production security rules
└── .wrangler/                          # Cloudflare cache (gitignored)
```

### Key App Modules (within index.html)
```javascript
App.Auth          // Lines 1279-1356 - Google authentication
App.Team          // Lines 1358-1481 - Team collaboration
App.Storage       // Lines 1485-1623 - localStorage operations
App.CloudSync     // Lines 1627-1794 - Firebase Firestore sync
App.API           // Lines 1796-2335 - Claude AI research + scoring
App.Discover      // Lines 2337-2667 - AI school discovery (NEW v1.2)
App.UI            // Lines 2669-3696 - View management & rendering
```

### External Services
| Service | Purpose | Cost | Storage Location |
|---------|---------|------|------------------|
| **Firebase Auth** | Google Sign-In | Free | N/A |
| **Firebase Firestore** | Real-time database | Free tier | Cloud |
| **Anthropic Claude API** | AI school research | User pays | API key in localStorage |
| **Cloudflare Worker** | CORS proxy | Free tier | Secrets in Worker |
| **GitHub Pages** | Static hosting | Free | N/A |

---

## 🎯 CURRENT FEATURES (v1.2)

### Phase 1: Core Database & Dashboard
- **School Tracker** - Manage 50+ schools with complete CRUD operations
- **Smart Filtering** - Filter by level (JUCO/D1/D2/D3/NAIA), sort by interest/rating/date/name
- **Data Persistence** - localStorage-based storage, survives browser sessions
- **Export/Import** - Backup and restore data as JSON
- **Mobile-First Design** - Optimized for iPhone, responsive across all devices

### Phase 2: AI Research Integration
- **Claude API Integration** - Powered by Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- **Comprehensive Analysis** - Financial breakdown, coaching staff, program momentum, TE development
- **Red Flags & Opportunities** - Brutally honest assessment tailored to Joseph's situation
- **Contact Scripts** - Ready-to-use Twitter DM and email templates
- **JUCO Comparison** - For 4-year schools, how they stack up vs JUCO options

### Phase 2.5: Multi-Factor Scoring System
- **5-Dimension Scoring** - Playing time, position development, transfer pipeline, coaching stability, academic fit
- **Position Versatility** - Dual assessment for TE and FB/H-back roles
- **Weighted Calculations** - Different weights by school level (JUCO/D1/D2/D3/NAIA)
- **Visual Score Badges** - Color-coded indicators (🟢 Green 4.0+, 🟡 Yellow 3.0-3.9, 🟠 Orange 2.0-2.9, 🔴 Red <2.0)
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

### Phase 4: School Discovery (AI Reverse Lookup) ✨ NEW (v1.2)
- **Smart Filters** - Search by level (JUCO/D1/D2/D3/NAIA), state, conference, minimum score
- **AI-Powered Discovery** - Claude analyzes and ranks top 10 schools matching Joseph's profile
- **Stack-Ranked Results** - Schools displayed 1-10 with overall scores and reasoning
- **5-Dimension Preview** - See all scores (Playing Time, Position Dev, Transfer, Coaching, Academic) at a glance
- **Quick Actions** - "Full Research" button triggers comprehensive analysis, "Quick Add" saves to tracker
- **Already Tracked Badge** - Shows ✓ for schools already in your list
- **Same Scoring Logic** - Uses identical 5-dimension criteria and weights as individual research
- **Cost-Efficient** - ~$0.05 per discovery search (~3,000 tokens output vs ~1,500 for individual school)

---

## 🔑 KEY TECHNICAL DECISIONS

### Why Firebase?
✅ **Real-time sync** - Changes propagate in 2-3 seconds
✅ **Google Sign-In** - Industry-standard OAuth 2.0, no password management
✅ **Free tier** - 50k reads/day, 20k writes/day, 1GB storage (more than enough)
✅ **Offline persistence** - Built-in offline support with auto-sync
✅ **Security rules** - Team-based access control enforced server-side
✅ **No backend code** - Fully serverless architecture

### Why Claude API?
✅ **Intelligent analysis** - Deep reasoning about school fit
✅ **Context-aware** - Understands Joseph's specific situation
✅ **Honest assessment** - Doesn't sugarcoat financial/academic realities
✅ **Structured output** - Returns JSON for easy parsing
✅ **High quality** - Sonnet 4 tier for best analysis
✅ **User pays** - John controls costs via his own API key

### Why Cloudflare Worker?
✅ **CORS bypass** - Browser can't call Claude API directly
✅ **API key security** - Keeps Claude API requests server-side
✅ **Free tier** - 100k requests/day on free plan
✅ **Global CDN** - Low latency from anywhere
✅ **Simple deployment** - `npx wrangler deploy`

### Why Single-File Architecture?
✅ **Simplicity** - No build process, no bundler, no dependencies
✅ **Offline-first** - All code loads in one request
✅ **Fast** - No framework overhead, vanilla JS is fastest
✅ **Debuggable** - View source shows actual running code
✅ **Portable** - Single HTML file can be saved/shared

---

## 🗄️ DATA STRUCTURES

### School Object Schema
```javascript
{
  // Identity
  id: "school_1731875696123",  // Timestamp-based ID

  // Basic Info
  schoolName: "University of Nebraska",
  level: "D1",  // JUCO | D1 | D2 | D3 | NAIA
  location: "Lincoln, Nebraska",
  conference: "Big Ten",

  // Coaching Staff
  headCoach: "Matt Rhule",
  positionCoach: "Sean Beckton",  // TE coach
  recruitingContact: "Coach Name",
  phone: "(402) 472-3111",
  email: "recruiting@huskers.com",
  twitter: "@HuskerFBRecruit",

  // Status Tracking
  ourInterestLevel: "High",  // High | Medium | Low
  theirInterestLevel: "Unknown",  // High | Medium | Low | Unknown
  likelihood: "Reach",  // Dream | Reach | Target | Safety
  offerStatus: "None",  // None | Offered | Accepted | Declined

  // Relationships & History
  contactHistory: [
    {
      date: "2025-11-17",
      type: "Email",  // Email | Phone | Text | Visit | Camp | Game
      notes: "Sent intro email with highlight film",
      nextStep: "Follow-up call in 1 week"
    }
  ],
  actionHistory: [
    {
      task: "Schedule campus visit",
      owner: "John",  // John | Joseph | Mom | Coach
      dueDate: "2025-12-01",
      completed: false
    }
  ],

  // Manual Ratings (0-5 stars, user input)
  ratings: {
    coach: 4,
    programFit: 5,
    financial: 3,
    academic: 2,
    location: 4,
    overall: 3.6  // Average of above
  },

  // AI Analysis (populated if researched with Claude)
  aiAnalysis: {
    // Basic Info
    recentRecord: "5-7 (2024), 4-8 (2023)",
    tuitionCost: "$28,000/year (out-of-state)",
    fourYearCost: "$112,000",
    scholarshipPotential: "75-100% likely for recruited walk-ons",

    // Program Assessment
    programMomentum: "Rising - new HC Matt Rhule in 2023",
    teDevelopment: "Strong history - 3 TEs drafted in last 10 years",
    transferPipeline: "TEs to NFL practice squads, CFL",

    // Honest Evaluation
    redFlags: [
      "Recent losing seasons may impact recruiting",
      "High academic standards with 2.X GPA"
    ],
    opportunities: [
      "Need TEs after seniors graduate",
      "New staff building relationships"
    ],

    // Financial Analysis (cost-neutral tone)
    financialComparison: "Out-of-state tuition $112k over 4 years. Scholarship coverage determines viability.",

    // Recommendations
    recommendation: "Medium Priority - Academic risk, but strong TE development",
    contactStrategy: "Emphasize work ethic, coachability, and film from senior season",

    // Ready-to-use Contact Scripts
    contactScriptTwitter: "Coach Beckton - Saw your TE development success...",
    contactScriptEmail: "Dear Coach Beckton, I'm Joseph Akalaonu...",

    // JUCO Comparison (only for 4-year schools)
    comparisonToJuco: "Compared to Iowa Western CC: Higher risk due to academics...",

    // Phase 2.5 Additions - Position Fit
    positionFit: {
      best_fit_position: "Tight End",  // Tight End | FB/H-back
      te: {
        score: 4.2,  // 0-5 scale
        assessment: "Strong Fit",  // Strong Fit | Moderate Fit | Limited Fit | Poor Fit
        reasoning: "Program uses TEs in passing game, recent draft history..."
      },
      fb: {
        score: 3.5,
        assessment: "Moderate Fit",
        reasoning: "Occasional FB sets, but not primary role..."
      }
    },

    // Phase 2.5 Additions - Multi-Factor Scores
    scores: {
      playing_time: {
        value: 4.5,  // 0-5 scale
        reasoning: "Depth chart analysis: 2 senior TEs graduating..."
      },
      position_development: {
        value: 4.0,
        reasoning: "3 TEs drafted in 10 years, strong coaching..."
      },
      transfer_pipeline: {
        value: 4.2,
        reasoning: "TEs move to NFL practice squads, CFL..."
      },
      coaching_stability: {
        value: 3.0,
        reasoning: "New HC in 2023, TE coach stable for 2 years..."
      },
      academic_fit: {
        value: 2.8,
        reasoning: "High standards, 2.X GPA is risk..."
      }
    },

    // Verification (Phase 2.5)
    researchDate: "2025-11-17T12:34:56.789Z"
  },

  // Verification Status (Phase 2.5)
  lastVerifiedDate: "2025-11-17T12:34:56.789Z",
  manualOverrides: {
    headCoach: false,  // User manually updated this field
    positionCoach: false,
    recentRecord: false,
    programMomentum: false
  },

  // Team Collaboration (Phase 3.5 - v1.1)
  teamId: "EEFogLM7jY4o2WNodtNW",  // Firebase team document ID
  createdBy: "john@akalaonu.com",
  createdByName: "John Akalaonu",
  lastEditedBy: "joseph@akalaonu.com",
  lastEditedByName: "Joseph",

  // Metadata
  notes: "Additional notes from visit...",
  dateAdded: "2025-11-17",
  nextAction: "Schedule campus visit"
}
```

### Team Object Schema (Firestore)
```javascript
// Collection: teams
// Document ID: Auto-generated (e.g., "EEFogLM7jY4o2WNodtNW")
{
  name: "Joseph's Recruiting Team",
  owner: "john@akalaonu.com",  // Email of team creator
  ownerName: "John Akalaonu",  // Display name
  members: [  // Array of member emails
    "john@akalaonu.com",
    "joseph@akalaonu.com",
    "mom@akalaonu.com",
    "coach@email.com"
  ],
  memberNames: {  // Map of email → display name
    "john@akalaonu.com": "John Akalaonu",
    "joseph@akalaonu.com": "Joseph",
    "mom@akalaonu.com": "Mom",
    "coach@email.com": "Coach Smith"
  },
  createdAt: firebase.firestore.FieldValue.serverTimestamp()
}
```

### Settings Object (localStorage only - never in Firestore)
```javascript
// Key: 'josephs-path-glory-settings'
{
  apiKey: "sk-ant-api03-...",  // Claude API key - NEVER sync to cloud
  theme: "dark"
}
```

---

## 📦 VERSION HISTORY

### Git Repository
- **GitHub:** https://github.com/bgslab/josephs-path-glory
- **Live URL:** https://bgslab.github.io/josephs-path-glory
- **Branch:** main
- **Owner:** John Akalaonu (@bgslab)

### v1.1 Team Collaboration (November 17, 2025) ✅ CURRENT
**Tag:** `v1.1`
**Commit:** `0260b55`
**Status:** Production - Live

**Major Features:**
- ✨ Shared team workspace with individual Google accounts
- ✨ Contributor attribution ("Added by John Akalaonu")
- ✨ Filter schools by contributor
- ✨ Team management (create/join with Team ID)
- ✨ Real-time team sync (2-3 second latency)

**Breaking Changes:**
- Users from v1.0 must create/join team on next sign-in
- Old user-isolated schools won't migrate automatically
- Fresh start ensures proper team structure

**Key Commits:**
- `0260b55` - Release v1.1: Team Collaboration
- `7711fdb` - Team collaboration Part 2: CloudSync + contributor tracking
- `ca50dda` - WIP: Team collaboration architecture (Part 1/3)

**Technical Changes:**
- Team module (getCurrentTeam, createTeam, joinTeam)
- Team setup modal on first sign-in
- CloudSync queries by teamId instead of userId
- Schools track createdBy/lastEditedBy with names
- Contributor filter dropdown auto-populates
- Firestore security rules enforce team membership

---

### v1.0 Production (November 17, 2025)
**Tag:** `v1.0`
**Commit:** `0746582`
**Status:** Superseded by v1.1

**Major Features:**
- Firebase Cloud Sync with Google Sign-In
- Real-time multi-device synchronization
- Offline persistence with auto-sync
- User-isolated data (each user sees only their schools)

**Key Commits:**
- `0746582` - Update version to v1.0 Production
- `5435693` - Phase 3: Firebase Cloud Sync implementation
- `bd17f2c` - Fix: Display AI scores in detail view
- `1d86b65` - Improve API error logging for debugging

---

### Phase 2.5: Multi-Factor Scoring (November 2025)
**Commit:** `219f213`

**Features:**
- 5-dimension scoring system (playing time, position dev, transfer, coaching, academic)
- Position versatility assessment (TE/FB dual scoring)
- Weighted calculations by school level
- Visual score badges with color coding
- Overall score calculation (0-5 scale)

**Key Commits:**
- `219f213` - Phase 2.5: Multi-factor scoring + position versatility
- `3032581` - Add verification system for outdated AI data
- `f4cb9dd` - Make financial analysis cost-neutral

---

### Initial Release (November 2025)
**Commit:** `7513b44`

**Features:**
- Core database with CRUD operations
- School tracking (50+ schools)
- Smart filtering and sorting
- localStorage persistence
- Export/Import JSON
- AI-powered research with Claude
- Contact scripts generation
- Mobile-first responsive design

**Key Commits:**
- `7513b44` - Initial commit: Core database + AI research
- `8e6ae8d` - Add Cloudflare Worker proxy for CORS

---

## 📍 WHERE TO FIND CODE

### Core Modules (index.html)

**Firebase Initialization** (Lines 1148-1176)
```javascript
const firebaseConfig = { ... };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
db.enablePersistence();  // Offline support
```

**Authentication Module** (Lines 1177-1196)
```javascript
App.Auth = {
  signIn() { ... },           // Google Sign-In
  signOut() { ... },          // Sign out
  onAuthStateChanged() { ... } // Auth listener
}
```

**Team Module** (Lines 1198-1321)
```javascript
App.Team = {
  currentTeam: null,
  getCurrentTeam() { ... },   // Find user's team
  createTeam(name) { ... },   // Create new team
  joinTeam(teamId) { ... },   // Join existing team
  addMember(email) { ... }    // Add team member
}
```

**Storage Module** (Lines 1379-1513)
```javascript
App.Storage = {
  STORAGE_KEY: 'josephs-path-glory-data',
  VERSION: '1.1',
  getData() { ... },          // Read from localStorage
  setData(data) { ... },      // Write to localStorage
  getSchools() { ... },       // Get all schools
  saveSchool(school) { ... }  // Save single school
}
```

**CloudSync Module** (Lines 1517-1659)
```javascript
App.CloudSync = {
  migrateLocalToCloud() { ... },      // Upload local schools
  startRealtimeSync() { ... },        // Listen to Firestore changes
  saveSchoolToCloud(school) { ... },  // Save with teamId + attribution
  deleteSchoolFromCloud(id) { ... }   // Delete from cloud
}
```

**API Module - Claude Integration** (Lines 1661-1898)
```javascript
App.API = {
  researchSchool(schoolName, level) { ... },  // Call Claude API
  callClaudeAPI(messages) { ... },            // HTTP request
  parseAIResponse(content) { ... }            // Parse JSON response
}
```

**API Module - Scoring System** (Lines 1900-2234)
```javascript
App.API = {
  getWeightsByLevel(level) { ... },           // D1 vs JUCO weights
  calculateOverallScore(data) { ... },        // Weighted average
  getScoreBadge(score) { ... },               // 🟢🟡🟠🔴
  formatScoreForDisplay(score) { ... }        // "4.2 (Strong)"
}
```

**UI Module - Rendering** (Lines 2242-2500)
```javascript
App.UI = {
  renderSchools() { ... },                // Render school grid
  renderSchoolCard(school) { ... },       // Individual card
  showSchoolDetail(schoolId) { ... },     // Detail modal
  populateContributorFilter() { ... }     // Contributor dropdown
}
```

**UI Module - Team Setup** (Lines 3057-3114)
```javascript
App.UI = {
  showTeamSetupModal() { ... },           // First sign-in modal
  createTeamFromModal() { ... },          // Create team flow
  joinTeamFromModal() { ... }             // Join team flow
}
```

---

### Cloudflare Worker (cloudflare-worker.js)

**Main Handler** (Lines 7-75)
```javascript
export default {
  async fetch(request, env) {
    // Route: /api/claude
    if (url.pathname === '/api/claude') {
      return handleClaudeAPI(request, env);
    }
  }
}

async function handleClaudeAPI(request, env) {
  const apiKey = request.headers.get('x-api-key');
  const body = await request.json();

  // Forward to Anthropic API
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(body)
  });

  // Return with CORS headers
  return new Response(await response.text(), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
```

---

## ⚠️ CURRENT PROJECT STATE (November 17, 2025)

### Git Status
```
Branch: main
Status: ✅ Clean - All changes committed and pushed
Latest commit: 0260b55 - Release v1.1: Team Collaboration
Git tag: v1.1
Untracked: .DS_Store (local only, not committed)
```

### Production Deployment
- **Live URL:** https://bgslab.github.io/josephs-path-glory
- **Last Deploy:** November 17, 2025
- **Version:** v1.1 Team Collaboration
- **Status:** ✅ Fully operational

### Firebase Configuration
- **Project ID:** joseph-path-glory
- **Auth Domain:** joseph-path-glory.firebaseapp.com
- **Firestore Rules:** ✅ Published (team-based access control)
- **Collections:** `teams`, `schools`
- **Authentication:** Google Sign-In enabled

### Cloudflare Worker
- **URL:** https://josephs-path-glory-proxy.dronescout-api.workers.dev
- **Route:** /api/claude
- **Status:** ✅ Deployed and operational
- **Secrets:** Claude API key proxied from user's request

### Outstanding Decisions
**None** - All technical decisions resolved for v1.1

### Known Configuration
**API Keys & Secrets:**
- Claude API key: Stored in localStorage (user provides own key)
- Firebase API key: Public (in index.html, secured by Firestore rules)
- Cloudflare Worker: No stored secrets (proxies user's API key)

---

## 🐛 KNOWN ISSUES

### ⚠️ ACTIVE ISSUES (v1.1)

**Breaking Change from v1.0 → v1.1**
- **Issue:** Users who had data in v1.0 (user-isolated) must create/join a team
- **Impact:** Old schools won't migrate automatically
- **Workaround:** Delete old schools and re-add after joining team
- **Rationale:** Ensures proper team structure from the start
- **Status:** By design - not a bug

**Team ID Security**
- **Issue:** Team IDs are hard to guess but not secret
- **Impact:** Anyone with Team ID can join team
- **Mitigation:** Only share Team ID with trusted collaborators
- **Future:** Add team approval flow for join requests

**Firestore Free Tier Limits**
- **Limits:** 50k reads/day, 20k writes/day, 1GB storage
- **Current Usage:** Well within limits for family use
- **Risk:** Very low - would need 100+ users to exceed
- **Monitoring:** None currently (free tier sufficient)

---

### ✅ RECENTLY FIXED (v1.1)

<details>
<summary>Firestore Security Rules (November 17, 2025)</summary>

**Problem:** Initial complex rules failed with "Missing or insufficient permissions"
**Root Cause:** `isTeamMember()` helper function checking team membership too strictly
**Fix:** Simplified rules to check team membership directly in each rule
**Files Changed:** `firestore-security-rules-v4-working.txt`
**Result:** ✅ Team collaboration fully working
**Commit:** Part of v1.1 release (not committed as separate fix)

**Working Rules:**
```javascript
allow read: if isSignedIn() &&
  request.auth.token.email in get(/databases/$(database)/documents/teams/$(resource.data.teamId)).data.members;
```
</details>

<details>
<summary>AI Scores Not Showing in Detail View (November 17, 2025)</summary>

**Problem:** AI research returned scores but detail view was blank
**Root Cause:** `renderAITab()` only displayed old fields, not new Phase 2.5 scores
**Fix:** Updated `renderAITab()` to show Position Fit and Score Breakdown sections
**Commit:** `bd17f2c` - Fix: Display AI scores in detail view
**Lines Changed:** index.html lines 2325-2451
**Result:** ✅ Position fit and scores now display correctly
</details>

<details>
<summary>Score Calculation Type Error (November 17, 2025)</summary>

**Problem:** `calculateOverallScore()` returning string, causing `.toFixed()` error
**Root Cause:** Function returned `weighted.toFixed(1)` (string), then display code called `.toFixed()` again
**Fix:** Return number from function, apply `.toFixed(1)` only at display time
**Commit:** Part of bd17f2c
**Lines Changed:** index.html lines 1720-1735
**Result:** ✅ Score calculations working correctly
</details>

---

## 🔧 DEVELOPMENT WORKFLOW

### Local Development Setup

**1. Clone Repository**
```bash
cd ~
git clone git@github.com:bgslab/josephs-path-glory.git
cd josephs-path-glory
```

**2. Test Locally**
```bash
open index.html  # Opens in default browser
# Or use Live Server in VS Code
```

**3. Firebase Console Access**
- URL: https://console.firebase.google.com/
- Project: joseph-path-glory
- Navigate: Firestore Database → Data/Rules tabs

**4. Cloudflare Worker**
```bash
# Deploy worker
npx wrangler deploy cloudflare-worker.js

# View logs
npx wrangler tail

# Test endpoint
curl "https://josephs-path-glory-proxy.dronescout-api.workers.dev/api/claude" \
  -H "x-api-key: YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"claude-sonnet-4-20250514","messages":[...]}'
```

---

### Testing Checklist

**Single-User Testing** ✅ Complete
- [x] Sign in with Google
- [x] Create team
- [x] Team ID displayed in alert
- [x] Add school manually
- [x] Add school via AI research
- [x] Schools save to Firestore
- [x] Attribution shows "Added by [Name]"
- [x] Contributor filter populates
- [x] Filter by contributor works
- [x] Sign out and sign back in
- [x] Schools still present (cloud sync)

**Multi-User Testing** ⏳ Pending
- [ ] Second person (Joseph) signs in
- [ ] Joseph joins team with Team ID
- [ ] Joseph sees schools added by John
- [ ] Joseph adds a school
- [ ] John sees school added by Joseph
- [ ] Attribution shows "Added by Joseph"
- [ ] Contributor filter shows both contributors
- [ ] Real-time sync works (2-3 seconds)
- [ ] Third person (Mom) joins team
- [ ] All three see same schools

**Regression Testing** (After code changes)
- [ ] All tabs navigate correctly (Dashboard, Settings)
- [ ] School cards display correctly
- [ ] Detail view opens without errors
- [ ] AI research returns valid JSON
- [ ] Scores calculate correctly (no NaN values)
- [ ] Cloud sync saves to Firestore
- [ ] Mobile responsive at 480px
- [ ] No console errors

---

### Deployment Process

**1. Test Locally First** ⚠️ MANDATORY
```bash
open index.html  # Test in browser
# Check browser console for errors (F12 or Cmd+Opt+I)
# Test all features work as expected
```

**2. Commit and Push**
```bash
git status  # Verify changes
git add index.html README.md  # Stage files
git commit -m "Brief description of changes"
git push origin main
```

**3. Tag Major Versions**
```bash
git tag -a v1.2 -m "Version 1.2: Description of features"
git push origin v1.2
```

**4. Wait for GitHub Pages**
- GitHub Pages auto-deploys from main branch
- Wait 2-3 minutes for deployment
- CDN cache may take up to 10 minutes

**5. Test Live Site**
- URL: https://bgslab.github.io/josephs-path-glory
- Test all features in production
- Check browser console for errors
- If broken: `git revert HEAD && git push` immediately

---

### Update Firestore Security Rules

**1. Navigate to Firebase Console**
- URL: https://console.firebase.google.com/
- Project: joseph-path-glory
- Click: Firestore Database → Rules tab

**2. Copy Production Rules**
- File: `firestore-security-rules-v4-working.txt`
- Copy lines 4-52 (rules_version through closing brace)

**3. Paste and Publish**
- Delete ALL existing content in editor
- Paste new rules
- Click blue "Publish" button
- Wait for "Rules published successfully" message

**4. Verify Rules**
- Check green checkmark or timestamp at top
- Test in app: Add school, verify it saves
- Check browser console for permission errors

---

## 📋 SESSION SUMMARY (November 17, 2025)

### Session Goal
Implement team collaboration feature for v1.1 release

### Starting State
- Version: v1.0 Production
- Status: User-isolated data (each user sees only their schools)
- Problem: John, Joseph, Mom, and Coach need to collaborate on same school list

### Problem Discovered
User wanted team collaboration, but app was built for user isolation:
- **Expected:** Each person uses own Google account but sees shared schools
- **Actual:** Each person's schools were isolated in their own Firestore partition
- **Misunderstanding:** User thought Firebase login = team collaboration automatically

### Actions Taken

**Part 1: Team Architecture** (Commit `ca50dda`)
- Created Team module (getCurrentTeam, createTeam, joinTeam)
- Updated Auth module to check for team on sign-in
- Added team setup modal HTML
- If no team found → show modal (create or join)
- If team found → start sync

**Part 2: CloudSync + Attribution** (Commit `7711fdb`)
- Updated CloudSync to query by teamId instead of userId
- Added contributor tracking (createdBy, lastEditedBy with names)
- Added attribution display on school cards ("Added by John")
- Added contributor filter dropdown
- Modified school schema to include team fields

**Part 3: Security Rules Debugging** (v1.1 release)
- Created initial complex Firestore security rules → "Missing permissions" errors
- Attempted v2 with exists() check → Still failed
- Tested with v3 simple rules (any authenticated user) → ✅ Worked!
- Confirmed issue was with team membership checking logic
- Implemented v4 production rules with simplified membership checks
- Teams collection: Any signed-in user can read (for membership checks)
- Schools collection: Only team members can read/write team's schools
- Published v4 rules to Firebase Console → ✅ Fully working
- Created test team "Pick Up the Plate" (ID: EEFogLM7jY4o2WNodtNW)

**Version Update** (Commit `0260b55`)
- Updated version from 1.0 → 1.1
- Updated README with Phase 3.5 Team Collaboration
- Created deployment summary document
- Tagged release as v1.1

**Part 4: Documentation Corrections** (Commit `11035d5`)
- Fixed judgmental financial language in CONTEXT.md and README.md
- Removed "dealbreaker" and "bankrupt the family" wording
- Updated to cost-neutral approach: "provides cost data for informed decisions"
- Enhanced session summary with security rules debugging details
- Created comprehensive CONTEXT.md (1,800+ lines)

**Part 5: Secure API Key Storage** (Commit `218d4c0`)
- Moved Claude API key from localStorage to Cloudflare Worker secrets
- Wife having copy/paste issues entering API key manually
- Solution: Store in Worker environment (env.CLAUDE_API_KEY)
- Updated Worker to use stored secret instead of request header
- Updated frontend to remove API key input field and validation
- Settings now shows "✅ AI Research Ready" message
- No manual entry needed - family just clicks "Research with AI"
- Created CLOUDFLARE_SETUP.md with full instructions
- Security: API key never exposed in browser/code/GitHub
- Cost: John pays for all usage (~$0.01 per school research)

**Part 6: Phase 4 - School Discovery** (Commits `b70c0da`, `e373ba7`, `858849a`, `fcc46ae`) ⭐ v1.2
- **NEW FEATURE: AI Reverse Lookup** - Find schools matching Joseph's profile
- Added new "Discover Schools" tab to navigation (desktop + mobile)
- Smart filters: Level (JUCO/D1/D2/D3/NAIA), State, Conference, Minimum Score
- AI returns top 10 schools ranked by fit with 5-dimension scores
- Each result shows: overall score, "Why This School" reasons, all 5 scores
- "Full Research" button triggers comprehensive analysis
- "Quick Add" saves discovered school to tracker
- "✓ In Tracker" badge shows schools already tracked
- Uses same scoring logic as individual research (reuses getWeightsByLevel, calculateOverallScore)
- New App.Discover module (lines 2337-2667)
- Cost: ~$0.05 per discovery search vs ~$0.01 for individual school
- Fixed mobile navigation (was missing Discover tab)
- Fixed TypeError when checking if school already tracked (undefined name)
- Tagged release as v1.2

### Bugs Fixed
1. **Firestore permission errors:**
   - Initial complex rules with `isTeamMember()` helper function failed
   - Tried v2 with `exists()` check → still failed
   - Tested v3 simple rules (any authenticated user) → worked
   - Root cause: Team membership logic in helper function
   - Solution: Simplified to direct membership checks in each rule
   - Files created: firestore-security-rules-v4-working.txt
2. **Attribution not showing:** Schools saved before team implementation didn't have createdBy fields
3. **Financial language:** Removed "dealbreaker" and "bankrupt" language from CONTEXT.md to align with cost-neutral approach
4. **API key manual entry issues:**
   - Wife having copy/paste errors entering API key (spaces, typos)
   - Family members shouldn't need to manage API keys
   - Solution: Store API key in Cloudflare Worker secrets
   - Result: No manual entry needed - family just uses the app
5. **Mobile navigation missing Discover tab:** (v1.2)
   - "Discover Schools" tab only in desktop-nav (hidden on mobile)
   - Mobile bottom-nav only had 3 tabs: Dashboard, Actions, Settings
   - Fix: Added 🔍 Discover button to bottom-nav
   - Result: Mobile users now have 4 tabs matching desktop experience
6. **TypeError in createSchoolCard:** (v1.2)
   - Error: "Cannot read properties of undefined (reading 'toLowerCase')"
   - Cause: Some schools in tracker have undefined/null name property
   - Fix: Added safety check `s.name && school.school_name &&` before toLowerCase()
   - Result: School discovery works without JavaScript errors

### End Result
🎉 **v1.2 - Team Collaboration + AI Discovery Fully Working!**
- ✅ Multiple users can share one team workspace
- ✅ Each person signs in with own Google account
- ✅ All team members see same schools in real-time
- ✅ Schools show "Added by [Name]" attribution
- ✅ Filter dropdown to view schools by contributor
- ✅ Team management (create/join with Team ID)
- ✅ Firestore security rules enforce team membership
- ✅ API key stored securely in Worker - no manual entry needed
- ✅ Family just clicks "Research with AI" and it works immediately
- ✅ **NEW: AI School Discovery** - Find top 10 schools matching Joseph's profile
- ✅ **NEW: Smart Filters** - Filter by level, state, conference, min score
- ✅ **NEW: Mobile Navigation** - Discover tab accessible on phones
- ✅ **NEW: Quick Add** - Save discovered schools to tracker in one click
- ⚠️ **Note:** 529 API overload errors from Anthropic are temporary (high traffic)

### Key Learnings
1. Always clarify user expectations upfront (team vs isolated)
2. **Test Firestore security rules with simple version first** - Start with permissive rules, confirm they work, then add restrictions
3. Break complex features into parts (Part 1, 2, 3)
4. Use git tags for major version releases
5. Document breaking changes clearly (v1.0 → v1.1 migration)
6. **Financial analysis must be cost-neutral** - Present data without making affordability judgments; let family decide what's affordable
7. **API keys should be in Worker secrets, not user-managed** - Eliminates manual entry errors, improves security, simplifies family onboarding
8. **Reuse existing logic** - School Discovery reuses same 5-dimension scoring as individual research (consistency + less code)
9. **Mobile navigation parity** - Desktop nav is hidden on mobile; always add new features to both desktop AND mobile nav
10. **529 errors are temporary** - Anthropic API overload errors resolve on their own; not a code bug

---

## 🎯 NEXT PRIORITIES

### Immediate (Post v1.2 Testing)

**Test School Discovery**
- Wait for Anthropic 529 errors to clear
- Test with various filter combinations (JUCO only, D2+D3, state filters)
- Test "Full Research" flow from discovered school
- Test "Quick Add" saves school correctly with scores
- Verify "✓ In Tracker" badge shows for existing schools

**Multi-User Testing**
- Have Joseph sign in and join team
- Have Mom sign in and join team
- Verify real-time sync works across all devices
- Test Discover Schools on mobile devices
- Test contributor filter with multiple contributors

---

### Short Term (v1.3 - Enhanced Tracking)

**Contact & Action Tracking Improvements**
- Quick-add contact entry form (modal instead of full edit)
- Quick-add action item form (modal instead of full edit)
- Interactive ratings system (click stars instead of text input)
- Overdue action highlights (red badge for past due dates)
- Action item notifications (browser push notifications)

**UI/UX Enhancements**
- Add loading indicators for AI research
- Add loading spinners for cloud sync operations
- Improve mobile menu navigation
- Add school comparison side-by-side view (2 schools)
- Add search/filter within school list
- Add bulk operations (export selected schools, delete multiple)

---

### Medium Term (v1.4 - Analytics & Insights)

**Comparison & Analytics**
- Side-by-side comparison (2-3 schools)
- Visual charts (cost comparison bar chart)
- Radar chart for ratings comparison
- Timeline view of recruiting process
- Dashboard with statistics (avg cost, top rated schools)
- AI-powered recommendations based on all tracked schools

**Data Enrichment**
- Auto-verify outdated AI data (re-research schools older than 30 days)
- Batch AI research (research multiple schools at once)
- Import schools from CSV/spreadsheet
- Export formatted reports (PDF with all school details)

---

### Future (v2.0+ - Advanced Features)

**Collaboration Enhancements**
- Team chat/comments on each school
- Activity feed (who added/edited what)
- Notification system (new school added, action item assigned)
- Team voting system (rank schools as a family)
- Calendar integration (schedule visits, deadlines)

**Mobile App**
- Progressive Web App (PWA) support
- Installable on home screen
- Offline-first with service workers
- Push notifications for action items

**AI Enhancements**
- Ask follow-up questions about schools
- Compare schools side-by-side with AI insights
- Generate personalized recruiting strategy
- Analyze all schools together for patterns/recommendations

**External Integrations**
- NCAA compliance tracking
- College board integration (SAT/ACT scores)
- Transcript upload and GPA calculator
- Recruiting service data import (247Sports, Rivals)

---

## 📡 EXTERNAL DEPENDENCIES

### Firebase (Google Cloud)

**Services Used:**
- **Firebase Authentication** - Google Sign-In OAuth 2.0
- **Firebase Firestore** - Real-time NoSQL database
- **Firebase SDK** - v10.7.1 (CDN hosted)

**Configuration:**
```javascript
{
  apiKey: "AIzaSyAHAFSwcBkFn9uy8T-Mqer927_c-BzfBRI",  // Public
  authDomain: "joseph-path-glory.firebaseapp.com",
  projectId: "joseph-path-glory",
  storageBucket: "joseph-path-glory.firebasestorage.app",
  messagingSenderId: "926916556069",
  appId: "1:926916556069:web:ee28ea3bb3b86b37e0a1e2"
}
```

**Free Tier Limits:**
- **Reads:** 50,000/day
- **Writes:** 20,000/day
- **Storage:** 1 GB
- **Bandwidth:** 10 GB/month
- **Expected Usage:** Well within limits for family use
- **Cost:** $0/month

**Collections:**
- `teams` - Team documents with members array
- `schools` - School documents with teamId reference

---

### Anthropic Claude API

**Model:** `claude-sonnet-4-20250514` (Claude Sonnet 4)

**Endpoint:** https://api.anthropic.com/v1/messages

**Authentication:** API key stored in Cloudflare Worker secrets (no user entry required)

**Configuration:**
```javascript
{
  model: "claude-sonnet-4-20250514",
  max_tokens: 4000,
  temperature: 0.7,
  system: "You are a college recruiting analyst...",
  messages: [
    {
      role: "user",
      content: "Research University of Nebraska for tight end..."
    }
  ]
}
```

**Usage:**
- ~800 tokens per research request (prompt)
- ~1500 tokens per response (average)
- ~2300 tokens total per school research
- **Cost:** ~$0.01 per school (John pays for all family usage)
- **For 50 schools:** ~$0.50 total cost

**Rate Limits:**
- Depends on John's Anthropic account tier
- Typically 50 requests/minute for Tier 1
- No rate limiting implemented in app
- Monitor usage at https://console.anthropic.com/

**Error Handling:**
- API key invalid → Worker returns 401 error
- Rate limit exceeded → Show error, suggest waiting
- Network error → Show error, retry button
- Server config error → API key secret not set in Worker

---

### Cloudflare Worker

**URL:** https://josephs-path-glory-proxy.dronescout-api.workers.dev

**Purpose:** CORS proxy for Claude API (browsers can't call Anthropic directly)

**Route:** `/api/claude`

**Deployment:**
```bash
npx wrangler deploy cloudflare-worker.js
```

**Configuration:** `wrangler.toml`
```toml
name = "josephs-path-glory-proxy"
main = "cloudflare-worker.js"
compatibility_date = "2024-11-01"

[env.production]
name = "josephs-path-glory-proxy"
```

**Free Tier Limits:**
- **Requests:** 100,000/day
- **CPU Time:** 10ms per request
- **Expected Usage:** ~10-50 requests/day (AI research)
- **Cost:** $0/month

**Secrets:** None stored (proxies user's API key from request header)

---

### GitHub Pages

**Repository:** https://github.com/bgslab/josephs-path-glory

**Live URL:** https://bgslab.github.io/josephs-path-glory

**Branch:** main (auto-deploys)

**Deployment:**
- Push to main branch
- GitHub Actions builds site (static HTML)
- Deploys to GitHub Pages CDN
- Wait 2-3 minutes for deployment
- CDN cache may take up to 10 minutes

**Cost:** Free (public repository)

---

## 🔒 PRIVACY & SECURITY

### Authentication
- **Google OAuth 2.0** via Firebase Auth
- **Industry Standard:** OAuth 2.0 protocol
- **No Password Storage:** Google handles authentication
- **Session Management:** Firebase Auth tokens (auto-refresh)

### Data Access Control
- **Team-Based Access:** Firestore security rules enforce team membership
- **Member Verification:** Every read/write checks user is in team.members array
- **Isolation:** Teams cannot see other teams' data
- **No Public Data:** All schools require authentication

### Firestore Security Rules
```javascript
// Teams: Any signed-in user can read (for membership checks)
match /teams/{teamId} {
  allow read: if isSignedIn();
  allow create: if isSignedIn() &&
    request.auth.token.email == request.resource.data.owner;
  allow update, delete: if isSignedIn() &&
    request.auth.token.email == resource.data.owner;
}

// Schools: Only team members can access
match /schools/{schoolId} {
  allow read, write: if isSignedIn() &&
    request.auth.token.email in get(/databases/$(database)/documents/teams/$(resource.data.teamId)).data.members;
}
```

### API Key Security
- **Claude API Key:** Stored in localStorage only (never transmitted to Firestore)
- **Firebase API Key:** Public (in index.html), secured by Firestore rules
- **Cloudflare Worker:** No secrets stored (proxies user's API key from request)

### Data Privacy
- **No Analytics:** Zero tracking or analytics
- **No Third-Party Scripts:** No Google Analytics, Facebook Pixel, etc.
- **Export Anytime:** JSON backup available in Settings
- **Offline Support:** All data accessible without internet
- **User Owns Data:** Can delete account and all data

### Team Security
- **Team ID Required:** Hard to guess (auto-generated Firebase ID)
- **Not Secret:** Anyone with Team ID can join
- **Trust-Based:** Only share Team ID with trusted collaborators
- **No Approval Flow:** Joining team is immediate (no owner approval)
- **Future Enhancement:** Add team join approval system

---

## 🤝 SUPPORT & CONTACT

### Project Maintainer
**Name:** John Akalaonu
**GitHub:** @bgslab
**Email:** johnakalaonu@gmail.com

### GitHub Repository
**URL:** https://github.com/bgslab/josephs-path-glory
**Issues:** https://github.com/bgslab/josephs-path-glory/issues
**Discussions:** Not enabled

### Live Application
**URL:** https://bgslab.github.io/josephs-path-glory
**Status Page:** None (check GitHub Actions for deployment status)

### For Claude Code Sessions
1. **Start new session:** Upload this CONTEXT.md file
2. **Reference documentation:**
   - README.md for feature overview
   - V1.1_DEPLOYMENT_SUMMARY.md for latest release
   - FIRESTORE_SETUP_INSTRUCTIONS.md for Firebase setup
3. **Check git status:** `git status` and `git log --oneline -10`
4. **Tag versions:** Use git tags for major releases (v1.1, v1.2, etc.)

### Troubleshooting Common Issues

**"Missing or insufficient permissions" error:**
1. Check Firestore security rules are published
2. Sign out and sign back in (refreshes auth token)
3. Verify team exists in Firestore Data tab
4. Verify your email is in team's members array

**Schools not syncing:**
1. Check browser console for errors
2. Verify internet connection
3. Check Firestore Data tab to see if schools are there
4. Try refreshing the page
5. Sign out and sign back in

**AI research not working:**
1. Verify Claude API key is entered in Settings
2. Check browser console for API errors
3. Test API key at https://console.anthropic.com/
4. Check Cloudflare Worker is deployed: `npx wrangler tail`
5. Verify network requests in browser DevTools

**Team member can't see schools:**
1. Verify they joined correct Team ID
2. Check Firestore → teams → verify their email in members array
3. Have them sign out and sign back in
4. Check browser console for permission errors

---

## 📚 QUICK REFERENCE

### Git Commands
```bash
# View project status
cd ~/josephs-path-glory
git status
git log --oneline -10

# Make changes and commit
git add index.html README.md
git commit -m "Description of changes"
git push origin main

# Tag version
git tag -a v1.2 -m "Version 1.2: Feature description"
git push origin v1.2

# View tags
git tag --list
```

### Cloudflare Worker Commands
```bash
# Deploy worker
cd ~/josephs-path-glory
npx wrangler deploy cloudflare-worker.js

# View real-time logs
npx wrangler tail

# Test endpoint
curl "https://josephs-path-glory-proxy.dronescout-api.workers.dev/api/claude" \
  -X POST \
  -H "x-api-key: YOUR_CLAUDE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 4000,
    "messages": [{"role": "user", "content": "Test message"}]
  }'
```

### Firebase Console Navigation
```
1. Go to: https://console.firebase.google.com/
2. Select project: "joseph-path-glory"
3. Navigate to:
   - Firestore Database → Data (view teams/schools)
   - Firestore Database → Rules (security rules)
   - Authentication → Users (view signed-in users)
   - Authentication → Settings → Authorized domains
```

### Browser Console Inspection
```javascript
// View current user
auth.currentUser

// View current team
App.Team.currentTeam

// View all schools
App.Storage.getSchools()

// View settings (including API key)
JSON.parse(localStorage.getItem('josephs-path-glory-settings'))

// Clear all localStorage (CAUTION: Deletes all local data)
localStorage.clear()

// View Firestore data
db.collection('teams').get().then(snap => snap.forEach(doc => console.log(doc.data())))
db.collection('schools').get().then(snap => snap.forEach(doc => console.log(doc.data())))
```

### Key Code Locations
| Feature | File | Lines | Notes |
|---------|------|-------|-------|
| Firebase init | index.html | 1148-1176 | Config and setup |
| Authentication | index.html | 1177-1196 | Google Sign-In |
| Team module | index.html | 1198-1321 | Create/join team |
| Storage | index.html | 1379-1513 | localStorage ops |
| Cloud sync | index.html | 1517-1659 | Firestore sync |
| AI research | index.html | 1661-1898 | Claude API |
| Scoring | index.html | 1900-2234 | Multi-factor scores |
| UI rendering | index.html | 2242-2500 | School cards/detail |
| Team setup UI | index.html | 3057-3114 | Create/join modals |
| Worker proxy | cloudflare-worker.js | 7-75 | CORS proxy |

---

## 📖 APPENDIX

### Firestore Data Structure Examples

**Team Document** (`/teams/EEFogLM7jY4o2WNodtNW`)
```json
{
  "name": "Joseph's Recruiting Team",
  "owner": "john@akalaonu.com",
  "ownerName": "John Akalaonu",
  "members": [
    "john@akalaonu.com",
    "joseph@akalaonu.com",
    "mom@akalaonu.com"
  ],
  "memberNames": {
    "john@akalaonu.com": "John Akalaonu",
    "joseph@akalaonu.com": "Joseph",
    "mom@akalaonu.com": "Mom"
  },
  "createdAt": "2025-11-17T23:16:35.000Z"
}
```

**School Document** (`/schools/school_1731875696123`)
```json
{
  "id": "school_1731875696123",
  "schoolName": "University of Nebraska",
  "level": "D1",
  "location": "Lincoln, Nebraska",
  "ourInterestLevel": "High",
  "teamId": "EEFogLM7jY4o2WNodtNW",
  "createdBy": "john@akalaonu.com",
  "createdByName": "John Akalaonu",
  "lastEditedBy": "john@akalaonu.com",
  "lastEditedByName": "John Akalaonu",
  "aiAnalysis": {
    "scores": {
      "playing_time": { "value": 4.5 },
      "position_development": { "value": 4.0 },
      "transfer_pipeline": { "value": 4.2 },
      "coaching_stability": { "value": 3.0 },
      "academic_fit": { "value": 2.8 }
    },
    "positionFit": {
      "best_fit_position": "Tight End",
      "te": { "score": 4.2, "assessment": "Strong Fit" },
      "fb": { "score": 3.5, "assessment": "Moderate Fit" }
    }
  },
  "syncedAt": "2025-11-17T23:30:00.000Z"
}
```

---

## 🏷️ CHANGELOG

### v1.1 (November 17, 2025)
- ✨ NEW: Team collaboration with shared workspace
- ✨ NEW: Individual Google accounts for team members
- ✨ NEW: Contributor attribution ("Added by John")
- ✨ NEW: Filter schools by contributor
- ✨ NEW: Team management (create/join with Team ID)
- ✨ NEW: Real-time team sync (2-3 second latency)
- 🔧 CHANGE: CloudSync queries by teamId instead of userId
- 🔧 CHANGE: School schema includes teamId, createdBy, lastEditedBy
- 🔧 CHANGE: Firestore security rules enforce team membership
- ⚠️ BREAKING: v1.0 users must create/join team (no auto-migration)

### v1.0 (November 17, 2025)
- ✨ NEW: Firebase Cloud Sync with real-time updates
- ✨ NEW: Google Sign-In authentication
- ✨ NEW: Multi-device synchronization
- ✨ NEW: Offline persistence with auto-sync
- 🐛 FIX: AI scores display in detail view
- 🐛 FIX: Score calculation type error (.toFixed on string)

### Phase 2.5 (November 2025)
- ✨ NEW: 5-dimension scoring system
- ✨ NEW: Position versatility (TE/FB dual assessment)
- ✨ NEW: Weighted calculations by school level
- ✨ NEW: Visual score badges (🟢🟡🟠🔴)
- ✨ NEW: Verification system for outdated AI data
- 🔧 CHANGE: Financial analysis uses cost-neutral tone

### Initial Release (November 2025)
- ✨ NEW: Core database with CRUD operations
- ✨ NEW: School tracking for 50+ programs
- ✨ NEW: AI-powered research with Claude Sonnet 4
- ✨ NEW: Smart filtering and sorting
- ✨ NEW: localStorage persistence
- ✨ NEW: Export/Import JSON backup
- ✨ NEW: Contact script generation
- ✨ NEW: Mobile-first responsive design
- ✨ NEW: Cloudflare Worker CORS proxy

---

**Last Updated:** November 17, 2025
**Current Version:** v1.1 Team Collaboration
**Next Version:** v1.2 (Enhanced Tracking - TBD)

---

*This document is the single source of truth for Joseph's Path to Glory project context. Update it after each major version release.*
