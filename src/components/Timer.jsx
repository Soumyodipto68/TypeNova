const Timer = ({ timeLeft }) => {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-200">
      <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
      <span>Time remaining: {timeLeft}s</span>
    </div>
  );
};

export default Timer;