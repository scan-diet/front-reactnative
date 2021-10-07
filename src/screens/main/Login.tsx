import React from "react";
import {Image, StyleSheet, Text, TextInput, View, ActivityIndicator} from "react-native";
import {SetHistory, SetUserDetail} from "../../store/actions";
import {SetToken} from "../../store/actions";
import {connect} from 'react-redux';
import {BasicButton} from "../../components/Buttons/BasicButton";
import {useBlueColor, useWhiteColor} from "../../hooks/colorVariables";
import User from "../../models/User";
import {Product} from "../../models/Product";
import Diet from "../../models/Diet";

interface ILoginProps {
    SetUserDetail: typeof SetUserDetail,
    SetToken: typeof SetToken,
    SetHistory: typeof SetHistory,
    navigation: any
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
    async getHistory(token: any){
        try{
            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/scans/history', {
                    method: "get",
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "jwt-token":token
                    }
                }
            );
            let json = await response.json();
            let status = response.status;
            let history:Product[] = []
            for (let i=0; i<json.length; i++){
                if(json[i]!=null){
                    let product:Product = new Product(
                        json[i].name,
                        json[i].image.path,
                        [],
                        "",
                        0,
                        json[i].bar_code,
                        0,
                        new Diet(false,false,false,false),
                        false
                    )
                    let inList = false
                    for(let k=0;k>history.length;k++){
                        if(json[i].name==history[k].name){
                            inList = true
                        }
                    }
                    if(inList == false){
                        history.push(product)
                    }
                }
            }
            if (status === 200){
                this.props.SetHistory(history);
                this.props.navigation.navigate('BottomTabScreen')
            }

        } catch (error) {
            console.error(error);
        }
    }
    async getUser(token: any){
        try{
            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/users/current-user', {
                    method: "get",
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "jwt-token":token
                    }
                }
            );
            let json = await response.json();
            let status = response.status;
            if (status === 200){
                const user = new User(json.email, json.profile.name, token,json.profile.height,json.profile.weight, json.profile.weightGoal, json.profile.diet.withoutLactose, json.profile.diet.withoutGluten, json.profile.diet.vegan, json.profile.diet.vegetarian);
                this.props.SetUserDetail(user);
                await this.getHistory(token);
            }

        } catch (error) {
            console.error(error);
        }
    }
    async login() {
        try {
            const{email, pwd}= this.state;

            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/users/authenticate', {
                    method: "POST",
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
                console.log(json.token)
                await this.getUser(json.token)
                this.props.navigation.navigate('BottomTabScreen')
            } else {
                alert(json.message)
            }
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
                    <Text style={styles.home_title}>Welcome to ScanDiet</Text>
                    <TextInput style={styles.text_input} keyboardType={"email-address"} autoCapitalize={"none"} onChangeText={(text )=> {this.setState({email: text})}} placeholder='E-mail address'/>
                    <TextInput style={styles.text_input} onChangeText={(text )=> {this.setState({pwd: text})}} secureTextEntry placeholder='Password'/>

                    <View style={{marginBottom:'15%'}}>
                        <BasicButton title={"Login"} onPress={this.login.bind(this)} />
                        <ActivityIndicator size="large" />
                    </View>

                    <Text style={[{fontWeight:"bold"},styles.other_info]} onPress={()=>{this.props.navigation.navigate('Signup')}}>
                        Create account
                    </Text>
                </View>
            </View>
        )
    }
}

export default connect(null, {
    SetToken,
    SetUserDetail,
    SetHistory
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
