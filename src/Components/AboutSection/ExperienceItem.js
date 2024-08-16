import React from "react";

const ExperienceItem = ({ title, date, description }) => (
  <div className="experience-item">
    <h4>{title}</h4>
    <p>{date}</p>
    <div className="separator"></div> {/* Separator line */}
    <p>{description}</p>
  </div>
);

export default ExperienceItem;
