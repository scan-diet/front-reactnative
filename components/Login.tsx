import React from "react";
import {Button, Image, Text, TextInput, View, StyleSheet} from "react-native";

export default class LoginV2 extends React.Component {
    render() {
        let logo = '../images/scan_diet_logo.png';
        return (
            <View style={styles.main_container}>
                <View style={styles.main_view}>
                    <Image style={styles.logo} source={require(logo)}/>
                    <Text style={styles.home_title}>Bievenue sur ScanDiet</Text>
                    <TextInput style={styles.text_input} placeholder='Adresse e-mail'/>
                    <TextInput style={styles.text_input} secureTextEntry placeholder='Mot de passe'/>
                    <Text style={styles.other_info}>Mot de passe oublié?</Text>
                    <View style={{marginBottom:'15%'}}>
                        <Button title='Se connecter' onPress={()=>{}} />
                    </View>

                    <Text style={styles.other_info}>Pas de compte? S'inscrire</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        padding:50,
        backgroundColor:"#F4F5FA"
    },
    main_view: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    logo: {
        width:100,
        height:100,
        marginBottom:'15%'
    },
    home_title: {
        marginBottom:'10%',
        fontSize:45,
        color:'#1A1D53',
        fontWeight:'bold',
        textAlign:"center"
    },
    text_input: {
        marginBottom:'5%',
        padding: 7,
        backgroundColor:"#FFFFFF",
        width:'80%',
        borderRadius:20,
        paddingLeft:15,
        paddingRight:15
    },
    other_info: {
        marginBottom:'8%',
        color:'#8D8D8D'
    }
})
