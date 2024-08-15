import React, { useEffect, useState } from "react";

const ProjectModal = ({ title, longDescription, images, technologies, githubLink, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Move user to the #projects section
      window.location.hash = "#projects";

      document.body.style.overflow = "hidden";
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      return () => {
        clearInterval(interval);
        document.body.style.overflow = "auto";
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay show" onClick={onClose}></div>
      <div className="modal show">
        <div className="modal-content">
          <div className="carousel">
            <img src={images[currentImageIndex]} alt={`${title} screenshot ${currentImageIndex + 1}`} />
          </div>
          <div className="text-area">
            <h2>{title}</h2>
            <p><strong>Technologies Used:</strong> {technologies}</p>
            <p>{longDescription}</p>
            <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
              <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg`} alt="GitHub" />
            </a>
          </div>
        </div>
        <button className="modal-close" onClick={onClose}></button>
      </div>
    </>
  );
};

export default ProjectModal;
