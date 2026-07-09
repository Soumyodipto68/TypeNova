const TypingBox = ({ text, input, handleChange, handleKeyDown }) => {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-4 shadow-inner shadow-black/20 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Prompt
        </p>
        <p className="text-xs text-slate-500">Press Enter to submit</p>
      </div>

      <p className="mb-5 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-base leading-8 text-slate-300 sm:text-lg">
        {text.split("").map((char, i) => {
          let color = "text-slate-300";
          if (i < input.length) {
            color = char === input[i] ? "text-emerald-400" : "text-rose-400";
          }
          return (
            <span key={i} className={color}>
              {char}
            </span>
          );
        })}
      </p>

      <textarea
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="min-h-36 w-full rounded-2xl border border-slate-700 bg-slate-900/90 p-4 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        placeholder="Start typing here and watch your progress..."
      />
    </div>
  );
};

export default TypingBox;