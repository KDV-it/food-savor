import React from 'react';
import review from '../img/review.png';
import './MainHeader.css';

export default function MainHeader() {
  return (
    <div className="titles">
      <h1 className="title">
        Reduce Food Waste and <span className="focus-text">Save Money</span>
      </h1>
      <p className="title-content">We want to tackle food waste by recommending recipes
        based on leftover ingredients in the fridge at home
      </p>
      <button className="btn-get-started">Get Started</button>
      <img src={review} alt="" className="review" />
    </div>
  );
}