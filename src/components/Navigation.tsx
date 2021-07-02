import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import {View, Image, Text} from "react-native";
import Home from "../screens/user/Home";
import DetailProduct from "../screens/user/DetailProduct";
import Login from "../screens/main/Login";
import Settings from "../screens/main/Settings";
import Signup from "../screens/main/SignUp";
import Scan from "../screens/main/Scan";
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
                            source={require('../assets/images/image_home.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Accueil
                        </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="profil" component={Login} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/image_profil.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Profil
                        </Text>
                    </View>
                )
            }}  />
            <Tab.Screen name="Scan" component={Scan} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/image_shopping_cart.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Scan
                        </Text>
                    </View>
                )
            }}  />
            <Tab.Screen name="Signup" component={Signup} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/image_settings.png')}
                            resizeMode= 'contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1A1D53' : '#748c94'
                            }}
                        />
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Signup
                        </Text>
                    </View>
                )
            }}  />
        </Tab.Navigator>
    );
}

export default Navigation;
