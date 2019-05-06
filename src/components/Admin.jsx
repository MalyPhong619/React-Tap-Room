import React from 'react';
import NewKegControl from './NewKegControl';
import PropTypes from 'prop-types';

function Admin(props) {
  return(
    <div>
      <NewKegControl onNewKegCreation={props.onNewKegCreation}/>
    </div>
  );
}

Admin.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default Admin;
