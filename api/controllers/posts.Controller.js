import jwt from 'jsonwebtoken';
import Post from '../models/Post.model.js';
import User from '../models/User.model.js';

// Get all posts, optionally filtering by category
export const getPosts = async (req, res) => {
  try {
    const query = req.query.cat ? { cat: req.query.cat } : {};

    const posts = await Post.find(query)
      .populate('uid', 'username email img') // Populate user details
      .select('_id title description img date cat uid'); // Select required fields
    const formattedPosts = posts.map(post => ({
      postId: post._id,
      title: post.title,
      description: post.description,
      postImg: post.img,
      date: post.date,
      userId: post.uid._id,
      username: post.uid.username,
      email: post.uid.email,
      userImg: post.uid.img,
      cat: post.cat
    }));
    // console.log(formattedPosts)
    res.status(200).json(formattedPosts);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send("An error occurred while fetching posts.");
  }
};

// Get a single post by ID
export const getPost = async (req, res) => {
  // console.log("hellosdfdsfsdfsf")
  try {
    const post = await Post.findById(req.params.id).populate('uid', 'username email img');
    // console.log(post)
    res.status(200).json(post);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("An error occurred while fetching the post.");
  }
};

// Add a new post
export const addPost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  try {
    const userInfo = jwt.verify(token, "jwtkey");
    const newPost = new Post({
      title: req.body.title,
      description: req.body.desc,
      img: req.body.img,
      cat: req.body.cat,
      date: req.body.date,
      uid: userInfo.id,
    });

    await newPost.save();
    res.status(200).json("Post has been created.");
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json(err);
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  try {
    const userInfo = jwt.verify(token, "jwtkey");
    const post = await Post.findOneAndDelete({ _id: req.params.id, uid: userInfo.id });

    if (!post) return res.status(403).json("You can delete only your post!");

    res.status(200).json("Post has been deleted!");
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json(err);
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  try {
    const userInfo = jwt.verify(token, "jwtkey");
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, uid: userInfo.id },
      {
        title: req.body.title,
        description: req.body.desc,
        img: req.body.img,
        cat: req.body.cat,
      },
      { new: true }
    );

    if (!post) return res.status(403).json("You can update only your post!");

    res.status(200).json("Post has been updated.");
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json(err);
  }
};
