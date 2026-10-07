function Map() {
  return (
    <div className="campus-map">

      {/* Map Header */}
      <div className="campus-map-header">
        <div>
          <span className="section-label">
            CAMPUS NAVIGATION
          </span>

          <h3>Interactive Campus Map</h3>
        </div>

        <button
          type="button"
          className="map-location-btn"
        >
          📍 My Location
        </button>
      </div>

      {/* Map Area */}
      <div className="interactive-map">

        {/* Roads */}
        <div className="map-road map-road-1"></div>
        <div className="map-road map-road-2"></div>
        <div className="map-road map-road-3"></div>

        {/* Buildings */}
        <div className="campus-building cb-1">
          <strong>Academic Block</strong>
          <span>Building A</span>
        </div>

        <div className="campus-building cb-2">
          <strong>Library</strong>
          <span>Building B</span>
        </div>

        <div className="campus-building cb-3">
          <strong>Student Center</strong>
          <span>Building C</span>
        </div>

        <div className="campus-building cb-4">
          <strong>Administration</strong>
          <span>Building D</span>
        </div>

        {/* User Location */}
        <div className="user-location">
          📍
        </div>

      </div>
    </div>
  );
}

export default Map;