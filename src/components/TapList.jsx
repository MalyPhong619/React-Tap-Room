import React from 'react';
import Tap from './Tap';

var masterTapList = [
  {
    brand: 'WildCraft',
    name: 'Rome Beauty',
    type: 'Cider',
    price: '7'
  },
  {
    brand: 'Swift',
    name: 'Swift Heirloom Batch 1: Sauvie Island Keeved Cider',
    type: 'Dry Cider',
    price: '12'
  },
  {
    brand: 'Machine House',
    name: 'Bramling Cross',
    type: 'IPA',
    price: '5'
  },
  {
    brand: 'pFriem',
    name: 'Oyster Stout',
    type: 'Stout',
    price: '7'
  },
  {
    brand: 'Founders',
    name: 'KBS',
    type: 'Imperial Stout',
    price: '11'
  },
  {
    brand: 'Culmination',
    name: 'Ol\' Money',
    type: 'English Barley Wine',
    price: '6'
  },

];

function TapList() {
  return (
    <div>
      {masterTapList.map((tap, index) =>
      <Tap brand={tap.brand}
      name={tap.name}
      type={tap.type}
      price={tap.price}
      key={index}/>
    )}
    </div>
  );
}

export default TapList;
