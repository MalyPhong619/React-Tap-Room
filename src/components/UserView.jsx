import React from 'react';
import TapList from './TapList';

function UserView() {
  return(
    <div>
      <style jsx>{`
          div {
            margin: auto;
            width: 100%;
          }

          `}</style>
      <TapList/>
    </div>
  );
}

export default UserView;
