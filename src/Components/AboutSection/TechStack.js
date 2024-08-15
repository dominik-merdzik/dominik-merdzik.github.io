import React from "react";

const techIcons = [
  { name: "react", type: "original" },
  { name: "nextjs", type: "original-wordmark" },
  { name: "csharp", type: "original" },
  { name: "java", type: "original-wordmark" },
  { name: "python", type: "original" },
  { name: "mongodb", type: "original-wordmark" },
  { name: "mysql", type: "original-wordmark" },
  { name: "docker", type: "plain-wordmark" },
  { name: "github", type: "original" },
  { name: "amazonwebservices", type: "original-wordmark" },
  { name: "cloudflare", type: "original-wordmark" },
  { name: "azure", type: "original-wordmark" },
  { name: "debian", type: "original-wordmark" },
  { name: "unity", type: "plain-wordmark" }
];

const TechStack = () => (
  <div className="tech-stack">
    {techIcons.map(({ name, type }) => (
      <img
        key={name}
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${type}.svg`}
        alt={name}
      />
    ))}
  </div>
);

export default TechStack;
