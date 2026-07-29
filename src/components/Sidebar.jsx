import { paragraphs } from "../utils/paragraphs";

const Sidebar = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <aside className="w-full rounded-[24px] border border-[#4f8cff]/20 bg-[#0b1220] p-4 shadow-[0_14px_35px_rgba(255,59,48,0.12)] lg:w-72 lg:shrink-0">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff3b30]/15 text-lg text-[#ff3b30]">
          🕷
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#ff3b30]">Practice Sets</h2>
          <p className="text-sm text-[#7dd3fc]">Choose a paragraph</p>
        </div>
      </div>

      <div className="space-y-2">
        {paragraphs.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
              selectedIndex === index
                ? "border-[#ff3b30]/40 bg-[#ff3b30]/10 text-[#ffdfdf]"
                : "border-transparent bg-[#111c33] text-[#dbeafe] hover:border-[#4f8cff]/20 hover:bg-[#162544] cursor-nwse-pointer"
            }`}
          >
            <p className="text-sm font-medium">Story {index + 1}</p>
            <p className="mt-1 text-xs text-[#7dd3fc]">
              {selectedIndex === index ? "Active now" : "Ready to practice"}
            </p>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;