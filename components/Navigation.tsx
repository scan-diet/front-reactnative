import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import Settings from "../screens/Settings/Settings";
import {View, Image, Text} from "react-native";
import Login from "../screens/Login/Login";
import Shopping from "../screens/Shopping/Shopping";
import Home from "../screens/Home/Home";
import SignupBodyShape from "../screens/SignUp/SignupBodyShape";
import SignupIdentity from "../screens/SignUp/SignupIdentity";
import SignupGoal from "../screens/SignUp/SignupGoal";
import SignupDiet from "../screens/SignUp/SignupDiet";
const Tab = createBottomTabNavigator();

const Navigation = () =>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
        >{/* REMETTRE QUAND J'AI FINI DE FAIRE LES ECRANS D'INSCRIPTION*/ }
            { /*

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
                            Home
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
            <Tab.Screen name="Shopping" component={Shopping} options={{
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
                            Course
                        </Text>
                    </View>
                )
            }}  />



                <Tab.Screen name="Settings" component={Settings} options={{
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
                            Réglages
                        </Text>
                    </View>
                )
            }}  />
                 */
            }

            <Tab.Screen name="SignupIdentity" component={SignupIdentity} options={{
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
                            Inscription1
                        </Text>
                    </View>
                )
            }}  />

            <Tab.Screen name="SignupBodyShape" component={SignupBodyShape} options={{
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
                            Inscription2
                        </Text>
                    </View>
                )
            }}  />

            <Tab.Screen name="SignupGoal" component={SignupGoal} options={{
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
                            Inscription3
                        </Text>
                    </View>
                )
            }}  />

            <Tab.Screen name="SignupDiet" component={SignupDiet} options={{
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
                            Inscription4
                        </Text>
                    </View>
                )
            }}  />
        </Tab.Navigator>


    );
}

export default Navigation;
