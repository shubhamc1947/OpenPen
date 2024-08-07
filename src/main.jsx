import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContexProvider } from "./context/authContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
);
