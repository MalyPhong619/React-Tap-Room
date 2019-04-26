import React from 'react';
import TapList from './TapList';

function UserView() {
  return(
    <div>
      <Header/>
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
