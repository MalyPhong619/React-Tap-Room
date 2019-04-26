import React from 'react';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList} />
      </Switch>
    </div>
  );
}

export default App;
