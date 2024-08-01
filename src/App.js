// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import githubLogo from './Images/github-mark.png'; 

const Project = ({ title, shortDescription, longDescription, imageSrc, githubLink, images, technologies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    let interval;
    if (isModalOpen) {
      interval = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isModalOpen, currentImageIndex, images.length]);

  return (
    <div className="project">
      <img className="project-img" src={imageSrc} alt={title} />
      <p>{shortDescription}</p>
      <span className="read-more-toggle" onClick={toggleModal}>
        Read More
      </span>

      {isModalOpen && (
        <>
          <div className={`modal-overlay ${isModalOpen ? 'show' : 'hide'}`} onClick={toggleModal}></div>
          <div className={`modal ${isModalOpen ? 'show' : 'hide'}`}>
            <div className="modal-content">
              <div className="carousel">
                <img src={images[currentImageIndex]} alt={`${title} screenshot ${currentImageIndex + 1}`} />
              </div>
              <div className="text-area">
                <h2>{title}</h2>
                <p><strong>Technologies Used:</strong> {technologies}</p>
                <p>{longDescription}</p>
                <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub" /> {/* Use the imported image */}
                </a>
              </div>
            </div>
            <span className="modal-close" onClick={toggleModal}>Close</span>
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple portfolio website built with React.</p>
      </header>
      <section id="about" className="full-screen">
        <h2>About Me</h2>
        <img src="https://via.placeholder.com/150" alt="About me" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus.</p>
      </section>
      <section id="projects" className="full-screen">
        <h2>Projects</h2>
        <div className="projects-container">
          <Project
            title="Project 1"
            shortDescription="Project 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            longDescription="Detailed description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            imageSrc="https://via.placeholder.com/150"
            githubLink="https://github.com/yourprofile/project1"
            images={[
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300"
            ]}
            technologies="React, CSS, HTML"
          />
          <Project
            title="Project 2"
            shortDescription="Project 2: Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum."
            longDescription="Detailed description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            imageSrc="https://via.placeholder.com/150"
            githubLink="https://github.com/yourprofile/project2"
            images={[
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300"
            ]}
            technologies="JavaScript, Node.js, Express"
          />
          <Project
            title="Project 3"
            shortDescription="Project 3: Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            longDescription="Detailed description for Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            imageSrc="https://via.placeholder.com/150"
            githubLink="https://github.com/yourprofile/project3"
            images={[
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300"
            ]}
            technologies="Python, Django, SQLite"
          />
        </div>
      </section>
      <section id="contact" className="full-screen">
        <h2>Contact</h2>
        <img src="https://via.placeholder.com/150" alt="Contact" />
        <p>You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>Or follow me on social media:</p>
        <ul>
          <li><a href="https://twitter.com/yourprofile">Twitter</a></li>
          <li><a href="https://linkedin.com/in/yourprofile">LinkedIn</a></li>
          <li><a href="https://github.com/yourprofile">GitHub</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
