import React, { useState } from 'react';
import { LoginModal } from '../shared/shareReduce';

function Landing(props) {
  const [modal, setModal] = useState(false);
  const [header, setHeader] = useState();

  function modalHandler() {
    setModal(!modal);
  }

  function loginModalHandler() {
    setModal(!modal);
    props.login();
  }

  function headerLoginHandler() {
    setHeader('Login to your Account');
    modalHandler();
  }

  function headerAccountHandler() {
    setHeader('Create a new Account');
    modalHandler();
  }

  return (
    <div className="landing-wrapper">
      <div className="jumbo">
        <h1>Crypto Graph</h1>
        <p>Your #1 Choice for Real-Time Crypto Analysis</p>
        <div className="jumbo-buttons">
          <div className="btn" onClick={headerLoginHandler}>
            Existing User
          </div>
          <div className="btn" onClick={headerAccountHandler}>
            Create Account
          </div>
        </div>
      </div>

      <LoginModal header={header} showModal={modal} modalHandler={modalHandler} loginModalHandler={loginModalHandler} />
    </div>
  );
}

export default Landing;
