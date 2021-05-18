import React from 'react';
import Login from "./components/Login";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './components/Navigation';
export default function App() {
  return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  )
};
