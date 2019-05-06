import React from 'react';
import TapList from './TapList';
import PropTypes from 'prop-types';
import Tap from './Tap';
import pouring from '../assets/images/pouring.jpeg';


function UserView(props) {

  return(
    <div className='userViewDiv'>
    <style jsx>{`
      .userViewDiv {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(8, 1fr);
      }
      .tapList {
        margin: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        grid-column: 1 / span 5;
      }
      .imageDiv {
        overflow: hidden;
        grid-column: 6 / span 2;
      }
      `}</style>
      <div className='tapList'>
        {props.masterTapList.map((tap, index) =>
          <Tap brand={tap.brand}
          name={tap.name}
          key={index}/>
        )}
        </div>
        <div className='imageDiv'>
        <img src={pouring} />
        </div>
      </div>
    );
  }

  UserView.propTypes = {
    masterTapList: PropTypes.array,
  };

  export default UserView;
