export default async function handler(req, res) {
  // Set Content-Type to application/json for the response
  res.setHeader('Content-Type', 'application/json');

  // Response structure to return valid frame data in JSON format
  const response = {
    "version": "next", // Use the correct Farcaster frame version
    "imageUrl": "https://res.cloudinary.com/dsjgj0vma/image/upload/v1740849866/good_morning_rjbsdo.png", // Your image URL
    "button": {
      "title": "Go Back", // Button text
      "action": {
        "type": "launch_frame", // Action type to load a new frame
        "name": "Go Back Frame", // The name for the frame to launch
        "url": "https://mini-app-mauve-iota.vercel.app/api/frame" // The URL for the frame to load when the button is clicked
      }
    },
    "post_url": "https://mini-app-mauve-iota.vercel.app/api/action" // Keep the post URL if needed
  };

  // Send the JSON response
  res.status(200).json(response);
}
