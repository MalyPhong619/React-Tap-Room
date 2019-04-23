import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return(
    <div>
      <h1>{props.brand}</h1>
      <h3>{props.name} <em>{props.type}</em></h3>
      <p>$ {props.price}</p>
    </div>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number
};

export default Tap;
