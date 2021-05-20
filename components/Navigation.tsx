import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Login from './Login';
import React from "react";
import Settings from "./Settings";
import Cart from './Cart';
import {View, Image, Text} from "react-native";
const Tab = createBottomTabNavigator();

const Navigation = () =>{
    return(
		<Tab.Navigator
            tabBarOptions={{
                showLabel: false
        }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../images/home.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Home
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Account" component={Login} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../images/account.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Compte
                        </Text>
                    </View>
                )
            }}  />
            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../images/cart.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Courses
                        </Text>
                    </View>
                )
            }}  />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../images/settings.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Réglages
                        </Text>
                    </View>
                )
            }}  />
        </Tab.Navigator>
    );
}

export default Navigation;
