import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrambledText from "./Components/ScrambledText";
import AboutSection from "./Components/AboutSection/AboutSection";
import Project from "./Components/ProjectSection/Project";
import ContactSection from "./Components/ContactSection/ContactSection";
import DecodedText from "./Components/DecodedText";
import "./App.css";

// Project Data
const projects = [
  {
    title: "RaspberryPi Statistics Webapp",
    shortDescription: "Raspberry-Pi Statistics Web App",
    longDescription:
      "A web application I designed to monitor and display system statistics of my Raspberry Pi, hosted in my basement 😅. " +
      "It's built with Next.js and TypeScript, styled using Tailwind CSS, and hosted on a Raspberry Pi 3 with 1GB of memory. " +
      "The dashboard shows metrics like CPU usage, memory usage, disk usage, and network status. " +
      "The code structure includes an API for fetching and components for displaying these metrics, along with configurations for Cloudflare tunnels. " +
      "I hosted this app publicly to expand my knowledge of Cloudflare by registering a new domain, setting up DNS records, enabling security features, " +
      "and configuring Cloudflare tunnels to point to my Raspberry Pi.",  
    imageSrc: "/Images/raspberry-pi-project.png",
    githubLink: "https://github.com/dominik-merdzik/Raspberrypi-Status-App.git",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    technologies:
      "NextJS Framework (React), TypeScript, Tailwind, RaspberryPi 3, Debain Linux, Cloudflare Tunnels, Cloudflare DNS",
  },
  {
    title: "Personal Hub - Schedule Organizer",
    shortDescription: "Personal Schedule Organizer",
    longDescription: "The Personal Hub Project is a personal organization web app designed to centralize schedules, events, meetings, and more. " +
      "Built with ASP.NET and C#, it features tools like a calendar and Google Maps integration. " +
      "Users can connect, share schedules, and organize their lives through categories and schedules. " +
      "The app was hosted on the Azure platform and aims to expand with future features like email updates and enhanced sorting options. " +
      "The project is in an ongoing development phase, with plans for significant enhancements.",
    imageSrc: "/Images/personal-hub-project.png",
    githubLink: "https://github.com/dominik-merdzik/Personal-Hub-Project.git",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    technologies: ".NET Framework, C#, Microsoft SQL, Azure Hosting, Bootstrap",
  },
  {
    title: "OpenGL Bunny & Dragon Objects",
    shortDescription: "OpenGL Bunny & Dragon Objects",
    longDescription:
      "Assignment for 3rd year Computer Graphics course. Read a number of 3D point positions from a OBJ file and render them onto the screen. Besides becoming familiar with the linear algebra involved in rendering 3D scenes, this project got me familiar with the tools and libraries that are used while working with OpenGL. These include GLFW and GLEW, as well as GLM."+
      "",
    imageSrc: "/Images/bnd-project.png",
    githubLink: "https://github.com/dominik-merdzik/OpenGL-bunny_and_dragon.git",
    images: [
      "https://via.placeholder.com/400x300",
      "https://via.placeholder.com/400x300",
    ],
    technologies: "C++, OpenGL Framework, GLFW, GLEW, GLM, Blender, A lot of Linear Algebra",
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
        <div className="Scramble-container">
          <ScrambledText
            text="Dominik Merdzik"
            delayInterval={1500}
            hoverScramble={true}
            showCursor={true}
          />
          <ScrambledText
            id="scramble-line-2"
            text="Full-Stack Developer"
            delayInterval={3000}
            hoverScramble={false}
            showCursor={false}
          />
        </div>
        <DecodedText text="00110010-00110000-00110010-00110100" />
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
