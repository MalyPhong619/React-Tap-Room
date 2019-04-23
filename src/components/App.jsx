import React from 'react';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={TapList} />
      </Switch>
    </div>
  );
}

export default App;
