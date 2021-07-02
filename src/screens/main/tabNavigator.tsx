import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import React from "react";
import {useBlueColor, useGreyColor, useWhiteColor} from "../../hooks/colorVariables";
import Home from "../user/Home";
import {Entypo, MaterialIcons, Ionicons} from "@expo/vector-icons";
import Signup from "./SignUp";
import Scan from "../../screens/main/Scan";
import Login from "./Login";

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
                component={Login}
                name={"Login"}
                options={{
                    tabBarLabel:"Login",
                    tabBarIcon: () => {
                        return <MaterialIcons name={'account-circle'} size={24} color={useGreyColor} />
                    }
                }}
            />

            <Tab.Screen
                component={Scan}
                name={"Scan"}
                options={{
                    tabBarLabel:"Shopping",
                    tabBarIcon: () => {
                        return <Entypo name={'shopping-cart'} size={24} color={useGreyColor} />;
                    }
                }}
            />

            <Tab.Screen
                component={Signup}
                name={"Signup"}
                options={{
                    tabBarLabel:"Signup",
                    tabBarIcon: () => {
                        return <Ionicons name={'settings'} size={24} color={useGreyColor} />;
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabScreen;
