import React from "react";
import {Button, SafeAreaView, ScrollView, View} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from "../../components/UI/Buttons/CustomButton";
import {SetUserDetail, SetToken} from "../../store/actions";
import {connect} from 'react-redux';

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
            if (response.status === 200){
                console.log("login")
                console.log(json.token)
                this.props.SetToken(json.token)
                await this.createProfil(json.token);
            }
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * CREATE PROFILE
     * @param token
     */
    async createProfil(token: any) {
        try {
            // const jwt = require('jsonwebtoken')
            const {email, name, weight, height, weightGoal, gluten, lactose, vege, vegan} = this.state;
            let response = await fetch(
                'http://192.168.1.40:3200/users/update-profile', {
                    method: "post",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        // 'Authorization':`Bearer ${jwt.encode(token)}`
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
            let json = await response.json();
            if (response.status === 200){
                console.log("profile created")
                this.props.navigation.navigate('BottomTabScreen')
            } else {
                console.log("profile not created")
                console.log(token)
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
                                //passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
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

export default connect(null, {
    SetToken,
    SetUserDetail
})(Signup);
