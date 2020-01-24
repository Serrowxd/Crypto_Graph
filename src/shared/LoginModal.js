import React, { useState } from 'react';

function LoginModal(props) {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  function checkLoginHanlder() {
    let user = userName;
    let pass = userPass;
    props.checkLogin(user, pass);
  }

  function userNameHandler(event) {
    let userName = event.target.value;
    setUserName(userName);
    console.log(userName);
  }

  function userPassHandler(event) {
    let userPass = event.target.value;
    setUserPass(userPass);
    console.log(userPass);
  }

  // Handles the enter input for password sumbission
  function submitHandler(e) {
    if (e.key === 'Enter') {
      checkLoginHanlder();
    }
  }

  return (
    <div className={props.showModal ? 'modal' : 'modal hidemodal'}>
      <form className="modal-wrapper">
        <div className="header">
          <h1>{props.header}</h1>
        </div>
        <div className="inputs">
          <div className="modal-text">
            <p>Username</p>
            <p id="user-req" className="error hidden">
              Required
            </p>
          </div>
          <input type="text" value={userName} onChange={userNameHandler} name="username" autoComplete="off" />
          <div className="modal-text">
            <p>Password</p>
            <p id="pass-req" className="error hidden">
              Required
            </p>
          </div>
          <input
            type="password"
            onChange={userPassHandler}
            onKeyPress={submitHandler}
            name="password"
            autoComplete="off"
          />
        </div>
        <div className="buttons">
          <div className="btn" onClick={checkLoginHanlder}>
            <p>Submit</p>
          </div>
          <div className="btn" onClick={props.loginModalHandler}>
            <p>Cancel</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
