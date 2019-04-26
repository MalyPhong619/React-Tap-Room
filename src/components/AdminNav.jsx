import React from 'react';
import { Link } from 'react-router-dom';

function AdminNav() {
  const linkstyle = {
    margin: '10px',
    textDecoration: 'none',
    color: 'black',
    textTransform: 'uppercase',
    borderRight: '1px dotted red'
  };
  return(
    <div>
      <Link style={linkstyle} to='/'>Home</Link> |
      <Link style={linkstyle} to='/admin'>Add New Keg</Link> |
      <Link style={linkstyle} to='/'>Edit Existing Keg</Link>
    </div>
  );
}

export default AdminNav;
