import { Link } from "react-router-dom";
import "./PMSideBar.css"; // Import the CSS file

function PMSideBar() {
  return (
    <div className="pm-sidebar">
      <h2>DashBoard</h2>
      <br></br>

      <Link className="pm-sidebar-link" to="/PMLogin">
        <i className="fas fa-sign-in-alt pm-sidebar-icon"></i> Login Page
      </Link>
      <Link className="pm-sidebar-link" to="/PMLogin/PMviewjobDesc">
        <i className="fas fa-briefcase pm-sidebar-icon"></i> View Job
        Descriptions
      </Link>
      <Link className="pm-sidebar-link" to="/PMLogin/PMreqHistory">
        <i className="fas fa-history pm-sidebar-icon"></i> Request History
      </Link>
      <Link className="pm-sidebar-link" to="/PMLogin/PMworkbench">
        <i className="fas fa-cogs pm-sidebar-icon"></i> Workbench
      </Link>

      <Link className="pm-sidebar-link" to="/PMLogin/PMAssignedCandidates">
        <i className="fas fa-tasks pm-sidebar-icon"></i> Project Details
      </Link>

      <Link className="pm-sidebar-link" to="/">
        <i className="fas fa-sign-in-alt pm-sidebar-icon"></i> Logout
      </Link>
    </div>
  );
}

export default PMSideBar;
