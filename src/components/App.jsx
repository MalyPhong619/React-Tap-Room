import React from 'react';
import TapList from './TapList';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';


function App(){
  return (
    <div>
      <style jsx>{`
          div {
            margin: auto;
            width: 90%;
          }

          `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TapList} />
        <Route exact path='/taplist' component={TapList} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
