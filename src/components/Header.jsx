import React from 'react';
import Nav from './Nav';

function Header() {
  return(
    <div>
      <style jsx>{`
          div {
            display: flex;
            flex-flow: row nowrap;
          }
          h1 {
            font-size: 4rem;
          }
          h2 {
            align-self: flex-end;
          }

          `}
        </style>
        <div>
          <h1>Tap The Keg</h1>
          <h2>Taproom</h2>
        </div>
        <Nav/>
      </div>
    );
  }

  export default Header;
