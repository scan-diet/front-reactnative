import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Navigation from './src/components/Navigation';
import {Provider} from "react-redux";
import BottomTabScreen from "./src/screens/main/tabNavigator";
import {enableScreens, useScreens} from 'react-native-screens'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/user/Home";
import HomeNav from "./src/components/HomeNav";
import tabNavigator from "./src/screens/main/tabNavigator";
import Login from "./src/screens/main/Login";
import Scan from "./src/screens/main/Scan";
import Signup from "./src/screens/main/SignUp";
import {combineReducers, createStore} from "redux";
import userReducer from "./src/store/reducers/authReducer";
import store from "./src/store/store";

enableScreens();

const Stack = createStackNavigator();

/*const rootReducer = combineReducers({
    users: userReducer
});
const store = createStore(rootReducer);
 */

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
/**
 * NEW VERSION TO REMOVE IF NOT WORKING
 */


/*export default class App extends React.Component {

    render(){
        return (
            <Provider store={store}>
                <NavigationContainer>
                    {{/!*<Navigation />*!/}}
                    <Stack.Navigator screenOptions={{headerShown:false}}>
                        <Stack.Screen name="Login" component={Login}/>
                        <Stack.Screen name="Scan" component={Scan} />
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name={"BottomTabScreen"} component={BottomTabScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}*/
