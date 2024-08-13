import axios from "axios";
import { useEffect, useState } from "react";
import PMSideBar from "./PMSideBar";
import "./PMviewjobDesc.css"; // Import the CSS file

function PMviewjobDesc() {
  const [jobDetails, setJobDetails] = useState([]);
  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/PMviewjobDescription")
      .then((response) => setJobDetails(response.data))
      .catch((error) => {
        console.log("Error on get data from backend", error);
      });
  }, [jobDetails]);

  const handleRequest = async (jobid) => {
    try {
      await axios.post(`http://localhost:8080/index/RequestToHr/${jobid}`);
      alert("Job details requested to HR");
    } catch (error) {
      alert("Error while requesting");
    }
  };

  const handleDelete = async (jobid) => {
    try {
      await axios.delete(
        `http://localhost:8080/index/PMdeletejobDesc/${jobid}`,
      );
      alert("Job description deleted successfully");
    } catch (error) {
      alert("Error while deleting");
    }
  };

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
    <div className="pm-viewjobdesc-page">
      <PMSideBar />

      <div className="pm-viewjobdesc-content">
        <div className="pm-search-bar-container">
          <input
            type="text"
            className="pm-search-bar"
            placeholder="Search..."
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>
        <h4 className="pm-viewjobdesc-h4">Job Descriptions </h4>
        <table className="pm-viewjobdesc-table">
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Job Status</th>
              <th>Job Role</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobDetails.map((user) => (
              <tr key={user.jobId}>
                <td>{user.jobId}</td>
                <td>{user.jobStatus}</td>
                <td>{user.jobRole}</td>
                <td>{user.experience}</td>
                <td>{user.location}</td>
                <td>
                  <button
                    className="pm-viewjobdesc-button"
                    onClick={() => handleRequest(user.jobId)}
                  >
                    Request to HR
                  </button>
                  <button
                    className="pm-viewjobdesc-button pm-delete-button"
                    onClick={() => handleDelete(user.jobId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PMviewjobDesc;
