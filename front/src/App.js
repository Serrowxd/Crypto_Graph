import React, { useState, useEffect } from 'react';
import { Navigation, Charts } from './shared/shareReduce';
import { Landing, Dashboard, Account, Graphs, Settings } from './components/compReduce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [dropdown, setDropdown] = useState(false);
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState('Kevin');
  const [crypto, setCrypto] = useState('Bitcoin');
  const [navtype, setNavType] = useState(false);
  const [theme, setTheme] = useState(false);

  function windowChecker() {
    setTimeout(() => {
      if (window.location.pathname !== '/') {
        setNavType(true);
      } else {
        setNavType(false);
      }
    }, 0);
  }

  function themeUpdater() {
    setTheme(!theme);
    console.log(theme);
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
    <div className={theme ? 'global-container white-theme' : 'global-container'}>
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
          <Graphs />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/settings">
          <Settings updateTheme={themeUpdater} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
