import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditJobDescription.css"; // Import the CSS file

function EditJobDescription() {
  const [jobRole, setRole] = useState("");
  const [experience, setExperience] = useState(0);
  const [location, setLocation] = useState("");
  const [jobId, setJobid] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/index/TLeditjobDescription",
        { jobId, jobRole, experience, location },
      );

      if (response.data === "Job Description not Found") {
        alert("No Such Id Exist...");
      } else {
        alert("Updated Successfully...");
        navigate("/TLLogin/viewJobDescription"); // Optional: navigate to another page on success
      }
    } catch (error) {
      console.log("Error updating job description:", error);
    }
  };

  return (
    <div className="edit-job-description-page">
      <div className="edit-job-description-content">
        <h1 className="edit-job-description-title">Edit Job Description</h1>
        <form onSubmit={handleSubmit} className="edit-job-description-form">
          <div>
            <label htmlFor="jobId">Job Id:</label>
            <input
              type="text"
              id="jobId"
              value={jobId}
              onChange={(e) => setJobid(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="jobRole">Role:</label>
            <input
              type="text"
              id="jobRole"
              value={jobRole}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Eg:java"
              required
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
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Eg:chennai"
              required
            />
          </div>
          <button type="submit" className="edit-job-description-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditJobDescription;
