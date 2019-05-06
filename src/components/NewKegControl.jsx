import React from 'react';
import NewKegTicket from './NewKegTicket';
import EditKeg from './EditKeg';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKegForm: false,
      editKeg: false
    };
    this.addNewKeg = this.addNewKeg.bind(this);
    this.editKegForm = this.editKegForm.bind(this);
  }

  addNewKeg(){
    this.setState({newKegForm: true, editKeg: false});
  }

  editKegForm(){
    this.setState({editKeg: true, newKegForm: false});
  }

  render() {
    let visibleComponent = null;
    if (this.state.newKegForm === true) {
      visibleComponent = <NewKegTicket onTroubleshootingConfirmation={this.addNewKeg} onNewKegCreation={this.props.onNewKegCreation} /> ;
    } else if (this.state.editKeg === true) {
      visibleComponent = <EditKeg/>;
    }
    return(
      <div>
        <style jsx>{`
            div {
              margin-top: 2vh;
            }
            button {
              width: 80px;
              height: 35px;
              border: 1px solid black;
              margin-top: 2vh;
              margin-right: 1vw;
              border-radius: 10px;
            }
          `}
        </style>
        <button onClick={this.addNewKeg}>Add Keg</button>
        <button onClick={this.editKegForm}>Edit Keg</button>

        <div>
          {visibleComponent}
        </div>
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegControl;
