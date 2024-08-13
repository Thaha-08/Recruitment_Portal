import { useEffect, useState } from "react";
import HRSideBar from "./HRSideBar";
import axios from "axios";
import "./ViewSelectedCandidates.css"; // Import the CSS file

function ViewSelectedCandidates() {
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [searchbar, setSearchbar] = useState("");
  const [loading, setLoading] = useState(false); // General loading state
  const [loadingAction, setLoadingAction] = useState(""); // Specific action loading state

  useEffect(() => {
    setLoading(true); // Set loading to true when starting fetch

    axios
      .get("http://localhost:8080/index/viewSelectedList")
      .then((response) => {
        setSelectedCandidates(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.log("Error while fetching / server not connected");
        setLoading(false); // Set loading to false if there's an error
      });
  }, []); // Empty dependency array to fetch data once

  const handleAccept = async (candidateid) => {
    setLoading(true);
    setLoadingAction("accept");

    try {
      console.log("Accept button clicked");
      await axios.post(`http://localhost:8080/index/Hr/accept/${candidateid}`);
      alert("Accepted Mail Send Successfully");
    } catch (error) {
      console.log("fetching error / server error", error);
    } finally {
      setLoading(false);
      setLoadingAction("");
    }
  };

  const handleReject = async (candidateid) => {
    setLoading(true);
    setLoadingAction("reject");

    try {
      await axios.post(`http://localhost:8080/index/Hr/reject/${candidateid}`);
      alert("Rejected Mail Send Successfully");
      console.log("Reject button clicked");
    } catch (error) {
      console.log("server not started", error);
    } finally {
      setLoading(false);
      setLoadingAction("");
    }
  };

  const handleConduct = async (candidateid) => {
    setLoading(true);
    setLoadingAction("conduct");

    try {
      await axios.post(
        `http://localhost:8080/index/Hr/HRinterviewMail /${candidateid}`,
      );
      alert("Hr Round mail Sent Successfully");
    } catch (error) {
      console.log("server not started", error);
    } finally {
      setLoading(false);
      setLoadingAction("");
    }
  };

  // Enhanced filtering logic
  const filteredJobDetails = selectedCandidates.filter((job) => {
    const searchLower = searchbar.toLowerCase();
    return (
      job.candidateName.toLowerCase().includes(searchLower) ||
      job.candidateGender.toLowerCase().includes(searchLower) ||
      (job.candidateId || "").toString().includes(searchLower) ||
      (job.candidateExperience || "").toString().includes(searchLower)
    );
  });

  return (
    <div className="view-selected-candidates-container">
      {loading && loadingAction && (
        <div className="loader-container">
          <img
            src="https://th.bing.com/th/id/R.fa579b9ad01819c3d91096227f34a38e?rik=lfJZGcCajs4BAA&riu=http%3a%2f%2fwww.m777cash.com%2fweb%2fassets%2fm777%2fimages%2fcommon%2fpreload-indicator.gif&ehk=txshejwn4SegePvnugw%2fB%2f%2b7m78ZUn1gb9qRWa7EYu0%3d&risl=&pid=ImgRaw&r=0"
            alt="Loading..."
            className="loader"
          />
        </div>
      )}
      <HRSideBar className="view-selected-candidates-sidebar" />

      <div className="view-selected-candidates-content">
        <div className="hr-search-bar-container">
          <input
            type="text"
            className="hr-search-bar"
            placeholder="Search..."
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
          />
        </div>

        <h1 className="view-selected-candidates-title">
          Candidates Selected by Interviewer
        </h1>

        <table className="view-selected-candidates-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Degree</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Selected</th>
              <th>Candidate-mailId</th>
              <th>Remarks</th>
              <th>Acception</th>
              <th>Rejection</th>
              <th>conduct</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobDetails.length > 0 ? (
              filteredJobDetails.map((user) => (
                <tr key={user.candidateId}>
                  <td>{user.candidateId}</td>
                  <td>{user.candidateName}</td>
                  <td>{user.candidateGender}</td>
                  <td>{user.candidateDegree}</td>
                  <td>{user.candidateSkills}</td>
                  <td>{user.candidateExperience}</td>
                  <td>{user.selected}</td>
                  <td>{user.candidateEmailId}</td>
                  <td>{user.remarks}</td>
                  <td>
                    <button
                      onClick={() => handleAccept(user.candidateId)}
                      className="button-accept"
                      disabled={loading && loadingAction === "accept"}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleReject(user.candidateId)}
                      className="button-reject"
                      disabled={loading && loadingAction === "reject"}
                    >
                      Reject
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleConduct(user.candidateId)}
                      className="button-conduct"
                      disabled={loading && loadingAction === "conduct"}
                    >
                      HR Round
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

export default ViewSelectedCandidates;
