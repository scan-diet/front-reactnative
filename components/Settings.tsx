import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

export default class Settings extends React.Component {
    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>Reglages</Text>
                <View style={style.bouton}>
                    <Button title='Modifier mon profil' onPress={() => Alert.alert('Cannot press this one')} />
                </View>
                <View style={style.bouton}>
                    <Button title='Modifier mon adresse e-mail' onPress={() => Alert.alert('Cannot press this one')} />
                </View>
                <View style={style.bouton}>
                    <Button title='C.G.U' onPress={() => Alert.alert('Cannot press this one')} />
                </View>
                <View style={style.bouton}>
                    <Button title='F.A.Q' onPress={() => Alert.alert('Cannot press this one')} />
                </View>
                <View style={style.bouton}>
                    <Button title='Nous contacter' onPress={() => Alert.alert('Cannot press this one')} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        margin: 20,
        padding: 20
    },

    title: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold'
    },

    bouton: {
        margin: 5,
        padding: 5
    }
})
