import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import {View, Image, Text} from "react-native";
import ProductFlatList from "./ProductFlatList";
import Scan from "./Scan";
const Tab = createBottomTabNavigator();

const HomeNav = () =>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor : "#F4F5FA",
                },
            }}
        >
            <Tab.Screen name="Dernier Scan" component={ProductFlatList} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Dernier Scan
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Produit" component={Scan} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            style={{color: '#748c94',fontSize: 12, backgroundColor: focused ? '#1A1D53' : '#F4F5FA',borderRadius:10}}>
                            Produit
                        </Text>
                    </View>
                )
            }}  />
        </Tab.Navigator>
    );
}

export default HomeNav;
