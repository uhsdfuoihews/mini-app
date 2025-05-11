export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="You Clicked the Button!" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://res.cloudinary.com/dsjgj0vma/image/upload/v1740849866/good_morning_rjbsdo.png" />
        
        <!-- Button setup for Go Back action -->
        <meta property="fc:frame:button:1" content="Go Back" />
        <meta property="fc:frame:button:1:action" content="launch_frame" />
        <meta property="fc:frame:button:1:url" content="https://mini-app-mauve-iota.vercel.app/api/frame" />

        <!-- Ensure post_url is correct -->
        <meta property="fc:frame:post_url" content="https://mini-app-mauve-iota.vercel.app/api/action" />
      </head>
      <body>
        <h1>You Clicked the Button!</h1>
        <p>The action has been processed. You can go back to the frame by clicking the button below.</p>
      </body>
    </html>
  `);
}
