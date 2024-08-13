import { useEffect, useState } from "react";
import axios from "axios";
import IRSideBar from "./IRSideBar";
import "./InterviewList.css"; // Import the CSS file
import { useLocation } from "react-router-dom";

function InterviewList() {
  const [interviewDetails, setInterviewDetails] = useState([]);
  const [remarks, setRemarks] = useState("");
  const [select, setSelect] = useState("");
  const location = useLocation();
  const username = location.state?.username;

  useEffect(() => {
    axios
      .post(`http://localhost:8080/index/IR/interviewList/${username}`)
      .then((response) => {
        setInterviewDetails(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching / server not connected", error);
      });
  }, [interviewDetails]);

  const handleSubmit = async (candidateId, remarks, select) => {
    try {
      await axios.post(
        `http://localhost:8080/index/IR/response/${candidateId}/${select}/${remarks}`,
      );
      console.log("submitted");

      await axios.post(
        `http://localhost:8080/index/IR/Irhistory/${candidateId}/${username}`,
      );
      alert("Saved and Submitted..!");
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="interview-list-page">
      <IRSideBar />
      <div className="interview-list-content">
        <h2 className="interview-list-title">Interview Details</h2>
        <table className="interview-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Candidate-Name</th>
              <th>Candidate-Id</th>
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
                  <td>{user.interviewerId}</td>
                  <td>{user.candidateName}</td>
                  <td>{user.candidateId}</td>
                  <td>{user.candidateSkills}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Remarks"
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      value={select}
                      onChange={(e) => setSelect(e.target.value)}
                    >
                      <option value="">Choose</option>
                      <option value="Selected">Selected</option>
                      <option value="Not Selected">Not Selected</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleSubmit(user.candidateId, remarks, select)
                      }
                      className="interview-list-submit-button"
                    >
                      Submit
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

export default InterviewList;
