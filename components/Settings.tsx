import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class Settings extends React.Component {
    render() {
        return (
            <View style={style.main_view}>
                <View style={style.title_view}>
                    <Text style={style.text}>Réglages</Text>
                </View>

                <View style={style.button_view}>
                    <Button title='Modifier mon profil' onPress={()=>{}} />
                </View>

                <View style={style.button_view}>
                    <Button title='Modifier mon adresse e-mail' onPress={()=>{}} />
                </View>

                <View style={style.button_view}>
                    <Button title='C.G.U' onPress={()=>{}} />
                </View>

                <View style={style.button_view}>
                    <Button title='F.A.Q' onPress={()=>{}} />
                </View>

                <View style={style.button_view}>
                    <Button title='Nous contacter' onPress={()=>{}} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
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
