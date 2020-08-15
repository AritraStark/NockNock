import React from 'react';
import './footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className="foot">
        <footer>
          <div className="low">
            <div className="lw1">
              <img src="nock-nock-allwht.png" alt="logo"/>
              <p>nock nock provides buyers with the ultimate in Real Estate experiences while dealing with only the top 1% of hand picked Real Estate Agents in Canada.</p>
            </div>
            <div className="lw2">
              <h3>Top Searches</h3>
              <ul>
                <li><a href="#">Real Estate Agent near me</a></li>
                <li><a href="#">Real Estate Agent in Toronto</a></li>
                <li><a href="#">Real Estate Agent in Oakville</a></li>
                <li><a href="#">Real Estate Agent in Milton</a></li>
              </ul>
            </div>
            <div className="lw3">
              <h3>Top Searches</h3>
              <ul>
                <li><a href="#">Real Estate Agent in Burlington</a></li>
                <li><a href="#">Real Estate Agent in Mississauga</a></li>
                <li><a href="#">Real Estate Agent in Etobicoke</a></li>
                <li><a href="#">Real Estate Agent in Hamilton</a></li>
              </ul>
            </div>
            <div className="lw4">
              <h4>Follow Us</h4>
              <div className="fim">
                <img src="Facebook.png" alt="fb"/>
                <img src="Twitter.png" alt="tw"/>
                <img src="Instagram.png" alt="insta"/>
              </div>
            </div>

          </div>
          <div className="low2">
            <div className="low21">
              <p>Terms and Conditions / About Us/News / Privacy Policy</p>
            </div>
            <div className="low22">
              <p>&#169; 2020 nock nock inc. All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
