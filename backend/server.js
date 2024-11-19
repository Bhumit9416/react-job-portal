import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import app from './app.js';

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary with the environment variables
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  // use the name you defined in .env
  api_key: process.env.CLOUDINARY_API_KEY,       // use the name you defined in .env
  api_secret: process.env.CLOUDINARY_API_SECRET, // use the name you defined in .env
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
