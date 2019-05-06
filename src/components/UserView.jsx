import React from 'react';
import TapList from './TapList';
import PropTypes from 'prop-types';
import Tap from './Tap';


function UserView(props) {

  return(
    <div className='userViewDiv'>
    <style jsx>{`
      .userViewDiv {
        margin: auto;
        width: 80%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }

      `}</style>
      {props.masterTapList.map((tap, index) =>
        <Tap brand={tap.brand}
        name={tap.name}
        key={index}/>
      )}
      </div>
    );
  }

  UserView.propTypes = {
    masterTapList: PropTypes.array,
  };

  export default UserView;
