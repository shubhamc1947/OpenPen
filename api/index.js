import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from "./routes/auth.Routes.js";
import postsRoutes from "./routes/posts.Routes.js";
import fs from 'fs';
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// middlewares

// CORS configuration
// const corsOptions = {
//   origin: process.env.FRONTEND_URL, // Replace with your frontend URL
//   credentials: true, // This allows cookies to be sent and received
// };


// app.use(cors(corsOptions));

app.use(cors({
  origin: 'http://localhost:5173', // Update with your frontend URL
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

// Upload image function for blog post
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "../client/public/post";
    fs.mkdirSync(uploadPath, { recursive: true }); // Create folder if it doesn't exist
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename); // returning file name for storing in db
});

// Upload image function for user's profile pic
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "../client/public/profile";
    fs.mkdirSync(uploadPath, { recursive: true }); // Create folder if it doesn't exist
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload2 = multer({ storage: storage2 });

app.post("/api/profile", upload2.single("profile"), function (req, res) {
  const file = req.file;
  res.status(200).json({ filename: file.filename }); // returning file name for storing in db
});

// Routes
app.use("/api/", authRoutes);
app.use("/api/posts", postsRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
