import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    window.location.href = `/search?q=${encodeURIComponent(trimmedQuery)}`;
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <span className="search-icon">⌕</span>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search buildings, rooms, departments..."
        aria-label="Search campus"
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;