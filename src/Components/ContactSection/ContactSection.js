import React from "react";
import SocialLinks from "./SocialLink";

const ContactSection = () => (
  <section id="contact" className="full-screen contact-section">
    <div id="contact-container">
      <h2>Contact</h2>
      <p>
        You can reach me at <br />
        <a href="mailto:business@dominikmerdzik.com">business@dominikmerdzik.com</a>
      </p>
      <p>Or through my socials</p>
      <SocialLinks />
    </div>
    <div className="back-to-top-container">
        <a href="#top" className="back-to-top-link">
          <span className="line"></span>
          Back to the top
          <span className="line"></span>
        </a>
      </div>
  </section>
);

export default ContactSection;
