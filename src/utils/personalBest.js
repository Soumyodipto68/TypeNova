// Personal Best Tracking Utility
const STORAGE_KEY = "typenova_personal_best";

export const getPersonalBest = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : { bestWPM: 0, bestAccuracy: 0, lastUpdated: null };
};

export const updatePersonalBest = (wpm, accuracy) => {
  const current = getPersonalBest();
  let newWPMRecord = false;
  let newAccuracyRecord = false;
  let newBest = { ...current };

  if (wpm > current.bestWPM) {
    newBest.bestWPM = wpm;
    newWPMRecord = true;
  }

  if (accuracy > current.bestAccuracy) {
    newBest.bestAccuracy = accuracy;
    newAccuracyRecord = true;
  }

  if (newWPMRecord || newAccuracyRecord) {
    newBest.lastUpdated = new Date().toLocaleDateString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newBest));
  }

  return { 
    newWPMRecord, 
    newAccuracyRecord, 
    personalBest: newBest 
  };
};

export const resetPersonalBest = () => {
  localStorage.removeItem(STORAGE_KEY);
};
