import React from "react";
import './MainBody.css';
import cooking1 from '../img/list-Card-1/cooking1.png';
import healthy2 from '../img/list-Card-1/healthy2.png';
import diet3 from '../img/list-Card-1/diet3.png';
import icon1 from '../img/list-Card-1/icon1.png';
import fiveStar from '../img/list-Card-1/fiveStar.png';



export default function MainBody() {
  return (
    <div className='main-body'>
      <p className="title-small">WHAT WE DO</p>
      <p className='heading-text'>We help thousands of people reduce food waste. </p>

      <ul className='list-card-1'>

        <li className='item-card-1'>
          <img src={cooking1} alt='' className='item-img' />
          <p className='item-content'>Quality Recipes</p>
        </li>

        <li className='item-card-1'>
          <img src={healthy2} alt='' className='item-img' />
          <p className='item-content' >Save on Groceries </p>
        </li>

        <li className='item-card-1'>
          <img src={diet3} alt='' className='item-img' />
          <p className='item-content'>Zero Food Waste</p>
        </li>
      </ul>

      <p className="title-small">WHAT THEY SAY</p>
      <p className='heading-text'>What our customers say about us ?</p>

      {/* list card 2 */}
      <ul className='list-card-2'>

        <li className='item-card-2'>
          <img className='icon' src={icon1} alt='' />
          <p className='item-content-2'> I used to throw away veggies that were about to expire. Now I save money  and reduce food waste “</p>
          <img className='icon-star' src={fiveStar} alt='' />
          <p className='item-title'>-Jessica from Canada</p>
        </li>

        <li className='item-card-2'>
          <img className='icon' src={icon1} alt='' />
          <p className='item-content-2'> I feel that I eat out less and get better at cooking by using their easy websites.</p>
          <img className='icon-star' src={fiveStar} alt='' />
          <p className='item-title'>-Mark from USA</p>
        </li>

        <li className='item-card-2'>
          <img className='icon' src={icon1} alt='' />
          <p className='item-content-2'> Its easy to use! I love that I can select my ingredients (:</p>
          <img className='icon-star' src={fiveStar} alt='' />
          <p className='item-title'>-Sophia from India</p>
        </li>


      </ul>
    </div>
  );
}