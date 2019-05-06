import React from 'react';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Header from './Header';
import UserView from './UserView';
import Error404 from './Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [
        {
          brand: 'WildCraft',
          name: 'Rome Beauty',
          type: 'Cider',
          price: 7
        },
        {
          brand: 'Swift',
          name: 'Swift Heirloom Batch 1: Sauvie Island Keeved Cider',
          type: 'Dry Cider',
          price: 1
        },
        {
          brand: 'Machine House',
          name: 'Bramling Cross',
          type: 'IPA',
          price: 5
        },
        {
          brand: 'pFriem',
          name: 'Oyster Stout',
          type: 'Stout',
          price: 7
        },
        {
          brand: 'Founders',
          name: 'KBS',
          type: 'Imperial Stout',
          price: 1
        },
        {
          brand: 'Culmination',
          name: 'Ol\' Money',
          type: 'English Barley Wine',
          price: 6
        },
        {
          brand: 'Moonraker',
          name: 'Foam Walker',
          type: 'Stout',
          price: 9
        },
        {
          brand: 'Gigantic',
          name: 'Corpse Riviver',
          type: 'Sour Ale',
          price: 7
        },
        {
          brand: 'Block 15',
          name: 'Wonka\'s Wit',
          type: 'Wild Witbier',
          price: 9
        },
        {
          brand: 'Little Beast',
          name: 'Wold Camp',
          type: 'Hoppy Saison',
          price: 7
        },
        {
          brand: 'Ex Novo',
          name: 'Antwerp Delight',
          type: 'Belgian Pale Ale',
          price: 6
        },
        {
          brand: 'Way Finder',
          name: 'Hausbier: Beez In The Trap',
          type: 'English SUmmer Ale',
          price: 6
        },
        {
          brand: 'Pfriem',
          name: 'Dark Czech Lager',
          type: 'Czech Dark Lager',
          price: 6
        },
        {
          brand: 'Pizza Port',
          name: 'ChronicAle',
          type: 'American Amber Ale',
          price: 5
        },
        {
          brand: 'Manifest',
          name: 'Best Lager',
          type: 'Light Lager',
          price: 5
        },
        {
          brand: 'Pelican',
          name: 'Pilsner',
          type: 'German Pilsner',
          price: 6
        },
        {
          brand: 'Logsdon Farmhouse',
          name: 'Weisse City',
          type: 'Hefeweizen',
          price: 6
        },
        {
          brand: 'Bend',
          name: 'Devil\'s Cabbage',
          type: 'West Coast IPA',
          price: 6
        },
        {
          brand: 'El Segundo',
          name: 'Dreamin\' of Sunshine',
          type: 'IPA',
          price: 7
        },
        {
          brand: 'Modern Times',
          name: 'Dfreamspeaker',
          type: 'Hazy IPA',
          price: 7
        },
        {
          brand: 'Georgetown',
          name: 'Meowsa',
          type: 'Imperial IPA',
          price: 8
        },
        {
          brand: 'Hopworks 2012',
          name: 'Noggin Floggin',
          type: 'American Barley Wine',
          price: 6
        },
        {
          brand: 'Fremont',
          name: 'Winter Ale',
          type: 'Imperial Winter Warmer-Hops',
          price: 6
        }
      ]
    };
  }


  render(){
    console.log(this.state);
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
          <Route exact path='/' render={() =><UserView masterTapList={this.state.masterTapList} />} />
          <Route exact path='/taplist' render={() =><TapList masterTapList={this.state.masterTapList} />} />
          <Route exact path='/admin' component={Admin} />
          <Route component={Error404} />;
        </Switch>
      </div>
    );
  }
}

export default App;
