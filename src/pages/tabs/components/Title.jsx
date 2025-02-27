import React, { useState, useEffect } from "react";

const Title = ({
  sequence,
  typingSpeed = 80,
  pauseDuration = 3000,
  isChanging,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;

    const currentString = sequence[loopNum % sequence.length];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prevText) =>
          prevText.substring(0, prevText.length - 1)
        );
        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum((prevLoop) => prevLoop + 1);
        }
      } else {
        const updatedText = currentString.substring(0, displayText.length + 1);
        setDisplayText(updatedText);
        if (updatedText === currentString) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [
    displayText,
    isDeleting,
    loopNum,
    sequence,
    typingSpeed,
    pauseDuration,
    isWaiting,
  ]);

  return (
    <span
      className={`${
        isChanging ? "animate-out" : "animate-in"
      } animation-fill-both opacity-0 text-neutral-200 text-7xl h-20 font-bold max-md:text-center max-md:text-6xl max-md:h-16`}
    >
      {displayText}
    </span>
  );
};

export default Title;
