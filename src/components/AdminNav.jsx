import React from 'react';
import { Link } from 'react-router-dom';

function AdminNav() {
  return(
    <div>
      <style jsx>{`
        .link {
          margin: 10px;
          text-decoration: none;
          color: black;
          text-transform: uppercase;
          border-right: 1px dotted red;
        }
        .link:hover {
          color: red;
        }
        `}
      </style>
      <Link className='link' to='/'>Home</Link> |
      <Link className='link' to='/admin'>Add New Keg</Link> |
      <Link className='link' to='/'>Edit Existing Keg</Link>
    </div>
  );
}

export default AdminNav;
