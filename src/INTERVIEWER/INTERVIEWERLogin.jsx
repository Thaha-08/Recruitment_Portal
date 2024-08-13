import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../COMPONENTS/Header";
import "./INTERVIEWERLogin.css"; // Import the unique CSS file
import { useAuth } from "../COMPONENTS/AuthContext";

function INTERVIEWERLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const type = "Interviewer";
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
        console.log("logged in successfully as interviewer");
        navigate("/IRLogin/interviewList", { state: { username } });
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
    <div className="interviewer-login-page">
      <Header />
      <div className="interviewer-login-content">
        <h2 className="interviewer-login-title">Interviewer Login</h2>
        <form onSubmit={handleSubmit} className="interviewer-login-form">
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
          <button type="submit" className="interviewer-login-submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default INTERVIEWERLogin;
