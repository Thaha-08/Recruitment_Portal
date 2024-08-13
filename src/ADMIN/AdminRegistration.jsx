import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminRegistration.css"; // Import the CSS file
import axios from "axios";

function AdminRegistration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = "Username is required";
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true); // Show loader

    try {
      const response = await axios.post(
        "http://localhost:8080/index/admin/register",
        { username, password, email, type },
      );

      console.log(response);
      if (response.data === "Already present") {
        alert("Username Already exists..");
      } else if (response.data === "success") {
        alert("Registered Successfully...");
      }
    } catch (error) {
      console.log("maplaa....", error);
      // Optionally handle errors here
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="admin-registration-page">
      {loading && (
        <div className="loader-container">
          <img
            src="https://th.bing.com/th/id/R.fa579b9ad01819c3d91096227f34a38e?rik=lfJZGcCajs4BAA&riu=http%3a%2f%2fwww.m777cash.com%2fweb%2fassets%2fm777%2fimages%2fcommon%2fpreload-indicator.gif&ehk=txshejwn4SegePvnugw%2fB%2f%2b7m78ZUn1gb9qRWa7EYu0%3d&risl=&pid=ImgRaw&r=0"
            alt="Loading..."
            className="loader"
          />
        </div>
      )}

      <div className="admin-registration-background">
        <div className="registration-form">
          <h2 className="registration-title">Register</h2>
          <form onSubmit={handleSubmit} className="form-registration">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="input-field"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="type">Type:</label>
              <select
                id="type"
                className="input-field"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="">Choose</option>
                <option value="TL">TL</option>
                <option value="PM">PM</option>
                <option value="HR">HR</option>
                <option value="Interviewer">Interviewer</option>
              </select>
            </div>
            <button type="submit" className="submit-button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminRegistration;
