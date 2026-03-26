const Result = ({ wpm, accuracy }) => {
  return (
    <div className="mt-4">
      <h2>WPM: {wpm} </h2>
      <h2>Accuracy: {accuracy}%</h2>
    </div>
  );
};

export default Result;