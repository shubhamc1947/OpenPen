import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from "./routes/auth.Routes.js";
import postsRoutes from "./routes/posts.Routes.js";
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid'; // For generating unique filenames

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL, // Update with your frontend URL
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Function to generate unique filename
const generateUniqueFilename = (file) => {
  const uniquePrefix = `${Date.now()}-${uuidv4()}`; // Prefix with timestamp and UUID
  return `${uniquePrefix}-${file.originalname}`;
};

// Upload image function for blog post using Cloudinary
const upload = multer({ dest: 'tmp/' }); // Use tmp directory for multer

app.post("/api/upload", upload.single("file"), async function (req, res) {
  try {
    const uniqueFilename = generateUniqueFilename(req.file);
    const result = await cloudinary.uploader.upload(req.file.path, { public_id: `openpen/blog/${uniqueFilename}` });
    fs.unlinkSync(req.file.path); // Remove temporary file
    res.status(200).json({ url: result.secure_url }); // Return Cloudinary URL
  } catch (err) {
    console.error('Error uploading to Cloudinary:', err);
    res.status(500).json({ error: 'Could not upload image to Cloudinary' });
  }
});

// Upload image function for user's profile pic using Cloudinary
const uploadProfile = multer({ dest: 'tmp/' });

app.post("/api/profile", uploadProfile.single("profile"), async function (req, res) {
  try {
    const uniqueFilename = generateUniqueFilename(req.file);
    const result = await cloudinary.uploader.upload(req.file.path, { public_id: `openpen/profile/${uniqueFilename}` });
    fs.unlinkSync(req.file.path); // Remove temporary file
    res.status(200).json({ url: result.secure_url }); // Return Cloudinary URL
  } catch (err) {
    console.error('Error uploading profile image to Cloudinary:', err);
    res.status(500).json({ error: 'Could not upload profile image to Cloudinary' });
  }
});

// Routes
app.use("/api/", authRoutes);
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
