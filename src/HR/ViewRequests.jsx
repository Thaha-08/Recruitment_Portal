import { useEffect, useState } from "react";
import HRSideBar from "./HRSideBar";
import axios from "axios";
import "./ViewRequests.css"; // Import the CSS file

function ViewRequests() {
  const [jobDetails, setJobDetails] = useState([]);
  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/PMviewRequests")
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
      });
  }, []);

  // Enhanced filtering logic
  const filteredJobDetails = jobDetails.filter((job) => {
    const searchLower = searchbar.toLowerCase();
    return (
      job.jobRole.toLowerCase().includes(searchLower) ||
      job.location.toLowerCase().includes(searchLower) ||
      (job.jobId || "").toString().includes(searchLower) ||
      (job.experience || "").toString().includes(searchLower)
    );
  });

  return (
    <div className="view-requests-page">
      <HRSideBar className="view-requests-sidebar" />
      <div className="view-requests-content">
        <div className="hr-search-bar-container">
          <input
            type="text"
            className="hr-search-bar"
            placeholder="Search..."
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>

        <h2 className="view-requests-title">Requests from Project Manager</h2>
        <table className="view-requests-table">
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Job Role</th>
              <th>Experience</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobDetails.map((user) => (
              <tr key={user.jobId}>
                <td>{user.jobId}</td>
                <td>{user.jobRole}</td>
                <td>{user.experience}</td>
                <td>{user.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewRequests;
