const TypingBox = ({ text, input, handleChange, handleKeyDown }) => {
  return (
    <div className="p-4 rounded-lg">
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
        onKeyDown={handleKeyDown} 
        className="w-full p-2  rounded"
        placeholder="Start typing... (Press Enter to submit)"
      />
    </div>
  );
};

export default TypingBox;