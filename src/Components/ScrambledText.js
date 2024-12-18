import React, { useState, useEffect } from "react";

const ScrambledText = ({ id='', text, delayInterval = 1000, hoverScramble = true, showCursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const [hasScrambled, setHasScrambled] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const generateRandomText = (originalText) => {
    return originalText
      .split("")
      .map((char) => char === " " ? " " : letters[Math.floor(Math.random() * letters.length)])
      .join("");
  };

  const scrambleText = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayedText(
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") {
              // Preserve spaces
              return " ";
            } else if (index < iteration) {
              // Once iteration passes the index, show the actual letter
              return letter;
            } else {
              // Otherwise, show a random letter
              return letters[Math.floor(Math.random() * letters.length)];
            }
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setHasScrambled(true);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    setDisplayedText(generateRandomText(text));
    setFadeIn(true);

    const timeout = setTimeout(() => {
      scrambleText();
    }, delayInterval);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [text, delayInterval]);

  const handleMouseOver = () => {
    if (hoverScramble && hasScrambled) {
      scrambleText();
    }
  };

  return (
    <div className="scrambled-text-wrapper" id={id}>
      {showCursor && <span className="terminal-cursor">{">"}</span>}
      <h1
        className={`scrambled-text ${fadeIn ? 'fade-in' : ''} ${hoverScramble ? 'hover-enabled' : ''}`}
        data-value={text}
        onMouseOver={handleMouseOver}
      >
        {displayedText}
      </h1>
    </div>
  );
};

export default ScrambledText;
