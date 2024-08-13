import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css"; // Import the CSS file
import axios from "axios";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/index/adminLogin",
        {
          username,
          password,
          type: "Admin",
        },
      );

      if (response.data === "success") {
        navigate("/admin/adminRegistration");
      } else if (response.data === "failed") {
        alert("Invalid Username or Password...");
        clearform();
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const clearform = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div id="admin-login-page">
      <div className="admin-background">
        <div className="admin-login">
          <h1 className="admin-login-title">Admin Login</h1>
          <form onSubmit={handleSubmit} className="admin-form-login">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className="admin-input-email"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="admin-input-password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="admin-submit-button">
              Sign In
            </button>

            <small className="admin-notice">
              Need an Account? <a href="#">Sign Up</a>
            </small>

            <a href="#" id="admin-forgot">
              Forgot Your Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
