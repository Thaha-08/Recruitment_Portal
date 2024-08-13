import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewJobDescription.css"; // Import the CSS file

function ViewJobDescription() {
  const [jobDetails, setJobDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/TLviewjobDescription")
      .then((response) => {
        setJobDetails(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching job details from backend", error);
      });
  }, []);

  const handleEdit = (event) => {
    event.preventDefault();
    navigate("/TLLogin/editJobDescription");
  };

  return (
    <div className="view-job-description-page">
      <div className="view-job-description-content">
        <h4 className="view-job-description-title">Job Descriptions </h4>

        <table className="view-job-description-table">
          <thead>
            <tr>
              <th>Job-Id</th>
              <th>Job-Status</th>
              <th>Job-Role</th>
              <th>Experience</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {jobDetails.map((job) => (
              <tr key={job.jobId}>
                <td>{job.jobId}</td>
                <td>{job.jobStatus}</td>
                <td>{job.jobRole}</td>
                <td>{job.experience}</td>
                <td>{job.location}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="button"
          className="view-job-description-edit-button"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default ViewJobDescription;
