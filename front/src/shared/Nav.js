import React from 'react';

function Navigation(props) {
  return (
    <div className="navigation-wrapper">
      <h1>Cyrpto Graph</h1>
      <div className="nav-items">
        <p>Home</p>
        <p>Graphs</p>
        <p>Dropdown</p>
        <p onClick={props.dropdownHandler}>{props.login}</p>

        <div className={props.dropdown ? 'nav-drop' : 'nav-drop hidden'}>
          <div className="btn" onClick={props.loginHandler}>
            {props.login}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
