import React from 'react';
import TapList from './TapList';
import Nav from './Nav';
import Header from './Header';

function UserView() {
  return(
    <div>
      <Nav/>
      <style jsx>{`
          div {
            margin: auto;
            width: 90%;
          }

          `}</style>
        <TapList/>
      </div>
  );
}

export default UserView;
