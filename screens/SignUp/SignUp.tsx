import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';
import {SetUserDetail} from "../../Actions";
import {SetToken} from "../../Actions";
import {connect} from 'react-redux';

interface IRecipeProps {
    SetUserDetail: typeof SetUserDetail,
    SetToken: typeof SetToken
}

class SignUp extends React.Component<IRecipeProps> {
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
    async getUser(token: any){
        try{
            let response = await fetch(
                'http://192.168.1.40:3200/users/current-user', {
                    method: "get",
                    headers:{
                        "jwt-token":token
                    }
                }
            );
            let json = await response.json();
            let status = response.status;
            if (status === 200){
                this.props.SetUserDetail(json)
            }

        } catch (error) {
            console.error(error);
        }
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
            let status = response.status;
            if (status === 200){
                this.props.SetToken(json.token)
                await this.getUser(json.token)
            }
            console.log(email);
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };
    async register() {
        try {
            const{email, pwd}= this.state;

            let response = await fetch(
                'http://192.168.1.40:3200/users/create', {
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
            let status = response.status;
            if (status === 201){
                await this.login()
            }
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
                    <View style={{marginBottom:'15%'}}>
                        <Button title='Sinscrire' color="#1A1D53" onPress={this.register.bind(this)} />
                    </View>

                    <Text style={styles.other_info}>Deja un compte ? <Text style={{fontWeight:"bold"}}>Se conneter</Text></Text>
                </View>
            </View>
        )
    }
}

export default connect(null, {
    SetToken,
    SetUserDetail
})(SignUp);