import React from 'react';
import './card2.css';

class Card2 extends React.Component{
  render(){
    return(
      <div class="card2">
        <div class="outline">

        </div>
        <img src={this.props.src} alt=""/>
        <div className="incon">
          <div className="uptxt">
              <div className="call"><i class="fas fa-phone"></i></div>
              <div className="uptxt1">
              <h3>{this.props.name}</h3>
                <div className="uptxt2">
                  <h4>{this.props.desig}</h4><p>Real Estate Agent</p>
                </div>
              </div>
          </div>
          <div className="dwtxt">
            <div className="dwtxt1" ><h4>{this.props.stcr}</h4><p>State & Country</p></div>
            <div className="dwtxt1" ><h4>{this.props.ctzp}</h4><p>City & Zip</p></div>
            <div className="dwtxt1" ><h4>{this.props.ctyp}</h4><p>Contact Type</p></div>
          </div>
        </div>
      </div>
    );
  }
}


export default Card2;
