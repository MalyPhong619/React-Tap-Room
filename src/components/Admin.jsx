import React from 'react';

function Admin() {
  return(
    <div>
      <form>
        <input
          type='text'
          id='brand'
          placeholder='Company Name'>
        </input>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'>
        </input>
        <input
          type='text'
          id='type'
          placeholder='Beer Type'>
        </input>
        <input
          type='text'
          id='cost'
          placeholder='Cost per Pint'>
        </input>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

export default Admin;
