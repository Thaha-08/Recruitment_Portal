import { useEffect, useState } from "react";
import axios from "axios";
import PMSideBar from "./PMSideBar";
import "./PMworkBench.css"; // Import the CSS file

function PMworkBench() {
  const [workBenchDetails, setWorkBenchDetails] = useState([]);
  const [jobId, setJobId] = useState(0);
  const [searchbar, setSearchbar] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/PMviewResource")
      .then((response) => {
        setWorkBenchDetails(response.data);
      })
      .catch((error) => {
        console.log("Error fetching workbench details", error);
      });
  }, [workBenchDetails]);

  const handleAssign = (empId, jobId) => {
    const response = axios.post(
      `http://localhost:8080/index/PM-wrkbenchAssign/${empId}/${jobId}`,
    );

    if (response.data === "success") {
      console.log(response.data);

      alert("Assigned successfully");
    } else if (response.data === "Failed") {
      console.log(response.data);
      alert("Job Id doesn't exists");
    } else console.log(response.data);
  };

  // Enhanced filtering logic
  const filteredworkBenchDetails = workBenchDetails.filter((job) => {
    const searchLower = searchbar.toLowerCase();
    return (
      job.empname.toLowerCase().includes(searchLower) ||
      job.skills.toLowerCase().includes(searchLower) ||
      (job.empId || "").toString().includes(searchLower) ||
      (job.experience || "").toString().includes(searchLower)
    );
  });

  return (
    <div className="pm-workbench-page">
      <PMSideBar />
      <div className="pm-workbench-content">
        <div className="pm-search-bar-container">
          <input
            type="text"
            className="pm-search-bar"
            placeholder="Search..."
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>
        <h3 className="pm-workbench-title">Workbench Data</h3>
        <table className="pm-workbench-table">
          <thead>
            <tr>
              <th>Employee-Id</th>
              <th>Employee-Name</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Assign Job</th>
            </tr>
          </thead>
          <tbody>
            {filteredworkBenchDetails.map((user) => (
              <tr key={user.empId}>
                <td>{user.empId}</td>
                <td>{user.empname}</td>
                <td>{user.skills}</td>
                <td>{user.experience}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Job-Id"
                    onChange={(e) => setJobId(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleAssign(user.empId, jobId)}
                    className="pm-workbench-assign-button"
                  >
                    Assign
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

export default PMworkBench;
