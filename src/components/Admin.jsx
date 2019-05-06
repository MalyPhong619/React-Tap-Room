import React from 'react';
import NewKegControl from './NewKegControl';
import PropTypes from 'prop-types';

function Admin(props) {
  console.log(props)
  return(
    <div>
      <NewKegControl/>
    </div>
  );
}

Admin.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default Admin;
