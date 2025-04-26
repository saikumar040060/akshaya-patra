interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function MenuSidebar({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`text-left px-4 py-2 rounded-md font-bold text-base transition-all ${
            selected === category
              ? "bg-orange-500 text-white"    // active selected
              : "bg-white text-gray-800 hover:bg-orange-100 hover:text-orange-600" // normal
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
