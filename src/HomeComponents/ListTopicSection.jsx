import "../HomeComponents/ListTopicSection.css";

function ListTopicSection() {
  return (
    <section className="lts-container" id="login">
      <div className="lts-inner">
        <ul className="lts-list">
          <li className="lts-item">
            <div className="lts-icon">
              <i className="fa fa-user-shield" />
            </div>

            <h2 className="lts-title">
              <a href="/admin">Admin</a>
            </h2>
          </li>

          <li className="lts-item">
            <div className="lts-icon">
              <i className="fa fa-user-cog" />
            </div>
            <h2 className="lts-title">
              <a href="/TLLogin">Team Leader</a>
            </h2>
          </li>

          <li className="lts-item">
            <div className="lts-icon">
              <i className="fas fa-project-diagram" />
            </div>
            <h2 className="lts-title">
              <a href="/PMLogin">Project Manager</a>
            </h2>
          </li>

          <li className="lts-item">
            <div className="lts-icon">
              <i className="fa fa-user-tie" />
            </div>
            <h2 className="lts-title">
              <a href="/HRLogin">HR</a>
            </h2>
          </li>

          <li className="lts-item">
            <div className="lts-icon">
              <i className="fa fa-user-check" />
            </div>
            <h2 className="lts-title">
              <a href="/IRLogin">Interviewer</a>
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ListTopicSection;
