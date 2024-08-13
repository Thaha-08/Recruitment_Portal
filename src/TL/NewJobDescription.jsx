import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewJobDescription.css"; // Import the CSS file

function NewJobDescription() {
  const [jobRole, setRole] = useState("");
  const [experience, setExperience] = useState(0);
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    navigate("/TLLogin/viewJobDescription");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(jobRole, experience, location);

    try {
      const response = await axios.post(
        "http://localhost:8080/index/TLstorejobDescription",
        {
          jobRole,
          experience,
          location,
        },
      );

      alert("Successfully Registered...");
      clearform();
    } catch (error) {
      console.log("New desc page error..", error);
    }
  };

  const clearform = () => {
    setRole("");
    setExperience(0);
    setLocation("");
  };

  return (
    <div className="new-job-description-page">
      <div className="new-job-description-content">
        <h1 className="new-job-description-title">New Job Description</h1>
        <form onSubmit={handleSubmit} className="new-job-description-form">
          <div>
            <label htmlFor="jobRole">Role:</label>
            <input
              type="text"
              id="jobRole"
              value={jobRole}
              onChange={(e) => setRole(e.target.value)}
              required
              placeholder="Eg:java"
            />
          </div>
          <div>
            <label htmlFor="experience">Experience:</label>
            <input
              type="number"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              placeholder="Eg:3"
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="Eg:chennai"
            />
          </div>
          <div className="new-job-description-buttons">
            <button type="submit" className="new-job-description-submit-button">
              Submit
            </button>
            <button
              type="button"
              className="new-job-description-view-button"
              onClick={handleEdit}
            >
              View
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewJobDescription;
