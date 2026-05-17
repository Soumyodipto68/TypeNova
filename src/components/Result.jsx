import { useState, useEffect } from "react";
import { getPersonalBest, updatePersonalBest } from "../utils/personalBest";

const Result = ({ wpm, accuracy }) => {
  const [personalBest, setPersonalBest] = useState(null);
  const [newRecords, setNewRecords] = useState({ wpm: false, accuracy: false });

  useEffect(() => {
    const result = updatePersonalBest(wpm, accuracy);
    setPersonalBest(result.personalBest);
    setNewRecords({
      wpm: result.newWPMRecord,
      accuracy: result.newAccuracyRecord
    });
  }, [wpm, accuracy]);

  if (!personalBest) return null;

  return (
    <div className="mt-6 bg-gray-800 p-6 rounded-lg max-w-2xl w-full">
      <h2 className="text-2xl font-bold mb-4">📊 Test Results</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Current Results */}
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-sm text-gray-300 mb-2">Current Test</h3>
          <p className="text-2xl font-bold text-blue-400">{wpm} WPM</p>
          <p className="text-lg text-green-400">{accuracy}% Accuracy</p>
        </div>

        {/* Personal Best */}
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-sm text-gray-300 mb-2">Personal Best</h3>
          <p className="text-2xl font-bold text-yellow-400">
            {personalBest.bestWPM} WPM {wpm > personalBest.bestWPM ? "⭐" : ""}
          </p>
          <p className="text-lg text-yellow-300">
            {personalBest.bestAccuracy}% Accuracy {accuracy > personalBest.bestAccuracy ? "🎯" : ""}
          </p>
        </div>
      </div>

      {personalBest.lastUpdated && (
        <p className="text-sm text-gray-400 mt-4">Last updated: {personalBest.lastUpdated}</p>
      )}
    </div>
  );
};

export default Result;