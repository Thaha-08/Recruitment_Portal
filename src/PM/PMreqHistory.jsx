import { useEffect, useState } from "react";
import axios from "axios";
import PMSideBar from "./PMSideBar";
import "./PMreqHistory.css"; // Import the CSS file

function PMreqHistory() {
  const [jobDetails, setJobDetails] = useState([]);
  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/PMviewRequests")
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => {
        console.log("Error fetching request history", error);
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
    <div className="pm-req-history-page">
      <PMSideBar />
      <div className="pm-req-history-content">
        <div className="pm-search-bar-container">
          <input
            type="text"
            className="pm-search-bar"
            placeholder="Search..."
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>

        <h2 className="pm-req-history-title">Request to HR Table</h2>
        <table className="pm-req-history-table">
          <thead>
            <tr>
              <th>Job-Id</th>
              <th>Job-Role</th>
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

export default PMreqHistory;
