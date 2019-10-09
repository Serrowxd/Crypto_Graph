import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Navigation(props) {
  const [navtype, setNavType] = useState(false);

  function windowChecker() {
    setTimeout(() => {
      if (window.location.pathname !== '/') {
        setNavType(true);
      } else {
        setNavType(false);
      }
    }, 0);
  }

  useEffect(() => {
    windowChecker();
  }, []);

  return (
    <div className={navtype ? 'navigation-wrapper sub-nav' : 'navigation-wrapper'}>
      <h1>Crypto Graph</h1>
      <div className="nav-items">
        <Link to="/">
          <p onClick={windowChecker}>Home</p>
        </Link>
        <Link to="/graphs">
          <p onClick={windowChecker}>Graphs</p>
        </Link>
        <Link to="/">
          <p onClick={windowChecker}>Dropdown</p>
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
