import React, { useState, useEffect } from 'react';
import { Navigation, Charts } from './shared/shareReduce';
import { Landing, Dashboard } from './components/compReduce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [dropdown, setDropdown] = useState(false);
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState('Kevin');
  const [crypto, setCrypto] = useState('Bitcoin');
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

  function loginHandler() {
    setLogin(!login);
    dropdownHandler();
    setUser('Kevin');
    setCrypto('Bitcoin');
  }

  function dropdownHandler() {
    setDropdown(!dropdown);
  }

  return (
    <div className="global-container">
      <Navigation
        login={login ? 'Logout' : 'Login'}
        loginHandler={loginHandler}
        dropdownHandler={dropdownHandler}
        window={windowChecker}
        dropdown={dropdown}
        nav={navtype}
      />

      <Switch>
        <Route exact path="/">
          {login ? <Dashboard user={user} crypto={crypto} window={windowChecker} /> : <Landing login={loginHandler} />}
        </Route>
        <Route path="/graphs">
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
