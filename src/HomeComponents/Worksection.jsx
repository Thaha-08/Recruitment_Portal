import "../HomeComponents/WorkSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faNetworkWired,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

function Worksection() {
  return (
    <div>
      <section className="ws-container" id="about">
        <div className="ws-inner">
          <h2 className="ws-title">About our Site</h2>
          <p className="ws-subtitle">Learn More about our website </p>
          <div className="ws-content">
            <div className="ws-item">
              <div className="ws-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3 className="ws-item-title">Choose what to do</h3>
              <p className="ws-item-text">
                Explore various options and select the activities or services
                that best fit your needs and interests. Start your journey by
                making informed choices that align with your goals.
              </p>
            </div>
            <div className="ws-item">
              <div className="ws-icon">
                <FontAwesomeIcon icon={faNetworkWired} />
              </div>
              <h3 className="ws-item-title">Find what you want</h3>
              <p className="ws-item-text">
                To attract an employee who perfectly matches your needs, focus
                on clearly defining the role, highlighting the key skills and
                attributes you seek, and effectively communicating your
                company's values and culture throughout the recruitment process.
              </p>
            </div>
            <div className="ws-item">
              <br />
              <div className="ws-icon">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>
              <h3 className="ws-item-title">Remote Interviews</h3>
              <p className="ws-item-text">
                Remote interviews offer the advantage of accessing a global
                talent pool, reducing costs and travel time, and providing
                greater flexibility for both candidates and employers, all while
                maintaining a comfortable and safe environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Worksection;
