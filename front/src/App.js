import React, { useState } from 'react';
import { Navigation } from './shared/shareReduce';
import { Landing } from './components/compReduce';

function App() {
  let [dropdown, setDropdown] = useState(false);

  function loginHandler() {
    console.log('Henlo (OvO")');
  }

  function dropdownHandler() {
    setDropdown(!dropdown);
  }

  return (
    <div className="global-container">
      <Navigation login={'Login'} loginHandler={loginHandler} dropdownHandler={dropdownHandler} dropdown={dropdown} />
      <Landing />
    </div>
  );
}

export default App;
