import { useParams } from "react-router-dom";

function BuildingDetails() {
  const { id } = useParams();

  return (
    <section className="page-section building-details-page">
      <div className="building-details">

        <div className="details-top">
          <div>
            <span className="section-label">
              BUILDING INFORMATION
            </span>

            <h1>Main Academic Block</h1>

            <p className="details-description">
              The Main Academic Block is one of the main
              academic facilities on campus. It contains
              classrooms, lecture halls, departments and
              student facilities.
            </p>
          </div>

          <div className="details-icon">
            🏛️
          </div>
        </div>

        {/* Building Information */}
        <div className="details-grid">

          <div className="detail-card">
            <span>📍 Location</span>
            <strong>Central Campus</strong>
          </div>

          <div className="detail-card">
            <span>🏢 Building Type</span>
            <strong>Academic Building</strong>
          </div>

          <div className="detail-card">
            <span>🕐 Opening Hours</span>
            <strong>8:00 AM – 6:00 PM</strong>
          </div>

          <div className="detail-card">
            <span>🚪 Facilities</span>
            <strong>Classrooms & Offices</strong>
          </div>

        </div>

        {/* Departments */}
        <div className="building-info-section">
          <span className="section-label">
            AVAILABLE FACILITIES
          </span>

          <h2>What's Inside?</h2>

          <div className="facility-list">

            <div className="facility-item">
              <span>📚</span>
              <div>
                <strong>Classrooms</strong>
                <p>
                  Modern classrooms for lectures and academic activities.
                </p>
              </div>
            </div>

            <div className="facility-item">
              <span>🎓</span>
              <div>
                <strong>Academic Departments</strong>
                <p>
                  Multiple academic departments and faculty offices.
                </p>
              </div>
            </div>

            <div className="facility-item">
              <span>💻</span>
              <div>
                <strong>Computer Labs</strong>
                <p>
                  Computer facilities for practical learning and projects.
                </p>
              </div>
            </div>

            <div className="facility-item">
              <span>🪑</span>
              <div>
                <strong>Student Areas</strong>
                <p>
                  Dedicated spaces for students and academic activities.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Action */}
        <div className="details-actions">
          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              window.location.href = "/#map";
            }}
          >
            📍 Show on Map
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={() => {
              window.history.back();
            }}
          >
            ← Go Back
          </button>
        </div>

        <small className="building-id">
          Building ID: {id}
        </small>

      </div>
    </section>
  );
}

export default BuildingDetails;