import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link component
import PageLoader from './pageLoader';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link> {/* Use Link component */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-nav mr-auto mb-2 mb-lg-0">
                <Link className="nav-item nav-link" to="/signin">Sign In</Link> {/* Use Link component */}
                <Link className="nav-item nav-link" to="/mission">Mission</Link> {/* Use Link component */}
                <Link className="nav-item nav-link" to="/about">About</Link> {/* Use Link component */}
              </div>
            </div>
          </div>
        </nav>

        {/* Page content */}
        <div className="container" style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/signin" element={<PageLoader page="signin.html" />} />
            <Route path="/mission" element={<PageLoader page="mission.html" />} />
            <Route path="/about" element={<PageLoader page="about.html" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
