import React from 'react';
import { Media } from 'reactstrap';
import logo from './../../assets/images/logo.svg';

export const Home = (props) => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is home</p>
    </div>
  );
};
