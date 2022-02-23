import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>Home</li>
        <li>Recipes</li>
        <li>Popular</li>
      </ul>
    </nav>
  );
}