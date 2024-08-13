import { Link } from "react-router-dom";
import "./IRSideBar.css"; // Import the unique CSS file

function IRSideBar() {
  return (
    <div className="ir-sidebar">
      <h2 className="hr-title">DashBoard</h2>
      <br></br>
      <a href="/IRLogin">Login</a>

      <a href="/IRLogin/interviewList">Interview-List</a>

      <a href="/IRLogin/interviewHistory">Interview-History</a>

      <a href="/">Logout</a>
    </div>
  );
}

export default IRSideBar;
