import React from 'react';
import './Main.css';
import imgGirl from '../img/imgGirl.png';
import MainHeader from './MainHeader';
import MainBody from './MainBody';

export default function Main() {
  return (
    <main className="main">
      <div className="main-header">
        <MainHeader />
        <img src={imgGirl} alt="" className="img-girl" />
      </div>
      <MainBody />
    </main>
  )
}