import "../HomeComponents/SubscriptionSection.css";

function SubscriptionSection() {
  return (
    <div>
      <section className="sub-section" id="contact">
        <div className="sub-inner">
          <h2 className="sub-title">
            Do you want to add your insights with us?
          </h2>
          <p className="sub-text">
            Mention your Mail ID so that we can reach out to you.
          </p>
          <form className="sub-form">
            <input
              type="email"
              className="sub-input"
              placeholder="Enter your email here"
            />
            <button className="sub-btn">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SubscriptionSection;
