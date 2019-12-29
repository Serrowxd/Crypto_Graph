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

  return (
    <div className={props.showModal ? 'modal' : 'modal hidemodal'}>
      <form className="modal-wrapper">
        <div className="header">
          <h1>{props.header}</h1>
        </div>
        <div className="inputs">
          <p>Username</p>
          <input type="text" value={userName} onChange={userNameHandler} name="username" autoComplete="off" />
          <p>Password</p>
          <input type="password" onChange={userPassHandler} name="password" autoComplete="off" />
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
