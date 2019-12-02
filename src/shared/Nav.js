import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className={props.nav ? 'navigation-wrapper sub-nav' : 'navigation-wrapper'}>
      <h1>Crypto Graph</h1>
      <div className="nav-items">
        <Link to="/">
          <p onClick={props.window}>Home</p>
        </Link>
        <Link to="/graphs">
          <p onClick={props.window}>Graphs</p>
        </Link>
        <Link to="/">
          <p onClick={props.window}>Dropdown</p>
        </Link>
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
