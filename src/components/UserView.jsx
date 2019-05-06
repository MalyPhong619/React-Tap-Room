import React from 'react';
// import TapList from './TapList';
import PropTypes from 'prop-types';

function UserView(props) {
  console.log(props.masterTapList);
  return(
    <div>
      <style jsx>{`
          div {
            margin: auto;
            width: 100%;
          }

          `}</style>
      // <TapList/>
    </div>
  );
}

UserView.propTypes = {
  masterTapList: PropTypes.object
};

export default UserView;
