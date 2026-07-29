import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import TypingBox from "./components/TypingBox";
import Timer from "./components/Timer";
import Result from "./components/Result";
import { paragraphs } from "./utils/paragraphs";
import { useTyping } from "./hooks/useTyping";
import { updatePersonalBest } from "./utils/personalBest";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [personalBest, setPersonalBest] = useState({ bestWPM: 0, bestAccuracy: 0, lastUpdated: null });
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
    closeResult,
    stopTimer,
  } = useTyping(text);

  useEffect(() => {
    resetGame();
  }, [selectedIndex]);

  useEffect(() => {
    const result = updatePersonalBest(wpm, accuracy);
    setPersonalBest(result.personalBest);
  }, [wpm, accuracy]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,59,48,0.18),_transparent_24%),linear-gradient(135deg,_#030711_0%,_#07111f_45%,_#0b1e3a_100%)] text-[#f4f7ff]">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute left-[-8%] top-[-5%] h-[460px] w-[460px] rounded-full border border-[#ff3b30]/20" />
        <div className="absolute right-[-6%] top-[8%] h-[520px] w-[520px] rounded-full border border-[#4f8cff]/20" />
        <div className="absolute bottom-[-10%] left-[20%] h-[430px] w-[430px] rounded-full border border-[#ff3b30]/15" />
        <div className="web-lines absolute inset-0" />
      </motion.div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-4 md:px-6 lg:flex-row lg:px-8 lg:py-8">
        <Sidebar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />

        <motion.main
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 rounded-[30px] border border-[#ff3b30]/30 bg-[#0f172a]/95 p-5 shadow-[0_20px_45px_rgba(255,59,48,0.18)] md:p-8"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-[0.25em] text-[#ff3b30] sm:text-4xl">
                TypeNova
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-[#c7d2fe] sm:text-base">
                Swing into focus with a fast, bold practice session.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={resetGame}
                className="cursor-pointer rounded-xl border border-[#4f8cff]/40 bg-[#111c33] px-4 py-2 text-sm font-semibold text-[#dbeafe] transition hover:border-[#4f8cff] hover:bg-[#162544]"
              >
                Restart
              </button>
              {!isFinished && (
                <button
                  onClick={stopTimer}
                  className="cursor-pointer rounded-xl bg-[#ff3b30] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e62f22]"
                >
                  Submit
                </button>
              )}
            </motion.div>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-2xl border border-[#4f8cff]/20 bg-[#111c33] p-4"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#7dd3fc]">WPM</p>
              <p className="mt-1 text-2xl font-semibold text-white">{wpm}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="rounded-2xl border border-[#4f8cff]/20 bg-[#111c33] p-4"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#7dd3fc]">Accuracy</p>
              <p className="mt-1 text-2xl font-semibold text-white">{accuracy}%</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="rounded-2xl border border-[#4f8cff]/20 bg-[#111c33] p-4"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-[#7dd3fc]">Personal Best</p>
              <p className="mt-1 text-2xl font-semibold text-white">{personalBest.bestWPM} WPM</p>
              <p className="mt-1 text-sm text-[#7dd3fc]">{personalBest.bestAccuracy}% accuracy</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
          >
            <Timer timeLeft={timeLeft} />
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <TypingBox
              text={text}
              input={input}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {isFinished && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 8 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-lg rounded-[24px] border border-[#ff3b30]/30 bg-[#0f172a]/95 p-6 shadow-[0_20px_45px_rgba(255,59,48,0.25)]"
                >
                  <button
                    type="button"
                    onClick={closeResult}
                    className="cursor-pointer absolute right-4 top-4 rounded-full border border-[#4f8cff]/30 bg-[#111c33] px-3 py-1 text-lg text-[#dbeafe] transition hover:border-[#4f8cff] hover:bg-[#162544]"
                    aria-label="Close results"
                  >
                    ×
                  </button>
                  <Result wpm={wpm} accuracy={accuracy} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
}

export default App;