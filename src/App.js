// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import './App.css';

import githubLogo from './Images/github-mark.svg';
import storyProject from './Images/see-n-play-project.png'
import personalHProject from './Images/personal-hub-project.png'
import bndProject from './Images/bnd-project.png'
import bitHi from './Images/bitmoji/sticker.png';
import grinSmile from './Images/bitmoji/grin-smile.png';

const Project = ({ title, shortDescription, longDescription, imageSrc, githubLink, images, technologies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    let interval;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; 
      interval = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 4000);
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto'; 
    };
  }, [isModalOpen, currentImageIndex, images.length]);

  return (
    <div className="project">
      <img className="project-img" src={imageSrc} alt={title} onClick={toggleModal} />
      <p>{shortDescription}</p>
      <span className="read-more-toggle" onClick={toggleModal}>
        &#10230;
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
                  <img src={githubLogo} alt="GitHub" />
                </a>
              </div>
            </div>
            <button className="modal-close" onClick={toggleModal}></button>
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        aboutSection.classList.add('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple portfolio website built with React.</p>
      </header>
      <section id="about" className="full-screen">
        <h2>About Me</h2>
        <div className="image-wrapper"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus.</p>
      </section>
      <section id="projects" className="full-screen">
        <h2>Projects</h2>
        <div className="projects-container">
          <Project
            title="Bunny & Dragon Objects"
            shortDescription="Bunny & Dragon Objects"
            longDescription="Detailed description for Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            imageSrc={bndProject}
            githubLink="https://github.com/profile/project1"
            images={[
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300"
            ]}
            technologies="React, CSS, HTML"
          />
          <Project
            title="Personal Hub Life Organzier"
            shortDescription="Personal Hub Life Organzier"
            longDescription="Detailed description for Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            imageSrc={personalHProject}
            githubLink="https://github.com/profile/project2"
            images={[
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300",
              "https://via.placeholder.com/400x300"
            ]}
            technologies="JavaScript, Node.js, Express"
          />
          <Project
            title="See-n-Say Storymaker Online"
            shortDescription="See-n-Say Storymaker Online"
            longDescription="Detailed description for Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus turpis eu arcu dictum, nec volutpat libero fermentum. Aenean sit amet est auctor, congue nunc vitae, bibendum lacus."
            imageSrc={storyProject}
            githubLink="https://github.com/dominik-merdzik/See-n-Say-Storymaker-Online"
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
        <p>You can reach me at: <a href="mailto:your.email@example.com">email@example.com</a></p>
        <p>Or follow me on social media:</p>
        <ul>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://linkedin.com/in/">LinkedIn</a></li>
          <li><a href="https://github.com/">GitHub</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
