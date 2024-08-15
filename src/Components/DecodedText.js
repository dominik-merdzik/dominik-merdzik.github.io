import React, { useState } from "react";

const DecodedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);
  const [hasDecoded, setHasDecoded] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";

  const decodeBinary = (binaryString) => {
    return binaryString
      .split("-")
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  };

  const scrambleText = (decodedText) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        decodedText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return decodedText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= decodedText.length) {
        clearInterval(interval);
        setHasDecoded(true);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleDecode = () => {
    if (!isDecoding) {
      setIsDecoding(true);
      const decodedText = decodeBinary(text);
      scrambleText(decodedText);
    }
  };

  return (
    <div
      className={`decoded-text ${!hasDecoded ? "bounce" : ""}`}
      onClick={handleDecode}
    >
      {displayedText}
    </div>
  );
};

export default DecodedText;
