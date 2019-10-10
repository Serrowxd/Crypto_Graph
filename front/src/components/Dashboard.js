import React, { useState } from 'react';
import { Charts, LoginModal } from '../shared/shareReduce';

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="top-dashboard">
        {/* Welcome Name */}
        <div className="left-dashboard">
          <h1>Henlo (OvO")</h1>
        </div>
        {/* Suggested Graph */}
        <div className="right-dashboard">
          <h1>Henlo (OvO")</h1>
          <Charts />
        </div>
      </div>

      {/* News Feed Footer */}
      <div className="footer-dashboard">
        <h1>Henlo (OvO")</h1>
        <div className="footer-container">
          <div className="left-feed">
            <h1>Henlo(OvO")</h1>
          </div>
          <div className="right-feed">
            <h1>Henlo(OvO")</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
