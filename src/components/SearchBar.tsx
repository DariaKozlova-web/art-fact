import { useState } from "react";
import { Search } from "lucide-react";

type Props = {
  onSearch: (query: string) => void;
};

export function SearchBar({ onSearch }: Props) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="max-w-xl mx-auto">
      <div className="search-wrapper">
        <Search size={18} className="opacity-60 ml-3" />

        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch(searchText);
          }}
          placeholder="Search artworks, artists, movements..."
          className="search-input"
        />

        <button
          onClick={() => onSearch(searchText)}
          className="search-btn"
        >
          Search
        </button>
      </div>
    </div>
  );
}