import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import BuildingCard from "../components/BuildingCard";
import Map from "../components/Map";

function Home() {
  const services = [
    {
      icon: "📍",
      title: "Campus Navigation",
      description:
        "Find buildings, rooms and important locations around your campus.",
    },
    {
      icon: "🔎",
      title: "Smart Search",
      description:
        "Quickly search for departments, rooms, buildings and campus services.",
    },
    {
      icon: "🏢",
      title: "Building Information",
      description:
        "Explore building details, facilities, locations and opening hours.",
    },
  ];

  const buildings = [
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
        "Student support, common areas, activities and campus services.",
      icon: "🎓",
    },
  ];

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-container">

          <div className="hero-content">

            <span className="hero-badge">
              SMART CAMPUS NAVIGATION
            </span>

            <h1>
              Explore Your Campus.
              <br />
              <span>Find Your Way.</span>
            </h1>

            <p>
              Navigate your campus with ease. Find buildings,
              rooms, departments and services all in one place.
            </p>

            <SearchBar />

            <div className="hero-stats">

              <div className="stat">
                <strong>50+</strong>
                <span>Locations</span>
              </div>

              <div className="stat">
                <strong>20+</strong>
                <span>Services</span>
              </div>

              <div className="stat">
                <strong>24/7</strong>
                <span>Access</span>
              </div>

            </div>
          </div>

          {/* HERO MAP PREVIEW */}
          <div className="hero-map">
            <div className="map-preview">

              <div className="map-grid"></div>

              <div className="map-pin pin-1">📍</div>
              <div className="map-pin pin-2">📍</div>
              <div className="map-pin pin-3">📍</div>

              <div className="map-label label-1">
                Academic Block
              </div>

              <div className="map-label label-2">
                Library
              </div>

              <div className="map-label label-3">
                Student Center
              </div>

              <div className="map-user">
                ●
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="section-container">

          <div className="section-heading">
            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Everything You Need
              <br />
              <span>On Campus</span>
            </h2>

            <p>
              CampusNav makes finding and exploring your
              campus simple and convenient.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

        </div>
      </section>

      {/* BUILDINGS SECTION */}
      <section className="buildings-section" id="buildings">
        <div className="section-container">

          <div className="section-heading buildings-heading">
            <div>
              <span className="section-label">
                EXPLORE CAMPUS
              </span>

              <h2>
                Popular Campus
                <br />
                <span>Locations</span>
              </h2>
            </div>

            <a href="/search" className="view-all">
              View All →
            </a>
          </div>

          <div className="buildings-grid">
            {buildings.map((building, index) => (
              <BuildingCard
                key={index}
                name={building.name}
                type={building.type}
                description={building.description}
                icon={building.icon}
              />
            ))}
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section" id="map">
        <div className="section-container">

          <div className="map-section-heading">
            <span className="section-label">
              CAMPUS MAP
            </span>

            <h2>
              Your Campus,
              <br />
              <span>at Your Fingertips.</span>
            </h2>

            <p>
              Explore campus locations and easily find
              your destination.
            </p>
          </div>

          <Map />

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">

          <div>
            <span className="section-label">
              GET STARTED
            </span>

            <h2>
              Ready to Explore
              <br />
              Your Campus?
            </h2>

            <p>
              Find your destination and make campus
              navigation easier.
            </p>
          </div>

          <a href="/search" className="primary-btn">
            Start Exploring →
          </a>

        </div>
      </section>

    </div>
  );
}

export default Home;