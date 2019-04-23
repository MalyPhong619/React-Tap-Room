import React from 'react';
import PropTypes from 'prop-types';

function Tap(props) {
  return(
    <div>
      <style jsx>{`
                div {
                  width: 20vw;
                  height: 30vh;
                  border: 1px dotted black;
                  margin-bottom: 10px;
                  padding: 5px;
                }
                h1 {
                  text-decoration: underline;
                }
              `}</style>
      <h1>{props.brand}</h1>
      <h3>{props.name}</h3>
      <h5><em>{props.type}</em></h5>
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
