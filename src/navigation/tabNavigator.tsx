import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import React from "react";
import {useBlueColor, useGreyColor, useWhiteColor} from "../hooks/colorVariables";
import Home from "../screens/user/Home";
import {Entypo, MaterialIcons, Ionicons} from "@expo/vector-icons";
import Settings from "../screens/main/Settings";
import Profile from "../screens/user/Profile";
import Shopping from "../screens/user/Shopping";

const Tab = createMaterialBottomTabNavigator();

const BottomTabScreen = () => {

    return (
        <Tab.Navigator
            backBehavior={"order"}
            initialRouteName={"Homescreen"}
            activeColor={useBlueColor}
            inactiveColor={useGreyColor}
            barStyle={{backgroundColor:useWhiteColor}}
            shifting={true}
        >
            <Tab.Screen
                component={Home}
                name={"Home"}
                options={{
                    tabBarLabel:"Home",
                    tabBarIcon: () => {
                        return <Entypo name={'home'} size={24} color={useGreyColor} />;
                    }
                }}
            />

            <Tab.Screen
                component={Profile}
                name={"Profil"}
                options={{
                    tabBarLabel:"Profile",
                    tabBarIcon: () => {
                        return <MaterialIcons name={'account-circle'} size={24} color={useGreyColor} />
                    }
                }}
            />

            <Tab.Screen
                component={Shopping}
                name={"Shopping"}
                options={{
                    tabBarLabel:"Shopping",
                    tabBarIcon: () => {
                        return <Entypo name={'shopping-cart'} size={24} color={useGreyColor} />;
                    }
                }}
            />

            <Tab.Screen
                component={Settings}
                name={"Settings"}
                options={{
                    tabBarLabel:"Settings",
                    tabBarIcon: () => {
                        return <Ionicons name={'settings'} size={24} color={useGreyColor} />;
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabScreen;
