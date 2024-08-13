import { useEffect, useState } from "react";
import axios from "axios";
import PMSideBar from "./PMSideBar";
import "./PMreqHistory.css";

function PMAssignedCandidates() {
  const [jobDetails, setJobDetails] = useState([]);
  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/viewAssignedCandidates")
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
      job.skills.toLowerCase().includes(searchLower) ||
      job.name.toLowerCase().includes(searchLower) ||
      (job.jobId || "").toString().includes(searchLower) ||
      (job.empId || "").toString().includes(searchLower)
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

        <h2 className="pm-req-history-title">Project Details</h2>
        <table className="pm-req-history-table">
          <thead>
            <tr>
              <th>Employee-Id</th>
              <th>Employee-Name</th>
              <th>Job-Id</th>
              <th>job-Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobDetails.map((user) => (
              <tr key={user.jobId}>
                <td>{user.empId}</td>
                <td>{user.name}</td>
                <td>{user.jobId}</td>
                <td>{user.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PMAssignedCandidates;
