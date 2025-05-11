export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://your-vercel-url.vercel.app/thankyou.png" />
        <meta property="fc:frame:button:1" content="Go Back" />
        <meta property="fc:frame:post_url" content="https://your-vercel-url.vercel.app/api/frame" />
      </head>
      <body></body>
    </html>
  `);
}
