import SearchBar from "../components/SearchBar";
import BuildingCard from "../components/BuildingCard";

function SearchResults() {
  const results = [
    {
      name: "Main Academic Block",
      type: "ACADEMIC",
      description:
        "Classrooms, lecture halls, departments and student facilities.",
      icon: "🏛️",
    },
    {
      name: "Central Library",
      type: "LIBRARY",
      description:
        "Books, digital resources, study areas and research facilities.",
      icon: "📚",
    },
    {
      name: "Student Center",
      type: "STUDENT SERVICES",
      description:
        "Student support, common areas and campus services.",
      icon: "🎓",
    },
  ];

  return (
    <section className="page-section search-results-page">
      <div className="page-header">
        <span className="section-label">SEARCH CAMPUS</span>

        <h1>Find What You Need</h1>

        <p>
          Search buildings, rooms, departments and campus services.
        </p>
      </div>

      <div className="results-search">
        <SearchBar />
      </div>

      <div className="results-info">
        <h2>Popular Locations</h2>

        <p>
          Explore some of the most frequently visited campus locations.
        </p>
      </div>

      <div className="search-results-grid">
        {results.map((result, index) => (
          <BuildingCard
            key={index}
            name={result.name}
            type={result.type}
            description={result.description}
            icon={result.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;