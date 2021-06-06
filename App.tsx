import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './composants/Navigation';

export default class App extends React.Component {
  render() {
      return (
          <NavigationContainer>
              <Navigation />
          </NavigationContainer>
      )
  }
};
