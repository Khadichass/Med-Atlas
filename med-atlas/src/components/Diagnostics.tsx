import React from 'react';

const Diagnostics: React.FC = () => {
  return (
    <section id="diagnostics" className="diagnostics">
      <h2>Diagnostic Tools</h2>
      <div className="diagnostics-content">
        <div className="tool-card">
          <h3>Symptom Checker</h3>
          <p>Input your symptoms to get potential diagnoses</p>
          <button className="tool-button">Try Symptom Checker</button>
        </div>
        <div className="tool-card">
          <h3>Lab Results Analyzer</h3>
          <p>Understand your medical test results</p>
          <button className="tool-button">Analyze Results</button>
        </div>
        <div className="tool-card">
          <h3>Medication Checker</h3>
          <p>Check drug interactions and side effects</p>
          <button className="tool-button">Check Medications</button>
        </div>
      </div>
    </section>
  );
};

export default Diagnostics; 