import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import "./HRLogin.css"; // Import the CSS file
import { useAuth } from "../COMPONENTS/AuthContext";

function HRLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const type = "HR";
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/index/HRlogin", {
        username,
        password,
        type,
      });

      if (response.data === "success") {
        login();
        console.log("logged in successfully in hr");
        navigate("/HRLogin/viewRequests");
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
    <div className="hr-login-page">
      <Header />
      <div className="hr-login-content">
        <h2 className="hr-login-title">Human Resource Manager</h2>
        <form onSubmit={handleSubmit} className="hr-login-form">
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="hr-login-submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default HRLogin;
