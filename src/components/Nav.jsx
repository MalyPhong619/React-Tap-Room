import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const noUnderline = {
    textDecoration: 'none'
  }
  return(
    <div>
      <style jsx>{`
          div {
            margin-bottom: 5%;
          }
          span {
            margin: 10px;
            padding-right: 1vw;
            color: black;
            text-transform: uppercase;
            border-right: 1px dotted red;
          }
          span:hover {
            color: red;
            text-decoration: underline black;
            letter-spacing: 1px;
          }
          `}
      </style>
      <nav>
        <Link style={noUnderline} to='/'><span>Home</span></Link>
        <Link style={noUnderline} to='/taplist'><span>Taps</span></Link>
      </nav>
    </div>
  );
}

export default Nav;
