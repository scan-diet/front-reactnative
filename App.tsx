import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './src/components/Navigation';
import {Provider} from "react-redux";
import store from "./src/store/store";
import BottomTabScreen from "./src/screens/main/tabNavigator";
import {enableScreens} from 'react-native-screens'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/user/Home";
import HomeNav from "./src/components/HomeNav";
import tabNavigator from "./src/screens/main/tabNavigator";
import Login from "./src/screens/main/Login";
import Scan from "./src/screens/main/Scan";
import Signup from "./src/screens/main/SignUp";

enableScreens();

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
      return (
          <Provider store={store}>
              <NavigationContainer>
                  {/*<Navigation />*/}
                  <Stack.Navigator screenOptions={{headerShown:false}}>
                      <Stack.Screen name="Login" component={Login}/>
                      <Stack.Screen name="Scan" component={Scan} />
                      <Stack.Screen name="Signup" component={Signup} />
                      <Stack.Screen name={"BottomTabScreen"} component={BottomTabScreen} />
                  </Stack.Navigator>
              </NavigationContainer>
          </Provider>
      )
  }
};
