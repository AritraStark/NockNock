import React from 'react';
import './card1.css';

class Card1 extends React.Component{
  render(){
    return(
      <div className="card1">
        <img src={this.props.src} alt=""/>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card1;
