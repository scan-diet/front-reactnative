import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import Reglages from "../ecrans/Reglages/Reglages";
import {View, Image, Text} from "react-native";
import Connexion from "../ecrans/Connexion/Connexion";
import ModeCourse from "../ecrans/ModeCourse/ModeCourse";
import Accueil from "../ecrans/Accueil/Accueil";
import DetailProduct from "../ecrans/DetailProduct/DetailProduct";
const Tab = createBottomTabNavigator();

const Navigation = () =>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen name="Accueil" component={Accueil} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/accueil.png')}
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
            <Tab.Screen name="profil" component={Connexion} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/profil.png')}
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
            <Tab.Screen name="ModeCourse" component={DetailProduct} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/chariot.png')}
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
            <Tab.Screen name="Reglages" component={Reglages} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/reglages.png')}
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