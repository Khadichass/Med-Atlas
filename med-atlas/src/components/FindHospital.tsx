import React from 'react';

const FindHospital: React.FC = () => {
  return (
    <section id="find-hospital" className="find-hospital">
      <h2>Find a Hospital</h2>
      <div className="hospital-finder">
        <div className="search-container">
          <input type="text" placeholder="Enter your location" />
          <select>
            <option value="">Select specialty</option>
            <option value="general">General Hospital</option>
            <option value="specialty">Specialty Clinic</option>
            <option value="emergency">Emergency Care</option>
          </select>
          <button>Search</button>
        </div>
        <div className="hospital-results">
          <div className="hospital-card">
            <h3>City General Hospital</h3>
            <p>123 Medical Center Drive</p>
            <p>Emergency Services Available</p>
            <a href="#" className="view-details">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindHospital; 