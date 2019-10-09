import React, { useState } from 'react';
import { Charts, LoginModal } from '../shared/shareReduce';

function Landing() {
  const [modal, setModal] = useState(false);
  const [header, setHeader] = useState();

  function modalHandler() {
    setModal(!modal);
    console.log('Henlo');
  }

  function headerHanlderLogin() {
    setHeader('Login to your Account');
    modalHandler();
  }

  function headerHandlerAccount() {
    setHeader('Create a new Account');
    modalHandler();
  }

  return (
    <div className="landing-wrapper">
      <div className="jumbo">
        <h1>Crypto Graph</h1>
        <p>Your #1 Choice for Real-Time Crypto Analysis</p>
        <div className="jumbo-buttons">
          <div className="btn" onClick={headerHanlderLogin}>
            Existing User
          </div>
          <div className="btn" onClick={headerHandlerAccount}>
            Create Account
          </div>
        </div>
      </div>

      <LoginModal header={header} showModal={modal} modalHandler={modalHandler} />
    </div>
  );
}

export default Landing;
