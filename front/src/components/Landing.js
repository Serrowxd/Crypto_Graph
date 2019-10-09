import React, { useState } from 'react';
import { Charts } from '../shared/shareReduce';

function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="jumbo">
        <h1>Crypto Graph</h1>
        <p>Your #1 Choice for Real-Time Crypto Analysis</p>
        <div className="jumbo-buttons">
          <div className="btn">Existing User</div>
          <div className="btn">Create Account</div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
