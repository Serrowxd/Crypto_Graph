import React, { useState, useEffect } from 'react';
import { Navigation } from './shared/shareReduce';
import { Landing, Dashboard, Account, Graphs, Settings } from './components/compReduce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Users = require('./data/users.json');
// import Users from './data/user.js';

function App() {
  const [dropdown, setDropdown] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');
  const [crypto, setCrypto] = useState('');
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

  // Handles the theme swap
  function themeUpdater() {
    setTheme(!theme);
    console.log(theme);
  }

  // Checks for navigation updates
  useEffect(() => {
    windowChecker();
  }, []);

  function checkLogin(usern, userpass) {
    if (Users.hasOwnProperty(usern)) {
      loginHandler(usern, userpass);
    } else {
      console.log('I broke :(');
    }
  }

  function loginHandler(usern, userpass) {
    let value = Users[usern];

    if (usern === value.username && userpass === value.password) {
      setUser(value.name);
      setCrypto(value.coin);
      setLogin(true);
    } else {
      console.log('Wrong password');
    }
  }

  function logoutHandler() {
    setLogin(false);
    dropdownHandler();
  }

  function dropdownHandler() {
    setDropdown(!dropdown);
  }

  return (
    <div className={theme ? 'global-container white-theme' : 'global-container'}>
      <Navigation
        login={login ? 'Logout' : 'Login'}
        loginHandler={loginHandler}
        logoutHandler={logoutHandler}
        dropdownHandler={dropdownHandler}
        window={windowChecker}
        dropdown={dropdown}
        nav={navtype}
      />

      <Switch>
        <Route exact path="/">
          {login ? (
            <Dashboard user={user} crypto={crypto} themeSwap={theme} window={windowChecker} />
          ) : (
            <Landing login={loginHandler} checkLogin={checkLogin} />
          )}
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
