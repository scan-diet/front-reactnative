import React from 'react'
import {View, Text, Button, StyleSheet } from 'react-native'
import {useBlueColor} from "../../hooks/colorVariables";
import {openURL} from "expo-linking";

interface ISettings {
    navigation: any
}

export default class Settings extends React.Component<ISettings> {
    render() {
        return (
            <View style={styles.main_view}>
                <View style={styles.title_view}>
                    <Text style={styles.text}>Settings</Text>
                </View>

                <View style={styles.button_view}>
                    <Button color={useBlueColor} title='Privacy policy' onPress={()=>{openURL("https://scan-diet.github.io/PrivacyPolicy/")}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={useBlueColor} title='F.A.Q' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={useBlueColor} title='Contact us' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={useBlueColor} title='LOGOUT' onPress={()=>{
                        this.props.navigation.navigate('Login');
                    }} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_view: {
        flex:1,
        padding:50,
        justifyContent:"flex-start",
        backgroundColor:"#F4F5FA"
    },
    title_view: {
        marginBottom:'5%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "left"
    },
    button_view: {
        marginBottom: '5%',
        width: "90%",
        alignSelf: 'center'
    }
})
