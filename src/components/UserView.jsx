import React from 'react';
import TapList from './TapList';
import PropTypes from 'prop-types';
import Tap from './Tap';

function UserView(props) {
  return(
    <div>
      <style jsx>{`
      div {
        margin: auto;
        width: 100%;
      }

      `}</style>
      <div>
        {props.masterTapList.map((tap, index) =>
          <Tap brand={tap.brand}
            name={tap.name}
            key={index}/>
        )}
      </div>
    </div>
  );
}

UserView.propTypes = {
  masterTapList: PropTypes.array,
};

export default UserView;
