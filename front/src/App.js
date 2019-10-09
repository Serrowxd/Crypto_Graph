import React, { useState } from 'react';
import { Navigation } from './shared/shareReduce';
import { Landing } from './components/compReduce';

function App() {
  let [dropdown, setDropdown] = useState(false);
  let [login, setLogin] = useState(false);

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
      <Landing />
    </div>
  );
}

export default App;
