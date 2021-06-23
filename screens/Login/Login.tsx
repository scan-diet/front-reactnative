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
    login(){
        const{
            email, pwd
        }= this.state;
        console.log(email);
        console.log(pwd);
        fetch("localhost:3200/users/authenticate",{
            method: "post",
            body: JSON.stringify(
                {
                    email,
                    pwd
                })
        }).then(response => {
            console.log(("ok"))
        }).catch((error:{message: string}) => {
            console.log("nok")
        })
    }
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
