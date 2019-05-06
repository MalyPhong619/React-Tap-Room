import React from 'react';
import TapList from './TapList';
import PropTypes from 'prop-types';

function UserView(props) {
  return(
    <div>
      <style jsx>{`
          div {
            margin: auto;
            width: 100%;
          }

          `}</style>
      <TapList masterTapList={props.masterTapList}/>
    </div>
  );
}

UserView.propTypes = {
  masterTapList: PropTypes.object
};

export default UserView;
