import React from 'react';
import './navbar.css';

class Navbar extends React.Component{
  constructor(props) {
   super(props);
   this.state = { value: true };
   this.toggleMood = this.toggleMood.bind(this);

 }
 toggleMood() {
    const newMood = this.state.value == true ? false : true;
    this.setState({ value: newMood });
  }
  

  render(){
    return(
      <div className="navbar2">
      <div className="hamburger" onClick={this.toggleMood}>
        <i className="fas fa-bars"></i>
      </div>
        {this.state.value==true? <div className="n1">
          <ul>
            <li><a href="#">Agent Directory</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms And Conditions</a></li>
            <div className="n11">
              <div className="l1">
                <h4>+1_88 888 856</h4>
                <div className="fim">
                  <img src="Facebook.png" alt="fb"/>
                  <img src="Twitter.png" alt="tw"/>
                  <img src="Instagram.png" alt="insta"/>
                </div>
              </div>
              <div className="l2">
                  <h4>Hello@nocknock.Ca</h4>
              </div>
            </div>
          </ul>
        </div> : <div></div>}

      </div>
    );
  }
}



export default Navbar;
