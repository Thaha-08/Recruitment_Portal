import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import IRSideBar from "./IRSideBar";
import "./InterviewHistory.css"; // Import the CSS file

function InterviewHistory() {
  const [interviewDetails, setInterviewDetails] = useState([]);
  const location = useLocation();

  const username = location.state?.username;

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/IR/viewIRhistory")
      .then((response) => {
        setInterviewDetails(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching / server not connected", error);
      });
  }, []);

  const handleDelete = async (candidateId) => {
    try {
      await axios.post(
        `http://localhost:8080/index/IR/Ithistory/delete/${candidateId}`,
      );
      setInterviewDetails(
        interviewDetails.filter((user) => user.candidateId !== candidateId),
      );
    } catch (error) {
      console.error("Error deleting record", error);
    }
  };

  return (
    <div className="interview-history-page">
      <IRSideBar />
      <div className="interview-history-content">
        <h2 className="interview-history-title">IR History Table</h2>
        <table className="interview-history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Candidate-Id</th>
              <th>Candidate-Name</th>
              <th>Candidate-Skill</th>
              <th>Remarks</th>
              <th>Selection</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {interviewDetails.length > 0 ? (
              interviewDetails.map((user) => (
                <tr key={user.candidateId}>
                  <td>{user.interviewerName}</td>
                  <td>{user.candidateId}</td>
                  <td>{user.candidateName}</td>
                  <td>{user.candidateSkills}</td>
                  <td>{user.remarks}</td>
                  <td>{user.selected}</td>
                  <td>
                    <button
                      className="interview-history-delete-button"
                      onClick={() => handleDelete(user.candidateId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No candidate details exist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InterviewHistory;
