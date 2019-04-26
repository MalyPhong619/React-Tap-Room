import React from 'react';

function Nav() {
  return(
    <div>
      <style jsx>{`
          div {
            margin-bottom: 5%;
          }
          a {
            margin: 10px;
            text-decoration: none;
            color: black;
            text-transform: uppercase;
            border-right: 1px dotted red;
          }
          a:hover {
            color: red;
          }
          `}
        </style>
        <nav>
          <a href='/'>Home</a>
          <a href='#/taplist'>Taps</a>
        </nav>
      </div>
    );
  }

  export default Nav;
