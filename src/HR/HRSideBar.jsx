import { Link } from "react-router-dom";
import "./HRSideBar.css"; // Import the CSS file

function HRSideBar() {
  return (
    <div className="hr-sidebar">
      <h2 className="hr-title">DashBoard</h2>
      <br></br>
      <Link className="hr-sidebar-link" to="/HRLogin">
        <i className="fas fa-sign-in-alt hr-sidebar-icon"></i> Login
      </Link>
      <Link className="hr-sidebar-link" to="/HRLogin/viewRequests">
        <i className="fas fa-list hr-sidebar-icon"></i> View-Requests
      </Link>
      <Link className="hr-sidebar-link" to="/HRLogin/appliedCandidates">
        <i className="fas fa-user-plus hr-sidebar-icon"></i> Applied Candidates
      </Link>
      <Link className="hr-sidebar-link" to="/HRLogin/selectedCandidates">
        <i className="fas fa-check-circle hr-sidebar-icon"></i> Selected
        Candidates
      </Link>
      <Link className="hr-sidebar-link" to="/HRLogin/applyNewCandidate">
        <i className="fas fa-user-edit hr-sidebar-icon"></i> Apply new
        Candidates
      </Link>
      <Link className="hr-sidebar-link" to="/HRLogin/intreviewerList">
        <i className="fas fa-users hr-sidebar-icon"></i> Interviewer-List
      </Link>
      <Link className="hr-sidebar-link" to="/">
        <i className="fas fa-sign-in-alt hr-sidebar-icon"></i> Logout
      </Link>
    </div>
  );
}

export default HRSideBar;
