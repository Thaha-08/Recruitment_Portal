import axios from "axios";
import { useEffect, useState } from "react";
import HRSideBar from "./HRSideBar";
import "./InterviewerList.css"; // Import the CSS file

function InterviewerList() {
  const [interviewerDetails, setInterviewerDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/index/viewInterviewerList")
      .then((response) => {
        setInterviewerDetails(response.data);
      })
      .catch((error) => {
        console.log("Error fetching interviewer list", error);
      });
  }, []);

  return (
    <div className="interviewer-list-page">
      <HRSideBar className="interviewer-sidebar" />
      <div className="interviewer-content">
        <h1 className="interviewer-title">List of Interviewers</h1>
        <table className="interviewer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {interviewerDetails.length > 0 ? (
              interviewerDetails.map((user) => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No interviewers details exist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InterviewerList;
