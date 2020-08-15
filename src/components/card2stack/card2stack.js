import React from 'react';
import './card2stack.css';
import Card2 from '../card2/card2.js';


class Card2stack extends React.Component{
  render(){
    return(
      <div >
        <div className="selform">
          <form action="">
             <select className="dropdown">
              <option value="Area">Sort By Area</option>
              <option value="X">Sort By X</option>
              <option value="Y">Sort By Y</option>
              <option value="Z">Sort By Z</option>
            </select>
          </form>
        </div>
        <div className="card2stack">
          <Card2 src="profile1.jpg" name="Roise Sutter" desig="Living Reality" stcr="Ontario, Canada" ctzp="Markham,L3R 6G2" ctyp="Real Estate Agency" />
          <Card2 src="profile2.png" name="Nate Lahey" desig="Cir Reality" stcr="Ontario, Canada" ctzp="Calgary,T2R 0B3" ctyp="Real Estate Agency" />
          <Card2 src="profile3.png" name="Martha Gim" desig="The Red Pin" stcr="Ontario, Canada" ctzp="North York.M3C 3K5" ctyp="Real Estate Agency" />
          <Card2 src="profile1.jpg" name="Jack Gibbins" desig="Shindico" stcr="Ontario, Canada" ctzp="Ajax,L15 6M2" ctyp="Real Estate Agency" />
        </div>
        <div className="mid2link">
          <a href="#">VIEW MORE</a>
        </div>
      </div>
    );
  }
}

export default Card2stack;
