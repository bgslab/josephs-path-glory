/**
 * Cloudflare Worker - Anthropic API Proxy
 * For: Joseph's Path to Glory
 * Purpose: Bypass CORS restrictions + secure API key storage for family use
 * API Key: Stored in Worker secrets (CLAUDE_API_KEY) - family doesn't need to enter it
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, anthropic-version',
          'Access-Control-Max-Age': '86400',
        }
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      // Use API key from Worker secrets (secure - never exposed to client)
      const apiKey = env.CLAUDE_API_KEY;

      if (!apiKey) {
        return new Response(JSON.stringify({
          error: 'Server configuration error: CLAUDE_API_KEY secret not set. Run: npx wrangler secret put CLAUDE_API_KEY'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // Get request body
      const body = await request.json();

      // Forward to Anthropic API with stored key
      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(body)
      });

      // Get response
      const responseData = await anthropicResponse.json();

      // Return with CORS headers
      return new Response(JSON.stringify(responseData), {
        status: anthropicResponse.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, anthropic-version',
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
};
