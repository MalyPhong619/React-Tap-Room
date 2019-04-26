import React from 'react';

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
      </div>
    );
  }
}

export default NewKegControl;
