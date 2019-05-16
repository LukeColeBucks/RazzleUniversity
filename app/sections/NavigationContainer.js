import React from 'react';
import { Home } from '../views/Home.js';
import { Contact } from '../views/Contact.js';
import Event from '../events/Event.js';
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
  EventRT: {
    screen: Event
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default createAppContainer(MyRoutes);