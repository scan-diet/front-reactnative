import React from "react";
import {Button, SafeAreaView, ScrollView, View} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterielCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import styles from './styles';
import CustomButton from "../../components/CustomButton";
import {SetUserDetail} from "../../Actions";
import {SetToken} from "../../Actions";
import {connect} from 'react-redux';

interface IRecipeProps {
    SetUserDetail: typeof SetUserDetail,
    SetToken: typeof SetToken
}

const personWeight = <FontAwesome5 name={'weight'}  />;
const personHeight = <MaterielCommunityIcons name={'human-male-height'} />;

export default class Signup extends React.Component<IRecipeProps> {
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

    /**
     * GETUSER FUNCTION
     * @param token
     */
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

    /**
     * LOGIN FUNCTION
     */
    async login() {
        try {
            const{email, pwd}= this.state;

            let response = await fetch(
                'http://192.168.1.40:3200/users/authenticate', {
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
                this.props.SetToken(json.token)
                await this.getUser(json.token)
            }
            console.log(email);
            console.log(json);
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * REGISTER FUNCTION
     */
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
        return (
            <SafeAreaView style={{padding:50, flex:1}}>
                <ScrollView>
                    <View style={{}}>
                        <Text h4>General information</Text>

                        <Input
                            placeholder='Firstname'
                            keyboardType={"default"}
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='black'
                                />
                            }
                        />

                        <View style={{width:250}}>
                            <Input
                                placeholder='E-mail'
                                keyboardType={"email-address"}
                                onChangeText={(text )=> {this.setState({email: text})}}
                                leftIcon={
                                    <Icon
                                        name='envelope'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        </View>

                        <View style={{width:250}}>
                            <Input
                                placeholder='Password'
                                onChangeText={(text )=> {this.setState({pwd: text})}}
                                errorStyle={{ color: 'red' }}
                                passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                                secureTextEntry={true}
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                        </View>
                    </View>

                    <View style={{}}>
                        <Text h4>Body Shape</Text>

                        <Input
                            placeholder='Height in cm'
                            keyboardType={'number-pad'}
                            leftIcon={personHeight}
                        />

                        <Input
                            placeholder='Weight in kg'
                            keyboardType={"decimal-pad"}
                            leftIcon={personWeight}
                        />

                        <Text h4>Goal</Text>
                        <Input
                            keyboardType={"decimal-pad"}
                            placeholder='Weight goal in kg'
                            leftIcon={personWeight}
                        />
                    </View>

                    <View style={{}}>
                        <Text h4>What's your diet</Text>

                        <View style={{flexDirection:'row'}}>
                            <CustomButton titre={'Vegan'} onPress={()=>{}} largeurBouton={"auto"} hauteurBouton={40}/>
                            <CustomButton titre={'Vegetarian'} onPress={()=>{}} largeurBouton={"auto"} hauteurBouton={40}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <CustomButton titre={'Lactose-Free'} onPress={()=>{}} largeurBouton={"auto"} hauteurBouton={40}/>
                            <CustomButton titre={'Gluten-Free'} onPress={()=>{}} largeurBouton={"auto"} hauteurBouton={40}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <CustomButton titre={'Halal'} onPress={()=>{}} largeurBouton={"auto"} hauteurBouton={40}/>
                            <CustomButton titre={'Kosher'} onPress={()=>{}} largeurBouton={"auto"} hauteurBouton={40}/>
                        </View>
                    </View>

                    <View style={{alignSelf:"center", flexDirection:'row'}}>
                        <Button title={'Submit'} color="#1A1D53" onPress={this.register.bind(this)} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

connect(null, {
    SetToken,
    SetUserDetail
})(Signup);
