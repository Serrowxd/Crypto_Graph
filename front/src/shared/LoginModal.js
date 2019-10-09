import React from 'react';

function LoginModal(props) {
  return (
    <div className={props.showModal ? 'modal' : 'modal hidemodal'}>
      <div className="modal-wrapper">
        <div className="header">
          <h1>{props.header}</h1>
        </div>
        <div className="inputs">
          <p>Username</p>
          <input />
          <p>Password</p>
          <input />
        </div>
        <div className="buttons">
          <div className="btn" onClick={props.modalHandler}>
            Submit
          </div>
          <div className="btn" onClick={props.modalHandler}>
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
