const TypingBox = ({ text, input, handleChange, handleKeyDown }) => {
  return (
    <div className="p-4 border rounded-lg">
      <p className="mb-4 text-lg">
        {text.split("").map((char, i) => {
          let color = "";
          if (i < input.length) {
            color = char === input[i] ? "text-green-500" : "text-red-500";
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
        onKeyDown={handleKeyDown}   // 👈 important
        className="w-full p-2 border rounded"
        placeholder="Start typing... (Press Enter to submit)"
      />
    </div>
  );
};

export default TypingBox;