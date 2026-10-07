const API_BASE_URL = "http://localhost:5000/api";

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `API request failed: ${response.status}`);
  }

  return data;
}

export const api = {
  // Buildings
  getBuildings: () => apiRequest("/buildings"),

  getBuildingById: (id) =>
    apiRequest(`/buildings/${id}`),

  // Departments
  getDepartments: () =>
    apiRequest("/departments"),

  getDepartmentById: (id) =>
    apiRequest(`/departments/${id}`),

  // Services
  getServices: () =>
    apiRequest("/services"),

  getServiceById: (id) =>
    apiRequest(`/services/${id}`),

  // Rooms
  getRooms: () =>
    apiRequest("/rooms"),

  getRoomById: (id) =>
    apiRequest(`/rooms/${id}`),

  // Office Hours
  getOfficeHours: () =>
    apiRequest("/office-hours"),

  getOfficeHoursByDepartment: (departmentId) =>
    apiRequest(`/office-hours/department/${departmentId}`),

  // Search
  search: (query) =>
    apiRequest(`/search?q=${encodeURIComponent(query)}`),

  // Auth
  register: (userData) =>
    apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  login: (credentials) =>
    apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
};

export default api;