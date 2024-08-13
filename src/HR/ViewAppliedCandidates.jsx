import { useEffect, useState } from "react";
import HRSideBar from "./HRSideBar";
import axios from "axios";
import "./ViewAppliedCandidates.css"; // Import the CSS file

function ViewAppliedCandidates() {
  const [candidateDetails, setCandidateDetails] = useState([]);
  const [interviewerId, setInterviewerId] = useState("");
  const [interviewerTime, setInterviewTime] = useState("");
  const [searchbar, setSearchbar] = useState("");
  const [loading, setLoading] = useState(true); // State for fetching data
  const [assigning, setAssigning] = useState(false); // State for assignment

  useEffect(() => {
    setLoading(true); // Set loading to true when starting fetch

    axios
      .get("http://localhost:8080/index/viewAppliedCandidate")
      .then((response) => {
        setCandidateDetails(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.log("Error while fetching / server not connected");
        setLoading(false); // Set loading to false if there's an error
      });
  }, []); // Empty dependency array to fetch data once

  const handleAssign = async (candidateid, interviewerid, interviewertime) => {
    setAssigning(true); // Set assigning to true when starting assignment

    try {
      console.log(candidateid);
      console.log(interviewerid);
      console.log(interviewertime);

      await axios.post(
        `http://localhost:8080/index/HR/assignInterviewer/${candidateid}/${interviewerid}/${interviewertime}`,
      );

      alert("Mail sent to both Interviewer and Candidate!");
    } catch (error) {
      console.log("Error while fetching... ", error);
      console.log("Email must be correct");
    } finally {
      setAssigning(false); // Set assigning to false after assignment operation
    }
  };

  // Enhanced filtering logic
  const filteredJobDetails = candidateDetails.filter((job) => {
    const searchLower = searchbar.toLowerCase();
    return (
      job.candidateName.toLowerCase().includes(searchLower) ||
      job.candidateGender.toLowerCase().includes(searchLower) ||
      (job.candidateId || "").toString().includes(searchLower) ||
      (job.candidateExperience || "").toString().includes(searchLower)
    );
  });

  return (
    <div className="view-applied-candidates-page">
      {(loading || assigning) && (
        <div className="loader-container">
          <img
            src="https://th.bing.com/th/id/R.fa579b9ad01819c3d91096227f34a38e?rik=lfJZGcCajs4BAA&riu=http%3a%2f%2fwww.m777cash.com%2fweb%2fassets%2fm777%2fimages%2fcommon%2fpreload-indicator.gif&ehk=txshejwn4SegePvnugw%2fB%2f%2b7m78ZUn1gb9qRWa7EYu0%3d&risl=&pid=ImgRaw&r=0"
            alt="Loading..."
            className="loader"
          />
        </div>
      )}
      <HRSideBar className="view-applied-candidates-sidebar" />
      <div className="view-applied-candidates-content">
        <div className="hr-search-bar-container">
          <input
            type="text"
            className="hr-search-bar"
            placeholder="Search..."
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>

        <h1 className="view-applied-candidates-title">
          View Applied Candidates
        </h1>
        <table className="view-applied-candidates-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Skills</th>
              <th>Interview</th>
              <th>Interviewer Name</th>
              <th>Interview Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobDetails.length > 0 ? (
              filteredJobDetails.map((user) => (
                <tr key={user.candidateId}>
                  <td>{user.candidateId}</td>
                  <td>{user.candidateName}</td>
                  <td>{user.candidateGender}</td>
                  <td>{user.candidateSkills}</td>
                  <td>{user.interview}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Interviewer-Id"
                      onChange={(e) => {
                        setInterviewerId(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Interview-Time"
                      onChange={(e) => {
                        setInterviewTime(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handleAssign(
                          user.candidateId,
                          interviewerId,
                          interviewerTime,
                        )
                      }
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12">No candidate details exist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAppliedCandidates;
