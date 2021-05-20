import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from './Login';
import React from "react";
import Settings from "./Settings";
const Tab = createBottomTabNavigator();

const Navigation = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="SettingsV2" component={Settings} />
        </Tab.Navigator>
    );
}

export default Navigation;
