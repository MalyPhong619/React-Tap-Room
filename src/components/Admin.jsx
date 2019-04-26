import React from 'react';
import AdminNav from './AdminNav';

function Admin() {
  return(
    <div>
      <style jsx>{`
          form {
            display: flex;
            flex-flow: column;
          }
          input {
            width: 30%;
            height: 2vh;
            margin-top: 1vh;
            border-radius: 5px;
            border: 1px solid black;
            padding-left: 10px;
          }
          button {
            width: 8vw;
            height: 3vh;
            border: 1px solid black;
            margin-top: 2vh;
            border-radius: 10px;
          }

          `}</style>
        <AdminNav/>
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
