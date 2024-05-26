import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

export const register = async (req, res) => {
  try {
    // Check existing user
    // console.log("hello")
    // console.log(req.body)
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });

    if (existingUser) {
      return res.status(409).json("User already exists!!!");
    }

    // Encrypt the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      img: req.body.img,
    });

    await newUser.save();
    res.status(200).json("User has been created.");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  try {
    // Check user
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send("User not found!!!!");
    }

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    // Password is correct
    const token = jwt.sign({ id: user._id }, "jwtkey");

    const { password, ...other } = user._doc; // Remove password from user data

    res
      .cookie("access_token", token, {
        httpOnly: true, // Script on the client side can't access the cookie except the API call we are doing
      })
      .status(200)
      .json(other);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
