import React from 'react';
import img from '../assets/user.png';

function Account(props) {
  return (
    <div className="account-wrapper">
      <div className="leftAcc-wrapper">
        <img alt="user" src={img} className="user-image" />
        <h1>Kevin Jolley</h1>
      </div>
      <div className="rightAcc-wrapper">
        <p>Username: {props.username}</p>
        <p>First Name:</p>
        <p>Last Name:</p>
        <p>Email:</p>
        <p>Crypto Pref: {props.crypto}</p>
      </div>
    </div>
  );
}

export default Account;
