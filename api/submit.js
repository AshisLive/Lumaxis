export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const APP_ID = process.env.VITE_APPSHEET_APP_ID;
  const ACCESS_KEY = process.env.VITE_APPSHEET_ACCESS_KEY;
  const TABLE_NAME = process.env.VITE_APPSHEET_TABLE_NAME || 'Lumaxis data collection';

  const appsheetUrl = `https://api.appsheet.com/api/v2/apps/${APP_ID}/tables/${encodeURIComponent(TABLE_NAME)}/Action`;

  try {
    const response = await fetch(appsheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ApplicationAccessKey': ACCESS_KEY,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json().catch(() => ({}));
    return res.status(response.status).json(data);
  } catch (err) {
    console.error('AppSheet proxy error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
