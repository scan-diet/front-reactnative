import React from "react";
import {Button, SafeAreaView, ScrollView, View} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from "../../components/UI/Buttons/CustomButton";
import {SetUserDetail, SetToken} from "../../store/actions";
import {connect} from 'react-redux';
import User from "../../models/User";
import Profile from "../user/Profile";
import UserProfile from "../../models/UserProfile";
import Diet from "../../models/Diet";

interface ISignupProps {
    SetUserDetail: typeof SetUserDetail,
    SetToken: typeof SetToken
}

const personWeight = <FontAwesome5 name={'weight'} />;
const personHeight = <MaterialCommunityIcons name={'human-male-height'} />;

class Signup extends React.Component<ISignupProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            name:"",
            pwd:"",
            weight:0,
            height:0,
            weightGoal:0,
            vegan:false,
            vege:false,
            lactose:false,
            gluten:false,
            halal:false,
            kosher:false,
            error:'',
        }
    }
    state: {
        email: string,
        name:string,
        pwd: string,
        weight:number,
        height:number,
        weightGoal:number,
        vegan:boolean,
        vege:boolean,
        lactose:boolean,
        gluten:boolean,
        halal:boolean,
        kosher:boolean,
        error: string,
    }

    /**
     * LOGIN
     */
    async login(){
        try {
            const{email, pwd}= this.state;

            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/users/authenticate', {
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
            if (response.status === 200){
                console.log("login")
                console.log(json.token)
                //this.props.SetToken(json.token)
                await this.updateProfile(json.token, pwd);
            }
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * UPDATE PROFILE
     * @param token
     * @param pwd
     */
    async updateProfile(token: string, pwd:any) {
        try {
            // const jwt = require('jsonwebtoken')
            const {email, name, weight, height, weightGoal, gluten, lactose, vege, vegan} = this.state;
            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/users/update-profile', {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'jwt-token': token
                    },
                    body: JSON.stringify({
                            "email": email,
                            "profile": {
                                "name": name,
                                "weight": weight,
                                "height": height,
                                "weightGoal": weightGoal,
                                "diet": {
                                    "withoutLactose": lactose,
                                    "withoutGluten": gluten,
                                    "vegan": vegan,
                                    "vegetarian": vege
                                }
                            }
                        }
                    )
                });
            console.log(response)
            let result = response.status;
            console.log(result)

            if (response.status === 202){
                console.log("PROFILE CREATED")

                // const diet = new Diet(lactose, gluten, vegan, vege);
                // const profile = new UserProfile(name, weight, height, weightGoal, diet);
                const user = new User(email, name, token,height,weight, weightGoal, lactose, gluten, vegan, vege);

                this.props.SetUserDetail(user);
                this.props.navigation.navigate('BottomTabScreen')
            } else {
                console.log("PROFILE NOT CREATED")
                console.log("TOKEN IS \n"+ token)
                console.log("JSON IS")
                console.log(json)

            }
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
                'https://scandiet-nestjs-back.herokuapp.com/users/create', {
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

            let status = response.status;

            if (status === 201){
                console.log("registred")
                await this.login();
            } else {
                console.log("not registred")
            }
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
                            onChangeText={(text )=> {this.setState({name: text})}}
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
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                keyboardType={"email-address"}
                                onChangeText={(text )=> {this.setState({email: text})}}
                                leftIcon={<Icon name='envelope' size={24} color='black'/>}
                            />
                        </View>

                        <View style={{width:250}}>
                            <Input
                                placeholder='Password'
                                onChangeText={(text )=> {this.setState({pwd: text})}}
                                errorStyle={{ color: 'red' }}
                                //passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                                secureTextEntry={true}
                                leftIcon={<Icon name='lock' size={24} color='black'/>}
                            />
                        </View>
                    </View>

                    <View style={{}}>
                        <Text h4>Body Shape</Text>

                        <Input
                            placeholder='Height in cm'
                            keyboardType={'number-pad'}
                            leftIcon={personHeight}
                            onChangeText={(text )=> {this.setState({height: text})}}

                        />

                        <Input
                            placeholder='Weight in kg'
                            keyboardType={"decimal-pad"}
                            leftIcon={personWeight}
                            onChangeText={(text )=> {this.setState({weight: text})}}
                        />

                        <Text h4>Goal</Text>
                        <Input
                            keyboardType={"decimal-pad"}
                            placeholder='Weight goal in kg'
                            leftIcon={personWeight}
                            onChangeText={(text )=> {this.setState({weightGoal: text})}}
                        />
                    </View>

                    <View style={{}}>
                        <Text h4>What's your diet</Text>

                        <View style={{flexDirection:'row'}}>
                            <CustomButton titre={'Vegan'} onPress={()=>{this.setState({vegan: true})}} largeurBouton={"auto"} hauteurBouton={40}/>
                            <CustomButton titre={'Vegetarian'} onPress={()=>{this.setState({vege: true})}} largeurBouton={"auto"} hauteurBouton={40}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <CustomButton titre={'Lactose-Free'} onPress={()=>{this.setState({lactose: true})}} largeurBouton={"auto"} hauteurBouton={40}/>
                            <CustomButton titre={'Gluten-Free'} onPress={()=>{this.setState({gluten: true})}} largeurBouton={"auto"} hauteurBouton={40}/>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <CustomButton titre={'Halal'} onPress={()=>{this.setState({halal: true})}} largeurBouton={"auto"} hauteurBouton={40}/>
                            <CustomButton titre={'Kosher'} onPress={()=>{this.setState({kosher: true})}} largeurBouton={"auto"} hauteurBouton={40}/>
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

const mapStateToProps = (state : any) => {
    return {
        user:state.auth.user
    }
}

const mapDispatchToProps = (dispatch: any )=> {
    return {
        SetUserDetail: (user: any) => dispatch(SetUserDetail(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
