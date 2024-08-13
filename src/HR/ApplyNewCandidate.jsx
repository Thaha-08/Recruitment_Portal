import { useState } from "react";
import HRSideBar from "./HRSideBar";
import axios from "axios";
import "./ApplyNewCandidate.css"; // Import the CSS file

function ApplyNewCandidate() {
  const [candidateName, setCandidateName] = useState("");
  const [candidateAge, setCandidateAge] = useState("");
  const [candidateGender, setCandidateGender] = useState("");
  const [candidateDegree, setCandidateDegree] = useState("");
  const [candidateSkills, setCandidateSkills] = useState("");
  const [candidateExpectedCTC, setCandidateExpectedCTC] = useState(0);
  const [candidateExperience, setCandidateExperience] = useState(0);
  const [candidateAddress, setCandidateAddress] = useState("");
  const [candidateEmailId, setcandidateEmailId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/index/HR-applyNewCandidate", {
        candidateName,
        candidateAge,
        candidateGender,
        candidateDegree,
        candidateSkills,
        candidateExpectedCTC,
        candidateExperience,
        candidateAddress,
        candidateEmailId,
      });
      alert("Successfully Registered");
      clearform();
    } catch (error) {
      console.log("Error registering candidate", error);
    }
  };
  const clearform = () => {
    setCandidateName(""),
      setCandidateAge(0),
      setCandidateGender(""),
      setCandidateDegree(""),
      setCandidateExpectedCTC(0),
      setCandidateExperience(0),
      setCandidateSkills(""),
      setcandidateEmailId(""),
      setCandidateAddress("");
  };

  return (
    <div className="apply-new-candidate-page">
      <HRSideBar className="apply-new-candidate-sidebar" />
      <div className="apply-new-candidate-content">
        <h1 className="apply-new-candidate-title">
          Form to Apply New Candidates
        </h1>
        <form className="apply-new-candidate-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="candidateName">Candidate Name:</label>
            <input
              type="text"
              id="candidateName"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateAge">Candidate Age:</label>
            <input
              type="number"
              id="candidateAge"
              value={candidateAge}
              onChange={(e) => setCandidateAge(e.target.value)}
              placeholder="Age"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateGender">Candidate Gender:</label>
            <input
              type="text"
              id="candidateGender"
              value={candidateGender}
              onChange={(e) => setCandidateGender(e.target.value)}
              placeholder="male/female"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateDegree">Candidate Degree:</label>
            <input
              type="text"
              id="candidateDegree"
              value={candidateDegree}
              onChange={(e) => setCandidateDegree(e.target.value)}
              placeholder="BE"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateSkills">Candidate Skills:</label>
            <input
              type="text"
              id="candidateSkills"
              value={candidateSkills}
              onChange={(e) => setCandidateSkills(e.target.value)}
              placeholder="Java"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateExpectedCTC">Expected CTC:</label>
            <input
              type="number"
              id="candidateExpectedCTC"
              value={candidateExpectedCTC}
              onChange={(e) => setCandidateExpectedCTC(e.target.value)}
              placeholder="500000"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateExperience">Experience:</label>
            <input
              type="number"
              id="candidateExperience"
              value={candidateExperience}
              onChange={(e) => setCandidateExperience(e.target.value)}
              placeholder="3"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateAddress">Candidate Address:</label>
            <input
              type="text"
              id="candidateAddress"
              value={candidateAddress}
              onChange={(e) => setCandidateAddress(e.target.value)}
              placeholder="Goa"
              required
            />
          </div>
          <div>
            <label htmlFor="candidateEmailId">Candidate Email:</label>
            <input
              type="text"
              id="candidateEmailId"
              value={candidateEmailId}
              onChange={(e) => setcandidateEmailId(e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyNewCandidate;
