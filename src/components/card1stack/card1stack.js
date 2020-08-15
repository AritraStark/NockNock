import React from 'react';
import './card1stack.css';
import Card1 from '../card1/card1.js';

class Card1stack extends React.Component{
  render(){
    return(
      <div className="mid2">
      <h2>Why People Choose Us Over The Rest</h2>
      <div className="card1stack">
        <Card1 src="mortgage.png" title="HAND CURATED PROFESSIONALS" description="Buying?Selling?Financing? No problem. Our team is hand selected from the best professionals of each areas of Real Estate"/>
        <Card1 src="financial.png" title="SAVE ON FEES" description="Pay just 4.5% in fees. That's 0.5% less than the traditional 5% and thousands in savings"/>
        <Card1 src="deal.png" title="MAXIMIZE YOUR SALE PRICE" description="Sell your home at a higher price and attract more buyers with a $5k interest-free advance for renovations"/>
        <Card1 src="seller.png" title="EXPERTISE AT EVERY STEP" description="From setting the right list price to closing, you'll be supported by local industry experts."/>
      </div>
      </div>
    );
  }
}

export default Card1stack;
