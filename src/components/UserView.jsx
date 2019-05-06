import React from 'react';
import TapList from './TapList';
import PropTypes from 'prop-types';
import Tap from './Tap';


function UserView(props) {
  const userViewDiv = {
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap'
  }
  return(
    <div style={userViewDiv}>
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
          type={tap.type}
          price={tap.price}
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
