import React from "react";
import { Button, Image, Text, TextInput, View, StyleSheet} from "react-native";

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.logo}
                    source={require('../images/scan_diet_logo.png')}
                />
                <Text style={styles.welcomeTitle}>Bienvenue sur ScanDiet</Text>
                <TextInput placeholder="Identifiant"/>
                <TextInput placeholder="Mot de passe"/>
                <Text>Mot de passe oublié?</Text>
                <Button title="Se connecter" onPress={()=>{}}/>
                <Text>Pas de compte? S'inscrire</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center"
    },
    welcomeTitle: {
        color: '#1A1D53',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: "center"
    }
});
