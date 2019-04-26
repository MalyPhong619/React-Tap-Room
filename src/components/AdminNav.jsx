import React from 'react';
import { Link } from 'react-router-dom';

function AdminNav() {
  const noUnderline = {
    textDecoration: 'none'
  };
  return(
    <div>
      <style jsx>{`
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
      <Link style={noUnderline} to='/'><span>Home</span></Link>
    </div>
  );
}

export default AdminNav;
