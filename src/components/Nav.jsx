import React from 'react';

function Nav() {
  return(
    <div>
      <style jsx>{`
          a {
            margin: 10px;
            text-decoration: none;
            color: black;
            text-transform: uppercase;
          }
          a:hover {
            color: red;
          }
          `}
        </style>
        <nav>
          <a href='/'>Home</a>
          <a href='/taplist'>Taps</a>
        </nav>
      </div>
    );
  }

  export default Nav;
