import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrambledText from "./Components/ScrambledText";
import AboutSection from "./Components/AboutSection/AboutSection";
import Project from "./Components/ProjectSection/Project";
import ContactSection from "./Components/ContactSection/ContactSection";
import "./App.css";

// Project Data
const projects = [
  {
    title: "Bunny & Dragon Objects",
    shortDescription: "Bunny & Dragon Objects",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/Images/bnd-project.png",
    githubLink: "https://github.com/profile/project1",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    technologies: "React, CSS, HTML",
  },
  {
    title: "Personal Hub Life Organzier",
    shortDescription: "Personal Hub Life Organzier",
    longDescription: "Detailed description for Project 2...",
    imageSrc: "/Images/personal-hub-project.png",
    githubLink: "https://github.com/profile/project2",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    technologies: "JavaScript, Node.js, Express",
  },
  {
    title: "See-n-Say Storymaker Online",
    shortDescription: "See-n-Say Storymaker Online",
    longDescription: "Detailed description for Project 3...",
    imageSrc: "/Images/see-n-play-project.png",
    githubLink:
      "https://github.com/dominik-merdzik/See-n-Say-Storymaker-Online",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    technologies: "Python, Django, SQLite",
  },
];

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
        <ScrambledText
          text="Dominik Merdzik"
          delayInterval={2000}
          hoverScramble={true}
          showCursor={true}
        />
        <p>This is a simple portfolio website built with React.</p>
      </header>

      <AboutSection />

      <section id="projects" className="full-screen">
        <h2>Personal Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>

      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;
