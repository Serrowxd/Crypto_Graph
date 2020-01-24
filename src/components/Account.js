import React from 'react';

function Account(props) {
  return (
    <div className="account-wrapper">
      <img alt="user" src={props.img} className="user-image" />
      <h1>{props.fname}</h1>
      <p>Crypto Pref: {props.crypto}</p>
    </div>
  );
}

export default Account;
