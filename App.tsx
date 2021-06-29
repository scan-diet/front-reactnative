import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './src/components/Navigation';
import {Provider} from "react-redux";
import store from "./src/store/store";

export default class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
              <NavigationContainer>
                  <Navigation />
              </NavigationContainer>
          </Provider>
      )
  }
};
