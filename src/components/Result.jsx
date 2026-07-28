import { useState, useEffect } from "react";
import { updatePersonalBest } from "../utils/personalBest";

const Result = ({ wpm, accuracy }) => {
  const [personalBest, setPersonalBest] = useState(null);

  useEffect(() => {
    const result = updatePersonalBest(wpm, accuracy);
    setPersonalBest(result.personalBest);
  }, [wpm, accuracy]);

  if (!personalBest) return null;

  return (
    <div className="w-full max-w-2xl rounded-[24px] border border-[#4f8cff]/20 bg-[#09111d] p-6 shadow-[0_12px_30px_rgba(255,59,48,0.12)]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b30]">
            Results
          </p>
          <h2 className="text-2xl font-bold text-white">Great run!</h2>
        </div>
        <div className="rounded-full border border-[#4f8cff]/20 bg-[#111c33] px-3 py-1 text-sm text-[#7dd3fc]">
          New record
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#4f8cff]/20 bg-[#0f172a] p-4">
          <h3 className="mb-2 text-sm uppercase tracking-[0.16em] text-[#7dd3fc]">Current Test</h3>
          <p className="text-3xl font-bold text-white">{wpm} WPM</p>
          <p className="mt-1 text-lg text-[#c7d2fe]">{accuracy}% Accuracy</p>
        </div>

        <div className="rounded-2xl border border-[#4f8cff]/20 bg-[#0f172a] p-4">
          <h3 className="mb-2 text-sm uppercase tracking-[0.16em] text-[#7dd3fc]">Personal Best</h3>
          <p className="text-3xl font-bold text-white">
            {personalBest.bestWPM} WPM {wpm > personalBest.bestWPM ? "🕷" : ""}
          </p>
          <p className="mt-1 text-lg text-[#c7d2fe]">
            {personalBest.bestAccuracy}% Accuracy {accuracy > personalBest.bestAccuracy ? "🎯" : ""}
          </p>
        </div>
      </div>

      {personalBest.lastUpdated && (
        <p className="mt-4 text-sm text-[#7dd3fc]">Last updated: {personalBest.lastUpdated}</p>
      )}
    </div>
  );
};

export default Result;