import React, { useState } from 'react';
import { Charts, FeedEntry } from '../shared/shareReduce';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Dashboard(props) {
  const [footer, setFooter] = useState(true);

  function footerHandler() {
    setFooter(!footer);
  }

  return (
    <div className="dashboard-wrapper">
      <div className="top-dashboard">
        {/* Welcome Name */}
        <div className="left-dashboard">
          <h1>Welcome, {props.user}</h1>
          <div className="dash-user-buttons">
            <Link to="/account" onClick={props.window} className="btn smaller">
              Account
            </Link>
            <Link to="/graphs" onClick={props.window} className="btn smaller">
              Graphs
            </Link>
            <Link to="/settings" onClick={props.window} className="btn smaller">
              Settings
            </Link>
          </div>
        </div>
        {/* Suggested Graph */}
        <div className="right-dashboard">
          <h1>{props.crypto}</h1>
          <Charts />
        </div>
      </div>

      {/* News Feed Footer */}
      <div className={footer ? 'footer-dashboard footer-tuck' : 'footer-dashboard'}>
        <h1 className="feed-title" onClick={footerHandler}>
          News Feed
        </h1>
        <div className="footer-container">
          <div className="left-feed">
            <FeedEntry />
            <FeedEntry />
          </div>
          <div className="right-feed">
            <FeedEntry />
            <FeedEntry />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
