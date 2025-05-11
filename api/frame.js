export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Farcaster Mini App</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://your-vercel-url.vercel.app/image.png" />
        <meta property="fc:frame:button:1" content="Click Me!" />
        <meta property="fc:frame:post_url" content="https://your-vercel-url.vercel.app/api/action" />
      </head>
      <body></body>
    </html>
  `);
}
