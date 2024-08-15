import React from "react";
import SocialLinks from "./SocialLink";

const ContactSection = () => (
  <section id="contact" className="full-screen">
    <div id="contact-container">
      <h2>Contact</h2>
      <p>
        You can reach me at <br />
        <a href="mailto:business@dominikmerdzik.com">business@dominikmerdzik.com</a>
      </p>
      <p>Or through my socials</p>
      <SocialLinks />
    </div>
  </section>
);

export default ContactSection;
