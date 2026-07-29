const TypingBox = ({ text, input, handleChange, handleKeyDown }) => {
  return (
    <div className="rounded-[24px] border border-[#ff3b30]/25 bg-[#09111d] p-4 shadow-inner shadow-[#4f8cff]/10 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b30]">
          Web Prompt
        </p>
        <p className="text-xs text-[#7dd3fc]">Press Enter to submit</p>
      </div>

      <p className="mb-5 whitespace-pre-wrap rounded-2xl border border-[#4f8cff]/20 bg-[#0f172a] p-4 text-base leading-8 text-[#e2e8f0] sm:text-lg select-none">
        {text.split("").map((char, i) => {
          let color = "text-[#e2e8f0]";
          if (i < input.length) {
            color = char === input[i] ? "text-[#60a5fa]" : "text-[#ff3b30]";
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
        className="min-h-36 w-full rounded-2xl border border-[#4f8cff]/25 bg-[#0f172a] p-4 text-base text-white outline-none transition focus:border-[#ff3b30] focus:ring-2 focus:ring-[#ff3b30]/20"
        placeholder="Start typing and swing through the city..."
      />
    </div>
  );
};

export default TypingBox;