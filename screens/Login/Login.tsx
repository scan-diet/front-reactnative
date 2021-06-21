import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';
import {login} from "../../actions/auth";
import {connect} from 'react-redux';
import isEmail from "validator";


class Login extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            passeword: '',
            loading: false
        };
    }
    login(){
        this.setState({loading: true});
        // @ts-ignore
        const {dispatch, history} = this.props;
        // @ts-ignore
        dispatch(login(this.state.email, this.state.passeword))
            .then(()=> {
                history.push(("/profile"));
                window.location.reload();
                console.log("connecté");
            })
            .catch(()=> {
                this.setState({
                    loading: false
                });
            });
    }
    render() {
        let logo = '../../assets/images/logo_scan_diet.png';
        return (
            <View style={styles.main_container}>
                <View style={styles.main_view}>
                    <Image style={styles.logo} source={require(logo)}/>
                    <Text style={styles.home_title}>Bienvenue sur ScanDiet</Text>
                    <TextInput style={styles.text_input}
                               placeholder='Adresse e-mail'
                               onChangeText={(text)=> {this.setState({email: text});}}
                    />
                    <TextInput style={styles.text_input}
                               secureTextEntry
                               placeholder='Mot de passe'
                               onChangeText={(text)=> {this.setState({passeword: text});}}
                    />
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
function  mapStateToProps(state : any){
    const {isLoggedIn}= state.auth;
    const {message} = state.message;
    return {
        isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(Login);