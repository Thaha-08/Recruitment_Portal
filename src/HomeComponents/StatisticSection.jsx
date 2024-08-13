import "../HomeComponents/StatisticSection.css";

function StatisticSection() {
  return (
    <div>
      <section className="ss-container" id="statistics">
        <div className="ss-inner">
          <h2 className="ss-title">Statistics</h2>
          <div className="ss-stats">
            <div className="ss-stat">
              <div className="ss-stat-icon">
                <i className="fa fa-list" />
              </div>
              <div className="ss-stat-content">
                <h3 className="ss-stat-number">900+</h3>
                <p className="ss-stat-text">Interviews</p>
              </div>
            </div>
            <div className="ss-stat">
              <div className="ss-stat-icon">
                <i className="fa fa-folder" />
              </div>
              <div className="ss-stat-content">
                <h3 className="ss-stat-number">40+</h3>
                <p className="ss-stat-text">Job roles</p>
              </div>
            </div>
            <div className="ss-stat">
              <div className="ss-stat-icon">
                <i className="fa fa-users" />
              </div>
              <div className="ss-stat-content">
                <h3 className="ss-stat-number">1500+</h3>
                <p className="ss-stat-text">Applied Candidates</p>
              </div>
            </div>
            <div className="ss-stat">
              <div className="ss-stat-icon">
                <i className="fa fa-smile" />
              </div>
              <div className="ss-stat-content">
                <h3 className="ss-stat-number">500+</h3>
                <p className="ss-stat-text">Selected Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StatisticSection;
