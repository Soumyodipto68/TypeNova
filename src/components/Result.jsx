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
    <div className="w-full max-w-2xl rounded-[24px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-slate-900/80 p-6 shadow-lg shadow-emerald-500/10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Results
          </p>
          <h2 className="text-2xl font-bold text-white">Great run!</h2>
        </div>
        <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
          New record
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
          <h3 className="mb-2 text-sm text-slate-400">Current Test</h3>
          <p className="text-3xl font-bold text-cyan-300">{wpm} WPM</p>
          <p className="mt-1 text-lg text-emerald-300">{accuracy}% Accuracy</p>
        </div>

        <div className="rounded-2xl border border-amber-400/20 bg-slate-900/80 p-4">
          <h3 className="mb-2 text-sm text-slate-400">Personal Best</h3>
          <p className="text-3xl font-bold text-amber-300">
            {personalBest.bestWPM} WPM {wpm > personalBest.bestWPM ? "⭐" : ""}
          </p>
          <p className="mt-1 text-lg text-amber-200">
            {personalBest.bestAccuracy}% Accuracy {accuracy > personalBest.bestAccuracy ? "🎯" : ""}
          </p>
        </div>
      </div>

      {personalBest.lastUpdated && (
        <p className="mt-4 text-sm text-slate-400">Last updated: {personalBest.lastUpdated}</p>
      )}
    </div>
  );
};

export default Result;