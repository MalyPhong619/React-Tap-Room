import React from 'react';
import NewKegTicket from './NewKegTicket';
import EditKeg from './EditKeg';


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
    this.setState({newKegForm: true, editKef: false});
  }

  editKegForm(){
    this.setState({editKeg: true, newKegForm: false});
  }

  render() {
    let visibleComponent = null;
    if (this.state.newKegForm === true) {
      visibleComponent = <NewKegTicket/> ;
    } else if (this.state.editKeg === true) {
      visibleComponent = <EditKeg/>;
    }

    return(
      <div>
        <style jsx>{`
            div {
              margin-top: 2vh;
            }

          `}
        </style>
        <button onClick={this.addNewKeg}>Add New Keg</button>
        <button onClick={this.editKegForm}>Edit Keg</button>

        {visibleComponent}
      </div>
    );
  }
}

export default NewKegControl;
