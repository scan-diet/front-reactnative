import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from "react";
import Reglages from "../ecrans/Reglages/Reglages";
import {View, Image, Text} from "react-native";
import Connexion from "../ecrans/Connexion/Connexion";
import ModeCourse from "../ecrans/ModeCourse/ModeCourse";
import Accueil from "../ecrans/Accueil/Accueil";
import ProduitFlatList from "./ProduitFlatList";
import Scan from "./Scan";
import Scores from "./Scores";
const Tab = createBottomTabNavigator();

const AccueilNav = () =>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor : "#F4F5FA",
                },
            }}
        >
            <Tab.Screen name="Dernier Scan" component={ProduitFlatList} options={{
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
            <Tab.Screen name="Scores" component={Scores} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            style={{color: focused ? '#1A1D53' : '#748c94',fontSize: 12}}>
                            Score
                        </Text>
                    </View>
                )
            }}  />
        </Tab.Navigator>
    );
}

export default AccueilNav;
