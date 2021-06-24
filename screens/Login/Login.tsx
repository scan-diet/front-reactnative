import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';

export default class Login extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            pwd:"",
            error:'',
        }
    }
    state: {
        email: string,
        pwd: string,
        error: string,
    }

    async login() {
        try {
            const{email, pwd}= this.state;

            let response = await fetch(
                'http://192.168.1.40:3200/users/authenticate', {
                    method: "post",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "email":email,
                            "password":pwd
                        }
            )});

            let json = await response.json();
            console.log(email);
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        let logo = '../../assets/images/logo_scan_diet.png';
        return (
            <View style={styles.main_container}>
                <View style={styles.main_view}>
                    <Image style={styles.logo} source={require(logo)}/>
                    <Text style={styles.home_title}>Bienvenue sur ScanDiet</Text>
                    <TextInput style={styles.text_input} onChangeText={(text )=> {this.setState({email: text})}} placeholder='Adresse e-mail'/>
                    <TextInput style={styles.text_input} onChangeText={(text )=> {this.setState({pwd: text})}} secureTextEntry placeholder='Mot de passe'/>
                    <Text style={styles.other_info}>Mot de passe oublié?</Text>
                    <View style={{marginBottom:'15%'}}>
                        <Button title='Se connecter' color="#1A1D53" onPress={this.login.bind(this)} />
                    </View>

                    <Text style={styles.other_info}>Pas de compte? <Text style={{fontWeight:"bold"}}>S'inscrire</Text></Text>
                </View>
            </View>
        )
    }
}
