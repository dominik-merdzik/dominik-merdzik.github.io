import React from "react";

const ExperienceItem = ({ title, date, description }) => (
  <div>
    <h4>{title}</h4>
    <p>{date}</p>
    <p>{description}</p>
  </div>
);

export default ExperienceItem;
