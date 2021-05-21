import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from "./styles";

export default class Reglages extends React.Component {
    render() {
        return (
            <View style={styles.main_view}>
                <View style={styles.title_view}>
                    <Text style={styles.text}>Réglages</Text>
                </View>

                <View style={styles.button_view}>
                    <Button title='Modifier mon profil' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button title='Modifier mon adresse e-mail' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button title='C.G.U' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button title='F.A.Q' onPress={()=>{}} />
                </View>

                <View style={styles.button_view}>
                    <Button title='Nous contacter' onPress={()=>{}} />
                </View>
            </View>
        )
    }
}
