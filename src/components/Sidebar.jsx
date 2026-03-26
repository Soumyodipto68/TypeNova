import { paragraphs } from "../utils/paragraphs";

const Sidebar = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Paragraphs</h2>

      {paragraphs.map((para, index) => (
        <div
          key={index}
          onClick={() => setSelectedIndex(index)}
          className={`p-3 mb-3 rounded cursor-pointer transition ${
            selectedIndex === index
              ? "bg-green-400 text-black"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          <p className="text-sm line-clamp-3">
            Paragraph {index + 1}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;