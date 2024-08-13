import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../COMPONENTS/AuthContext";
import "./TLLoginPage.css"; // Import the CSS file

function TLLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/index/TLlogin", {
        username,
        password,
        type: "TL",
      });

      if (response.data === "success") {
        login();
        navigate("/TLLogin/newJobDescription");
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
    <div className="TL-Login-page">
      <div className="TL-Login-background">
        <div className="TL-Login-content">
          <h2 className="TL-Login-title">Team Leader Login</h2>
          <form onSubmit={handleSubmit} className="TL-Login-form">
            <div className="TL-Form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="TL-Input-field"
              />
            </div>
            <div className="TL-Form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="TL-Input-field"
              />
            </div>
            <button type="submit" className="TL-Login-button">
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
    </div>
  );
}

export default TLLoginPage;
