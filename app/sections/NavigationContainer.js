import React from 'react';
import { Home } from '../views/Home.js';
import { Contact } from '../views/Contact.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default createAppContainer(MyRoutes);