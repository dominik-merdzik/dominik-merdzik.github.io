import React from "react";

const ProjectCard = ({ title, imageSrc, shortDescription, onClick }) => (
  <div className="project">
    <img className="project-img" src={imageSrc} alt={title} onClick={onClick} />
    <p>{shortDescription}</p>
    <span className="read-more-toggle" onClick={onClick}>
      &#10230;
    </span>
  </div>
);

export default ProjectCard;
