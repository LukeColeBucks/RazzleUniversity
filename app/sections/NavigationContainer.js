import React from 'react';
import { Home } from '../views/Home.js';
import { Contact } from '../views/Contact.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NewsApi from '../news/src/NewsApi.js';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  NewsRT: {
    screen: NewsApi
  },
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default createAppContainer(MyRoutes);