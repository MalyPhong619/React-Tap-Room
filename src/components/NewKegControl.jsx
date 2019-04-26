import React from 'react';
import NewKegTicket from './NewKegTicket';
import EditKeg from './EditKeg';


class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKegForm: false
    };
    this.addNewKeg = this.addNewKeg.bind(this)
  }

  addNewKeg(){
    this.setState({newKegForm: true});
  }

  render() {
    let visibleComponent = null;
    if (this.state.newKegForm === true) {
      visibleComponent = <NewKegTicket/> ;
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
        {visibleComponent}
      </div>
    );
  }
}

export default NewKegControl;
