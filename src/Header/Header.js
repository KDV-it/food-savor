import React from 'react';
import logo from '../img/Logo.png';
import Navbar from './Navbar';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" className="img-logo" />
      <Navbar />
      <button className="sign-up">Sign up</button>
    </header >
  );

}