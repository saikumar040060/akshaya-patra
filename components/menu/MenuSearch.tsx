interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export default function MenuSearch({ value, onChange, onClear }: Props) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="relative w-full max-w-xs"> {/* limit max width */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md border border-gray-300 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {value && (
          <button
            onClick={onClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-orange-500 hover:text-orange-600"
          >
            ✖
          </button>
        )}
      </div>
    </div>
  );
}
