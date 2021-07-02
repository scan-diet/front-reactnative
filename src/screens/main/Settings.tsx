import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Settings extends React.Component {
    render() {
        return (
            <View style={styles.main_view}>
                <View style={styles.title_view}>
                    <Text style={styles.text}>Réglages</Text>
                </View>

                <View style={styles.button_view}>
                    <Button color={'#1A1D53'} title='Modifier mon profile' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={'#1A1D53'} title='Modifier mon adresse e-mail' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={'#1A1D53'} title='C.G.U' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={'#1A1D53'} title='F.A.Q' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button color={'#1A1D53'} title='Nous contacter' onPress={()=>{}} />
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
