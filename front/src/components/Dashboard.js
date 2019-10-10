import React, { useState } from 'react';
import { Charts } from '../shared/shareReduce';

function Dashboard(props) {
  return (
    <div className="dashboard-wrapper">
      <div className="top-dashboard">
        {/* Welcome Name */}
        <div className="left-dashboard">
          <h1>Welcome, {props.user}</h1>
          <div className="dash-user-buttons">
            <div className="btn smaller">Account</div>
            <div className="btn smaller">Graphs</div>
            <div className="btn smaller">Settings</div>
          </div>
        </div>
        {/* Suggested Graph */}
        <div className="right-dashboard">
          <h1>{props.crypto}</h1>
          <Charts />
        </div>
      </div>

      {/* News Feed Footer */}
      <div className="footer-dashboard">
        <h1>News Feed</h1>
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
