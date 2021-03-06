import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import BottomTabScreen from "./src/navigation/tabNavigator";
import {enableScreens} from 'react-native-screens'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/screens/main/Login";
import Scan from "./src/screens/main/Scan";
import Signup from "./src/screens/main/SignUp";
import store from "./src/store/store";
import Profile from "./src/screens/user/Profile";
import DetailProduct from "./src/screens/user/DetailProduct";
import ScanUser from "./src/screens/user/ScanUser";
import ScanShopping from "./src/screens/user/ScanShopping";
import Item from "./src/components/Flatlist/Product/Item";
import Panier from "./src/screens/user/Panier";
import DetailProductShopping from "./src/screens/user/DetailProductShopping";
import Shopping from "./src/screens/user/Shopping";
import LstCourse from "./src/screens/user/LstCourse";
import DetailProductPanier from "./src/screens/user/DetailProductPanier";
import DetailProductCourse from "./src/screens/user/DetailProductCourse";
import Loading from "./src/screens/user/Loading";

enableScreens();

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown:false}}>
                        <Stack.Screen name="Login" component={Login}/>
                        <Stack.Screen name="DetailProduct" component={DetailProduct}/>
                        <Stack.Screen name="DetailProductPanier" component={DetailProductPanier}/>
                        <Stack.Screen name="DetailProductCourse" component={DetailProductCourse}/>
                        <Stack.Screen name="DetailProductShopping" component={DetailProductShopping}/>
                        <Stack.Screen name="Loading" component={Loading} />
                        <Stack.Screen name="Scan" component={Scan} />
                        <Stack.Screen name="ScanUser" component={ScanUser} />
                        <Stack.Screen name="Shopping" component={Shopping} />
                        <Stack.Screen name="LstCourse" component={LstCourse} />
                        <Stack.Screen name="ScanShopping" component={ScanShopping} />
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="ProductFlatlistItem" component={Item} />
                        <Stack.Screen name="Panier" component={Panier} />
                        <Stack.Screen name={"BottomTabScreen"} component={BottomTabScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
};
