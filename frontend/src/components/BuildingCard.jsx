function BuildingCard({ name, type, description, icon }) {
  return (
    <div className="building-card">
      <div className="building-image">
        <span>{icon}</span>
      </div>

      <div className="building-content">
        <span className="building-type">
          {type}
        </span>

        <h3>{name}</h3>

        <p>{description}</p>

        <button type="button">
          View Details →
        </button>
      </div>
    </div>
  );
}

export default BuildingCard;