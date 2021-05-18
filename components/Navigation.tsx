import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from './Login';
import React from "react";
const Tab = createBottomTabNavigator();
const Navigation = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Home" component={Login} />
        </Tab.Navigator>
    );
}

export default Navigation;