import React from 'react';
import PropTypes from 'prop-types';


function NewKegTicket(props) {

  let _brand = null;
  let _name = null;
  let _type = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: _brand.value, name: _name.value, type: _type.value, price: _price.value});

    _brand.value = '';
    _name.value = '';
    _type.value = '';
    _price.value = '';
  }

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
      <form onSubmit={handleNewKegFormSubmission}>
        <h1>Add New Keg</h1>
        <input
          type='text'
          id='brand'
          placeholder='Company Name'
          ref={(input) => {_brand = input;}}>
        </input>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}}>
        </input>
        <input
          type='text'
          id='type'
          placeholder='Beer Type'
          ref={(input) => {_type = input;}}>
        </input>
        <input
          type='text'
          id='cost'
          placeholder='Cost per Pint'
          ref={(input) => {_price = input;}}>
        </input>
        <button type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegTicket.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func,
  onNewKegCreation: PropTypes.func
};


export default NewKegTicket;
