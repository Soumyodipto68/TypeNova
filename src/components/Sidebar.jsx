import { paragraphs } from "../utils/paragraphs";

const Sidebar = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <aside className="w-full rounded-[24px] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl lg:w-72 lg:shrink-0">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-lg text-cyan-300">
          ✦
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Practice Sets</h2>
          <p className="text-sm text-slate-400">Choose a paragraph</p>
        </div>
      </div>

      <div className="space-y-2">
        {paragraphs.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
              selectedIndex === index
                ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-100"
                : "border-transparent bg-slate-800/70 text-slate-300 hover:border-white/10 hover:bg-slate-800"
            }`}
          >
            <p className="text-sm font-medium">Paragraph {index + 1}</p>
            <p className="mt-1 text-xs text-slate-400">
              {selectedIndex === index ? "Active now" : "Ready to practice"}
            </p>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;