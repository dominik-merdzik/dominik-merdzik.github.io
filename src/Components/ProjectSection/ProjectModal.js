import React, { useEffect, useState } from "react";

const ProjectModal = ({ title, longDescription, images, technologies, githubLink, isOpen, onClose }) => {
  // eslint-disable-next-line
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");

      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      const handleScroll = () => {
        const modalElement = document.querySelector('.modal.show');
        if (modalElement) {
          const rect = modalElement.getBoundingClientRect();
          if (rect.top >= window.innerHeight || rect.bottom <= 0) {
            onClose();
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearInterval(interval);
        window.removeEventListener('scroll', handleScroll);
        document.body.classList.remove("modal-open");
      };
    }
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay show" onClick={onClose}></div>
      <div className="modal show">
        <div className="modal-content">
          {/* <div className="carousel">
            <img src={images[currentImageIndex]} alt={`${title} screenshot ${currentImageIndex + 1}`} />
          </div> */}
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
