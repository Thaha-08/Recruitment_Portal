import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PMLogin.css"; // Import the CSS file
import { useAuth } from "../COMPONENTS/AuthContext";

function PMLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const type = "PM";
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/index/PMlogin", {
        username,
        password,
        type,
      });

      if (response.data === "success") {
        login();
        console.log("logged in successfully in pm");
        navigate("/PMLogin/PMviewjobDesc");
      }
      if (response.data === "failed") {
        alert("Invalid username / Password");
        clearform();
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const clearform = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="pm-login-page">
      <div className="pm-login-content">
        <h2 className="pm-login-title">Project Manager Login</h2>
        <form onSubmit={handleSubmit} className="pm-login-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="pm-login-submit-button">
            Login
          </button>
        </form>
        <div className="TL-Registration-notice">
          <a href="#" id="forgot-password">
            Forgot Your Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default PMLogin;
