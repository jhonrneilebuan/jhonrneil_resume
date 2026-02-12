import { useState, useEffect } from "react";

interface UseTypingAnimationOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypingAnimation = ({
  text,
  speed = 80,
  delay = 0,
  onComplete,
}: UseTypingAnimationOptions) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, hasStarted, onComplete]);

  return { displayedText, isComplete, hasStarted };
};
