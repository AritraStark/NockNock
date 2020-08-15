import React from 'react';
import './search.css';

class Search extends React.Component{
  render(){
    return(
      <div className="mid1">
        <div className="mid1txt">
          <h2>GET A %5000 INTEREST FREE RENOVATION ADVANCE</h2>
          <h1>Buy your home from the comfort of your couch</h1>
          <h5>GET RADY FOR A REAL ESTATE EXPERIENCE UNLIKE YOUVE NEVER HAD BEFORE</h5>
        </div>
        <div className="search">
          <form action="">
            <input type="text" placeholder="City or Postal Code"/>
            <button type="button" action="submit" name="button">SEARCH</button>
          </form>
        </div>
        <div className="m1link">
          <a href="#">
            NEED FINANCING?
          </a>
        </div>
      </div>
    );
  }
}


export default Search;
