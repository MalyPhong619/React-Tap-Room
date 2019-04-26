import React from 'react';
import PropTypes from 'prop-types';


function NewKegTicket(props) {
  console.log(props)
  return(
    <div>
      <style jsx>{`
          form {
            display: flex;
            flex-flow: column;
          }
          input {
            width: 250px;
            height: 25px;
            margin-top: 1vh;
            border-radius: 5px;
            border: 1px solid black;
            padding-left: 10px;
          }
          button {
            width: 80px;
            height: 35px;
            border: 1px solid black;
            margin-top: 2vh;
            border-radius: 10px;
          }

          `}</style>
      <form>
        <h1>Add New Keg</h1>
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

NewKegTicket.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};


export default NewKegTicket;
