import React from 'react';
import './header.css';

class Header extends React.Component{
  render(){
    return(
      <div className="navbar">
        <nav>
          <div className="navbar1">
            <div className= "logo">
              <img className="logoim" src="nock-nock-logo-wht@2x.png" alt="Logo"/>
            </div>
            <div className="nav-list">
              <ul>
                <li><a href="#">SELL</a></li>
                <li><a href="#">BUY</a></li>
                <li><a href="#">FINANCE</a></li>
              </ul>
            </div>
            <div className="hamburger">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
