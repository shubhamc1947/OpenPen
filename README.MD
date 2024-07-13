
# OpenPen

Watch Live https://drive.google.com/file/d/1OVxzKzSga1sOoayAjTCeaYDEVMI3Rtct/view?usp=sharing


This project is a blog post application built using React, Express, and MongoDB. The application allows users to view blog posts, edit and delete their own posts, and provides recommendations for other posts that the user might like. The application also includes a loading skeleton for improved user experience while data is being fetched.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Features

- User authentication and authorization
- CRUD operations on blog posts
- Loading skeleton for better user experience
- Responsive design
- Real-time updates with WebSockets (planned feature)

## Technologies Used

- Frontend: React, React Router, Axios, React Toastify, Moment.js, DOMPurify
- Backend: Express, MongoDB, Mongoose
- Styling: SCSS, React Loading Skeleton

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhamc1947/OpenPen.git
   cd blogpost-app
   ```

2. Install dependencies for the client and server:

   ```bash
   # For client
   cd OPENPEN
   npm install

   # For server
   cd OPENPEN/api
   npm install
   ```

3. Create a `.env` file in the server directory with the following environment variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:

   ```bash
   # For client
   cd OPENPEN
   npm run dev

   # For server
   cd /OPENPEN/api
   npm start
   ```

5. The application should now be running at `http://localhost:5173` for the client and `http://localhost:8800` for the server.

## Usage

- Navigate to `http://localhost:5173` to view the application.
- Register or log in to create, edit, or delete blog posts.
- View blog posts and recommended posts based on categories.

## License

This project is licensed under the MIT License.
