const Timer = ({ timeLeft }) => {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-[#4f8cff]/25 bg-[#111c33] px-4 py-3 text-sm font-medium text-[#dbeafe]">
      <span className="flex h-2.5 w-2.5 rounded-full bg-[#ff3b30]" />
      <span>Time remaining: {timeLeft}s</span>
    </div>
  );
};

export default Timer;