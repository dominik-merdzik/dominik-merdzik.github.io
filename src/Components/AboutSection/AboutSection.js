import React from "react";
import TechStack from "./TechStack";
import ExperienceItem from "./ExperienceItem";

const AboutSection = () => (
  <section id="about" className="full-screen">
    <h2>About Me</h2>
    <div className="about-content">
      <div className="column-one">
        <div className="image-wrapper">{/* Image will be here */}</div>
        <div className="intro-text-wrapper">
          <p className="intro-text">
            Hi, I'm Dominik Merdzik, a passionate and dedicated software
            developer with a strong background in full-stack web
            development. I have a keen eye for detail and a love for
            creating clean, efficient, and user-friendly applications.
          </p>
        </div>
      </div>

      <div className="column-two text-content">
        <h3>Technical Skills</h3>
        <TechStack />
        
        <h3>Experience</h3>
        <div className="experience">
          <ExperienceItem 
            title="Web Specialist Co-op - Creative One"
            date="July 2022 - September 2022"
            description="Worked with a team to meet deadlines and accomplish goals with
            clear communication. Held meetings with clients to coordinate
            and create WordPress websites and applications. Adapted to new
            technologies while managing client expectations."
          />
          <ExperienceItem 
            title="Part-time Employee - Harveys & Swiss Chalet"
            date="October 2018 - Present"
            description="Sharpened teamwork and interpersonal skills. Learned to resolve
            complaints and conflicts independently, adhering to company
            standards."
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
