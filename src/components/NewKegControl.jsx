import React from 'react';
import NewKegTicket from './NewKegTicket';


class NewKegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render() {
    return(
      <div>
        <p>This is the keg control form</p>
        <strong onClick={this.handleCLick}>Click me to change my state!</strong>
        <NewKegTicket/>
      </div>
    );
  }
}

export default NewKegControl;
