import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import BuildingDetails from "./pages/BuildingDetails";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/search"
              element={<SearchResults />}
            />

            <Route
              path="/building/:id"
              element={<BuildingDetails />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/admin"
              element={<AdminDashboard />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;