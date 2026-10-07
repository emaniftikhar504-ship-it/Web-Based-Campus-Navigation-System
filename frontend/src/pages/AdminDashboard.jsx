function AdminDashboard() {
  const managementItems = [
    {
      icon: "🏢",
      title: "Buildings",
      description: "Add, update and manage campus buildings.",
      count: "50+",
    },
    {
      icon: "🎓",
      title: "Departments",
      description: "Manage academic departments and information.",
      count: "20+",
    },
    {
      icon: "🚪",
      title: "Rooms",
      description: "Manage rooms, classrooms and locations.",
      count: "100+",
    },
    {
      icon: "🛠️",
      title: "Services",
      description: "Manage available campus services.",
      count: "20+",
    },
  ];

  return (
    <section className="admin-page">
      <div className="admin-container">

        {/* Header */}
        <div className="page-header admin-header">
          <div>
            <span className="section-label">
              ADMINISTRATION
            </span>

            <h1>Admin Dashboard</h1>

            <p>
              Manage campus buildings, departments,
              rooms and services from one place.
            </p>
          </div>

          <div className="admin-profile">
            <div className="admin-avatar">
              A
            </div>

            <div>
              <strong>Administrator</strong>
              <span>Campus Admin</span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="admin-overview">

          <div className="overview-card">
            <span>🏢</span>
            <div>
              <strong>50+</strong>
              <small>Buildings</small>
            </div>
          </div>

          <div className="overview-card">
            <span>🎓</span>
            <div>
              <strong>20+</strong>
              <small>Departments</small>
            </div>
          </div>

          <div className="overview-card">
            <span>🚪</span>
            <div>
              <strong>100+</strong>
              <small>Rooms</small>
            </div>
          </div>

          <div className="overview-card">
            <span>🛠️</span>
            <div>
              <strong>20+</strong>
              <small>Services</small>
            </div>
          </div>

        </div>

        {/* Management */}
        <div className="admin-section">
          <div className="section-heading">
            <span className="section-label">
              MANAGEMENT
            </span>

            <h2>Campus Management</h2>

            <p>
              Select a category to manage its information.
            </p>
          </div>

          <div className="admin-grid">
            {managementItems.map((item, index) => (
              <div className="admin-card" key={index}>

                <div className="admin-card-icon">
                  {item.icon}
                </div>

                <div className="admin-card-content">
                  <span className="admin-count">
                    {item.count}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button type="button">
                    Manage {item.title} →
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="admin-section activity-section">

          <div className="section-heading">
            <span className="section-label">
              SYSTEM ACTIVITY
            </span>

            <h2>Recent Activity</h2>
          </div>

          <div className="activity-list">

            <div className="activity-item">
              <span>🏢</span>
              <div>
                <strong>Building information updated</strong>
                <p>Main Academic Block</p>
              </div>
              <small>Recently</small>
            </div>

            <div className="activity-item">
              <span>🎓</span>
              <div>
                <strong>Department information updated</strong>
                <p>Computer Science Department</p>
              </div>
              <small>Recently</small>
            </div>

            <div className="activity-item">
              <span>🛠️</span>
              <div>
                <strong>Campus service added</strong>
                <p>Student Support Center</p>
              </div>
              <small>Recently</small>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AdminDashboard;