import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';

export default class Connexion extends React.Component {
    render() {
        let logo = '../../assets/images/scan_diet_logo.png';
        return (
            <View style={styles.main_container}>
                <View style={styles.main_view}>
                    <Image style={styles.logo} source={require(logo)}/>
                    <Text style={styles.home_title}>Bienvenue sur ScanDiet</Text>
                    <TextInput style={styles.text_input} placeholder='Adresse e-mail'/>
                    <TextInput style={styles.text_input} secureTextEntry placeholder='Mot de passe'/>
                    <Text style={styles.other_info}>Mot de passe oublié?</Text>
                    <View style={{marginBottom:'15%'}}>
                        <Button title='Se connecter' color="#1A1D53" onPress={()=>{}} />
                    </View>

                    <Text style={styles.other_info}>Pas de compte? S'inscrire</Text>
                </View>
            </View>
        )
    }
}
