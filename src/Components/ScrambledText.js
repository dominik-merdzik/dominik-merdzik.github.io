import React, { useState, useEffect } from "react";

const ScrambledText = ({ text, delayInterval = 1000, hoverScramble = true, showCursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [fadeIn, setFadeIn] = useState(false);
  const [hasScrambled, setHasScrambled] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456790_";

  const generateRandomText = (length) => {
    return Array.from({ length }, () => letters[Math.floor(Math.random() * 26)]).join('');
  };

  const scrambleText = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
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
    setDisplayedText(generateRandomText(text.length));
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
    <div className="scrambled-text-wrapper">
      {showCursor && <span className="terminal-cursor">{">"}</span>}
      <h1 className={`scrambled-text ${fadeIn ? 'fade-in' : ''}`} data-value={text} onMouseOver={handleMouseOver}>
        {displayedText}
      </h1>
    </div>
  );
};

export default ScrambledText;
