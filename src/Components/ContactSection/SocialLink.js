import React from "react";

const socialLinks = [
  { href: "https://X.com/dominik-merdzik", icon: "twitter", alt: "X Logo" },
  { href: "https://linkedin.com/in/", icon: "linkedin", alt: "LinkedIn Logo" },
  { href: "https://github.com/", icon: "github", alt: "Github" }
];

const SocialLinks = () => (
  <div className="socials-row">
    <ul>
      {socialLinks.map(({ href, icon, alt }) => (
        <li key={icon}>
          <a href={href}>
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
              alt={alt}
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
