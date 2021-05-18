import React from "react";
import {Button, Image, Text, TextInput, View, StyleSheet, Pressable, Alert} from "react-native";

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../images/scan_diet_logo.png')}
                />
                <View style={{flex:1, justifyContent: "center"}}>
                    <Text style={styles.welcomeTitle}>Bienvenue sur ScanDiet</Text>
                </View>

                <View style={{flex:4}}>
                    <TextInput style={styles.textinput} placeholder="Identifiant"/>
                    <TextInput style={styles.textinput} placeholder="Mot de passe"/>

                    <Pressable onPress={()=>Alert.alert('Bouton inactif')}>
                        <Text style={styles.infos}>Mot de passe oublié?</Text>
                    </Pressable>

                    <Button
                        color="#1A1D53"
                        title="Se connecter" onPress={()=>{}}/>
                    <Pressable onPress={()=>Alert.alert('Bouton inactif')}>
                        <Text style={styles.infos}>Pas de compte? S'inscrire</Text>
                    </Pressable>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "red",
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
    },
    welcomeTitle: {
        color: '#1A1D53',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: "center",
        justifyContent: "center"
    },
    textinput: {
        margin: 10,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        borderRadius: 50,
    },
    infos: {
        textAlign: "center",
        margin: 10,
    }
});
