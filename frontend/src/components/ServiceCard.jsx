function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="card-icon">
        {icon}
      </div>

      <div className="service-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <a href="#explore" className="card-link">
          Explore →
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;