import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrambledText from "./Components/ScrambledText";
import "./App.css";

// Image imports
import githubLogo from "./Images/github-mark.svg";
import storyProject from "./Images/see-n-play-project.png";
import personalHProject from "./Images/personal-hub-project.png";
import bndProject from "./Images/bnd-project.png";

const Project = ({
  title,
  shortDescription,
  longDescription,
  imageSrc,
  githubLink,
  images,
  technologies,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    let interval;
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      interval = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 4000);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, currentImageIndex, images.length]);

  return (
    <div className="project">
      <img
        className="project-img"
        src={imageSrc}
        alt={title}
        onClick={toggleModal}
      />
      <p>{shortDescription}</p>
      <span className="read-more-toggle" onClick={toggleModal}>
        &#10230;
      </span>

      {isModalOpen && (
        <>
          <div
            className={`modal-overlay ${isModalOpen ? "show" : "hide"}`}
            onClick={toggleModal}
          ></div>
          <div className={`modal ${isModalOpen ? "show" : "hide"}`}>
            <div className="modal-content">
              <div className="carousel">
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                />
              </div>
              <div className="text-area">
                <h2>{title}</h2>
                <p>
                  <strong>Technologies Used:</strong> {technologies}
                </p>
                <p>{longDescription}</p>
                <a
                  href={githubLink}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("projects");

    const handleScroll = () => {
      const aboutRect = aboutSection.getBoundingClientRect();
      if (aboutRect.top < window.innerHeight && aboutRect.bottom >= 0) {
        aboutSection.classList.add("show");
      }

      const projectsRect = projectsSection.getBoundingClientRect();
      if (projectsRect.top < window.innerHeight && projectsRect.bottom >= 0) {
        projectsSection.classList.add("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <header id="home" className="App-header">
        <ScrambledText text="Dominik Merdzik" delayInterval={2000} hoverScramble={true} showCursor={true} />
        <p>This is a simple portfolio website built with React.</p>
      </header>

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
            <div className="tech-stack">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
                alt="Nextjs"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="c-sharp"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                alt="Java"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                alt="MongoDB"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                alt="MySql"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg"
                alt="Docker"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="Github"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original-wordmark.svg"
                alt="CloudFlare"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg"
                alt="Azure"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original-wordmark.svg"
                alt="Debain"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain-wordmark.svg"
                alt="Unity"
              />
            </div>

            <h3>Experience</h3>
            <div className="experience">
              <h4>Creative One, Huntsville — Web Specialist</h4>
              <p>July 2022 - September 2022</p>
              <p>
                Worked with a team to meet deadlines and accomplish goals with
                clear communication. Held meetings with clients to coordinate
                and create WordPress websites and applications. Adapted to new
                technologies while managing client expectations.
              </p>

              <h4>
                Harveys & Swiss Chalet, Innisfil — Server and Store Opener
              </h4>
              <p>October 2018 - Present</p>
              <p>
                Sharpened teamwork and interpersonal skills. Learned to resolve
                complaints and conflicts independently, adhering to company
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="full-screen">
        <h2>Personal Projects</h2>
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
              "https://via.placeholder.com/400x300",
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
              "https://via.placeholder.com/400x300",
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
              "https://via.placeholder.com/400x300",
            ]}
            technologies="Python, Django, SQLite"
          />
        </div>
      </section>
      <section id="contact" className="full-screen">
        <div id="contact-container">
          <h2>Contact</h2>
          <p>
            You can reach me at <br />
            <a href="mailto:business@dominikmerdzik.com">
              business@dominikmerdzik.com
            </a>
          </p>
          <p>Or through my socials</p>
          <div className="socials-row">
            <ul>
              <li>
                <a href="https://X.com/dominik-merdzik">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
                    alt="X Logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                    alt="LinkedIn Logo"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    alt="Github"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
