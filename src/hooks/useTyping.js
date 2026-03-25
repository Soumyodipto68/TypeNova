import { useState, useRef } from "react";

export const useTyping = (text) => {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isStarted) {
      setIsStarted(true);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(timerRef.current);
            setIsFinished(true);
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsFinished(true);
  };

  const handleChange = (e) => {
    if (isFinished) return;
    setInput(e.target.value);
    startTimer();
  };

  // 👉 ENTER key submit
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      stopTimer();
    }
  };

  const characters = input.length;
  const correctChars = input
    .split("")
    .filter((char, i) => char === text[i]).length;

  const accuracy = characters
    ? ((correctChars / characters) * 100).toFixed(2)
    : 0;

  const timeSpent = (60 - timeLeft) / 60;

  const wpm = timeSpent > 0
    ? Math.round((correctChars / 5) / timeSpent)
    : 0;

  const resetGame = () => {
    setInput("");
    setTimeLeft(60);
    setIsStarted(false);
    setIsFinished(false);
    clearInterval(timerRef.current);
  };

  return {
    input,
    handleChange,
    handleKeyDown,
    timeLeft,
    wpm,
    accuracy,
    isFinished,
    resetGame,
    stopTimer,
  };
};