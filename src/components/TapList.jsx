import React from 'react';
import Tap from './Tap';
import Nav from './Nav';
import PropTypes from 'prop-types';



function TapList(props) {
  return (
    <div className='tapListBody'>
      <style jsx>{`
          .tapListBody {
            width: 90%;
          }
          div {
            width: 100%;
            margin: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
          }
          `}</style>
      <Nav/>
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

TapList.propTypes = {
  masterTapList: PropTypes.array,
};

export default TapList;
