import React, { useState } from 'react';
import { Navigation, Charts } from './shared/shareReduce';
import { Landing, Dashboard } from './components/compReduce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let [dropdown, setDropdown] = useState(false);
  let [login, setLogin] = useState(true);

  function loginHandler() {
    setLogin(!login);
    dropdownHandler();
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
        dropdown={dropdown}
      />

      <Switch>
        <Route exact path="/">
          {login ? <Dashboard /> : <Landing />}
        </Route>
        <Route path="/graphs">
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
