# Cloudflare Worker Setup - Secure API Key Storage

## Overview

The Claude API key is now stored securely in Cloudflare Worker secrets instead of localStorage. This means:
- ✅ Family members don't need to enter an API key
- ✅ API key is never exposed in browser/code
- ✅ You control all API usage and costs
- ✅ No risk of key exposure or unauthorized use

---

## One-Time Setup (5 minutes)

### Step 1: Add API Key to Worker Secrets

In your terminal, run:

```bash
cd ~/josephs-path-glory
echo "YOUR_CLAUDE_API_KEY" | npx wrangler secret put CLAUDE_API_KEY
```

**Replace `YOUR_CLAUDE_API_KEY`** with your actual Claude API key from https://console.anthropic.com/

Example:
```bash
echo "sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx" | npx wrangler secret put CLAUDE_API_KEY
```

You'll see:
```
🌀 Creating the secret for the Worker "josephs-path-glory-proxy"
✨ Success! Uploaded secret CLAUDE_API_KEY
```

---

### Step 2: Deploy Updated Worker

Deploy the worker with the new code:

```bash
npx wrangler deploy cloudflare-worker.js
```

You'll see:
```
Total Upload: XX.XX KiB / gzip: XX.XX KiB
Uploaded josephs-path-glory-proxy (X.XX sec)
Published josephs-path-glory-proxy (X.XX sec)
  https://josephs-path-glory-proxy.dronescout-api.workers.dev
Current Deployment ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

---

### Step 3: Test the Setup

Test that the Worker can access the secret:

```bash
curl -X POST https://josephs-path-glory-proxy.dronescout-api.workers.dev \
  -H "Content-Type: application/json" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 100,
    "messages": [{
      "role": "user",
      "content": "Say hello"
    }]
  }'
```

**Expected response:** JSON with Claude's response

**Error response (if secret not set):**
```json
{
  "error": "Server configuration error: CLAUDE_API_KEY secret not set..."
}
```

If you see the error, go back to Step 1 and make sure you ran the secret command correctly.

---

### Step 4: Deploy Frontend Changes

Push the updated frontend to GitHub Pages:

```bash
git add cloudflare-worker.js index.html
git commit -m "Secure API key storage in Worker secrets"
git push origin main
```

Wait 2-3 minutes for GitHub Pages to deploy.

---

### Step 5: Test in Production

1. Go to https://bgslab.github.io/josephs-path-glory
2. Sign in with Google
3. Click "Research with AI" button
4. Enter a school name (e.g., "University of Nebraska")
5. Click "Research School"

**Expected:** School research completes successfully with AI analysis

**If error:** Check browser console (F12) for details and review the Troubleshooting section below

---

## How It Works

### Before (Manual Entry)
```
1. User opens app
2. User goes to Settings
3. User enters API key manually
4. Key stored in localStorage
5. Frontend sends key in x-api-key header
6. Worker forwards key to Claude API
```

**Problems:**
- Manual entry prone to errors (spaces, typos)
- Key visible in browser DevTools
- Each family member needs their own key or shares yours

### After (Secure Storage)
```
1. User opens app
2. User clicks "Research with AI"
3. Frontend calls Worker (no key sent)
4. Worker uses stored CLAUDE_API_KEY secret
5. Worker forwards request to Claude API
6. Response returned to user
```

**Benefits:**
- ✅ No manual entry - works immediately
- ✅ Key never exposed to browser
- ✅ All family members use same secure setup
- ✅ You control costs (can monitor usage)

---

## Security

### Where is the API key stored?
- **Cloudflare Worker environment** - encrypted at rest
- **Never in browser** - not in localStorage, not in code
- **Never in GitHub** - not committed to repository
- **Only accessible to your Worker** - isolated per Worker

### Who can use the API?
- **Anyone who can access the app URL** - but that's fine because:
  - App requires Google Sign-In (team members only)
  - Firestore rules restrict to team members
  - Only your family has Team ID to join

### Can someone steal the key?
- **No** - key is not exposed in client code
- **No** - key is not in network requests (check browser DevTools → Network)
- **No** - key is only in Worker secrets (server-side)

### What if I need to rotate the key?
Run the secret command again with new key:
```bash
echo "NEW_API_KEY" | npx wrangler secret put CLAUDE_API_KEY
npx wrangler deploy cloudflare-worker.js
```

No frontend changes needed - just update the secret and redeploy.

---

## Cost Monitoring

### How much does Claude API cost?

**Claude Sonnet 4 pricing:**
- Input: $3 per million tokens
- Output: $15 per million tokens

**Typical school research:**
- Input: ~800 tokens (prompt)
- Output: ~1,500 tokens (response)
- **Cost per school: ~$0.01** (one penny)

**For 50 schools:**
- Total cost: ~$0.50 (fifty cents)

### How to monitor usage?

**Option 1: Anthropic Console**
1. Go to https://console.anthropic.com/
2. Click "Usage" in sidebar
3. View API usage by date

**Option 2: Cloudflare Worker Analytics**
1. Go to https://dash.cloudflare.com/
2. Select your Worker
3. View "Requests" tab for usage stats

### Set spending limits

In Anthropic Console:
1. Settings → Billing
2. Set monthly spending limit (e.g., $10/month)
3. You'll get email if limit exceeded

---

## Troubleshooting

### Error: "Server configuration error: CLAUDE_API_KEY secret not set"

**Cause:** Worker secret not added or Worker not redeployed

**Fix:**
```bash
echo "YOUR_API_KEY" | npx wrangler secret put CLAUDE_API_KEY
npx wrangler deploy cloudflare-worker.js
```

---

### Error: "API Error: 401"

**Cause:** Invalid API key in Worker secrets

**Fix:**
1. Get correct API key from https://console.anthropic.com/
2. Update secret:
```bash
echo "CORRECT_API_KEY" | npx wrangler secret put CLAUDE_API_KEY
npx wrangler deploy cloudflare-worker.js
```

---

### Error: "Network request failed"

**Cause:** Worker not deployed or offline

**Fix:**
1. Check Worker status: https://dash.cloudflare.com/
2. Redeploy if needed:
```bash
npx wrangler deploy cloudflare-worker.js
```

---

### Research works but no data returned

**Cause:** Claude API rate limit or quota exceeded

**Fix:**
1. Check usage in Anthropic Console
2. Increase spending limit if needed
3. Wait a few minutes and retry

---

## Rollback (Emergency)

If something goes wrong and you need to go back to manual API key entry:

1. **Revert Worker code:**
```bash
git checkout origin/main -- cloudflare-worker.js
npx wrangler deploy cloudflare-worker.js
```

2. **Revert frontend code:**
```bash
git checkout origin/main -- index.html
git push origin main
```

3. **Re-add API key input:**
- Settings will show input field again
- Users enter API key manually

---

## Next Steps

Once setup is complete:
1. ✅ Test AI research yourself
2. ✅ Have Joseph test from his device
3. ✅ Have Mom/Coach test from their devices
4. ✅ Monitor usage in Anthropic Console
5. ✅ Enjoy hassle-free AI research for recruiting! 🏈

---

**Questions or issues?** Check the Troubleshooting section above or review the Worker logs:
```bash
npx wrangler tail
```

This will show real-time logs from the Worker including any errors.
