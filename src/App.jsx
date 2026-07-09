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

  useEffect(() => {
    resetGame();
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 md:px-6 lg:flex-row lg:px-8 lg:py-8">
        <Sidebar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

        <main className="flex-1 rounded-[28px] border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                Typing Practice
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                TypeNova
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                Sharpen your speed and accuracy with a clean, focused typing experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={resetGame}
                className="rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-700"
              >
                Restart
              </button>
              {!isFinished && (
                <button
                  onClick={stopTimer}
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Submit
                </button>
              )}
            </div>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p className="text-sm text-slate-400">WPM</p>
              <p className="mt-1 text-2xl font-semibold text-cyan-300">{wpm}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p className="text-sm text-slate-400">Accuracy</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-300">{accuracy}%</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <p className="text-sm text-slate-400">Time Left</p>
              <p className="mt-1 text-2xl font-semibold text-fuchsia-300">{timeLeft}s</p>
            </div>
          </div>

          <Timer timeLeft={timeLeft} />

          <div className="mt-6">
            <TypingBox
              text={text}
              input={input}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
            />
          </div>

          {isFinished && (
            <div className="mt-6">
              <Result wpm={wpm} accuracy={accuracy} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;