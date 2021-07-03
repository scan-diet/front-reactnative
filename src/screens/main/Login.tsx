import React from "react";
import {Image, StyleSheet, Text, TextInput, View} from "react-native";
import {connect} from 'react-redux';
import {BasicButton} from "../../components/UI/Buttons/BasicButton";
import {useBlueColor, useWhiteColor} from "../../hooks/colorVariables";
import {login} from "../../store/actions/auth";

interface ILoginProps {
    dispatch : any
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
    handleLogin(){
        this.setState({loading: true});
        this.props
            .dispatch(
                login(this.state.email, this.state.pwd)
            )
            .then(()=>{
                //Page d'accueil
            })
    }
    render() {
        let logo = '../../assets/images/logo_scan_diet.png';
        return (
            <View style={styles.main_container}>
                <View style={styles.main_view}>
                    <Image style={styles.logo} source={require(logo)}/>
                    <Text style={styles.home_title}>Bienvenue sur ScanDiet</Text>
                    <TextInput style={styles.text_input} keyboardType={"email-address"} autoCapitalize={"none"} onChangeText={(text )=> {this.setState({email: text})}} placeholder='adresse e-mail'/>
                    <TextInput style={styles.text_input} onChangeText={(text )=> {this.setState({pwd: text})}} secureTextEntry placeholder='Mot de passe'/>
                    <Text style={styles.other_info}>Mot de passe oublié?</Text>
                    <View style={{marginBottom:'15%'}}>
                        <BasicButton title={"Se connecter "} onPress={this.handleLogin.bind(this)} />
                    </View>

                    <Text style={styles.other_info}>Pas de compte? <Text style={{fontWeight:"bold"}} onPress={()=>{this.props.navigation.navigate('Signup')}}>S'inscrire</Text></Text>
                </View>

                <View>
                    <Text style={{textDecorationStyle:"dashed"}} onPress={()=>{this.props.navigation.navigate('Scan')}}>Je souhaite d'abord tester l'application</Text>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state: any) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}
export default connect(mapStateToProps)(Login);

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
