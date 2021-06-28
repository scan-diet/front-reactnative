import React from "react";
import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import {SetUserDetail} from "../../Actions";
import {SetToken} from "../../Actions";
import {connect} from 'react-redux';
import {BasicButton} from "../../components/Buttons/BasicButton";
import {useBlueColor, useWhiteColor} from "../../hooks/colorVariables";

interface ILoginProps {
    SetUserDetail: typeof SetUserDetail,
    SetToken: typeof SetToken
}

class Login extends React.Component<ILoginProps> {
    constructor(props: ILoginProps) {
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
                console.log("ok");
                this.props.SetToken(json.token)
                //await this.getUser(json.token)
            }
            console.log(email);
            console.log(json.token);
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        let logo = '../../../../assets/images/logo_scan_diet.png';
        return (
            <View style={styles.main_container}>
                <View style={styles.main_view}>
                    <Image style={styles.logo} source={require(logo)}/>
                    <Text style={styles.home_title}>Bienvenue sur ScanDiet</Text>
                    <TextInput style={styles.text_input} onChangeText={(text )=> {this.setState({email: text})}} placeholder='adresse e-mail'/>
                    <TextInput style={styles.text_input} onChangeText={(text )=> {this.setState({pwd: text})}} secureTextEntry placeholder='Mot de passe'/>
                    <Text style={styles.other_info}>Mot de passe oublié?</Text>
                    <View style={{marginBottom:'15%'}}>
                        <BasicButton title={"Se connecter "} onPress={this.login.bind(this)} />
                    </View>

                    <Text style={styles.other_info}>Pas de compte? <Text style={{fontWeight:"bold"}}>S'inscrire</Text></Text>
                </View>
            </View>
        )
    }
}

export default connect(null, {
    SetToken,
    SetUserDetail
})(Login);

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
        color:useBlueColor,
        fontWeight:'bold',
        textAlign:"center"
    },
    text_input: {
        marginBottom:'5%',
        padding: 7,
        backgroundColor:useWhiteColor,
        width:'80%',
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15
    },
    other_info: {
        marginBottom:'8%',
        color:'#8D8D8D'
    }
})
