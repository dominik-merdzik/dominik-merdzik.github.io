import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Project = ({ title, shortDescription, longDescription, imageSrc, githubLink, images, technologies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ProjectCard title={title} imageSrc={imageSrc} shortDescription={shortDescription} onClick={toggleModal} />
      <ProjectModal 
        title={title}
        longDescription={longDescription}
        images={images}
        technologies={technologies}
        githubLink={githubLink}
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </>
  );
};

export default Project;
