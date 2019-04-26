import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return(
    <div>
      <div>
        <h2>The path {props.location.pathname} does not exist!</h2>
        <h3>Navigate to <Link to="/">home</Link> page.</h3>
      </div>
    </div>
  );
}

export default Error404;

Error404.propTypes = {
  location: PropTypes.object
};
