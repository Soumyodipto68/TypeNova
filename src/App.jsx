import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import TypingBox from "./components/TypingBox";
import Timer from "./components/Timer";
import Result from "./components/Result";
import { paragraphs } from "./utils/paragraphs";
import { useTyping } from "./hooks/useTyping";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const text = paragraphs[selectedIndex];

  const {
    input,
    handleChange,
    handleKeyDown,
    timeLeft,
    wpm,
    accuracy,
    isFinished,
    resetGame,
    stopTimer,
  } = useTyping(text);

  // 🔁 Reset typing when paragraph changes
  useEffect(() => {
    resetGame();
  }, [selectedIndex]);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      
      {/* 📚 Sidebar */}
      <Sidebar
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />

      {/* 🖥 Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          ⌨️ TypeSprint
        </h1>

        {/* Timer */}
        <Timer timeLeft={timeLeft} />

        {/* Typing Box */}
        <div className="w-full max-w-2xl mt-4">
          <TypingBox
            text={text}
            input={input}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        </div>

        {/* 📊 Live Stats */}
        <div className="mt-4 flex gap-6 text-lg">
          <p>⚡ WPM: {wpm}</p>
          <p>🎯 Accuracy: {accuracy}%</p>
          <p>⏱ Time: {timeLeft}s</p>
        </div>

        {/* ✅ Submit Button */}
        {!isFinished && (
          <button
            onClick={stopTimer}
            className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-400 rounded-lg transition"
          >
            Submit
          </button>
        )}

        {/* 🔁 Restart Button */}
        <button
          onClick={resetGame}
          className="mt-3 px-6 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg transition"
        >
          Restart
        </button>

        {/* 📊 Result */}
        {isFinished && (
          <div className="mt-6">
            <Result wpm={wpm} accuracy={accuracy} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;