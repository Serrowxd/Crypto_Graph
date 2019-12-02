import React from 'react';

function Settings(props) {
  return (
    <div className="settings-wrapper">
      <p className="btn" onClick={props.updateTheme}>
        Theme Toggle
      </p>
    </div>
  );
}

export default Settings;
