import React from 'react';

function Header({ info }) {
  return (
    <header>
      <div className="contact-info">
        <span>Email: {info.email}</span>
        <span>Web: <a href={info.web} target="_blank">{info.web}</a></span>
        <span>Mobile: {info.mobile}</span>
      </div>
      <h1>{info.name}</h1>
      <p>{info.occupation}</p>
    </header>
  );
}

export default Header;
