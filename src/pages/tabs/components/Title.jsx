import React, { useState, useEffect } from "react";

const Title = ({
  sequence,
  typingSpeed = 50,
  pauseDuration = 3000,
  isChanging,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = sequence[loopNum % sequence.length];
      const updatedText = isDeleting
        ? currentString.substring(0, displayText.length - 1)
        : currentString.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentString) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, loopNum, sequence, typingSpeed, pauseDuration]);

  return (
    <span
      className={`${
        isChanging ? "animate-out" : "animate-in"
      } animation-fill-both opacity-0 text-neutral-200 text-7xl h-20 font-bold max-md:text-center`}
    >
      {displayText}
    </span>
  );
};

export default Title;
