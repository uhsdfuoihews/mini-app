export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Farcaster Mini App</title>
        <meta name="fc:frame" content="vNext" />
        <meta name="og:title" content="My First Farcaster Frame" />
        <meta name="fc:frame:image" content="https://res.cloudinary.com/dsjgj0vma/image/upload/v1740849866/good_morning_rjbsdo.png" />
        
        <meta name="fc:frame:button:1" content="Click Me!" />
        <meta name="fc:frame:button:1:action" content="post" />

        <meta name="fc:frame:post_url" content="https://mini-app-mauve-iota.vercel.app/api/action" />
      </head>
      <body>
        <p>Frame loaded.</p>
      </body>
    </html>
  `);
}
