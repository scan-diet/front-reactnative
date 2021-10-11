import React from "react";
import {Button, SafeAreaView, ScrollView, View} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from "../../components/Buttons/CustomButton";
import {SetUserDetail, SetToken, SetHistory} from "../../store/actions";
import {connect} from 'react-redux';
import User from "../../models/User";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {Product} from "../../models/Product";
import Diet from "../../models/Diet";

interface ISignupProps {
    SetUserDetail: typeof SetUserDetail,
    SetToken: typeof SetToken,
    SetHistory: typeof SetHistory
    navigation: any
}

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
    async register() {
        try {
            const {email, pwd, name, weight, height, weightGoal, gluten, lactose, vege, vegan} = this.state;

            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/users/register', {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "user" : {
                                "email":email,
                                "password":pwd
                            },
                            "profile" : {
                                "name":name,
                                "weight":weight,
                                "height":height,
                                "weightGoal":weightGoal,
                                "diet": {
                                    "withoutLactose": lactose,
                                    "withoutGluten": gluten,
                                    "vegan":vegan,
                                    "vegetarian":vege
                                }
                            }

                        }
                    )});
            let status = response.status;
            let json = await response.json();
            if (status === 201){
                this.props.navigation.navigate('Loading')
                const user = new User(email, name, json.token,height,weight, weightGoal, lactose, gluten, vegan, vege);
                this.props.SetUserDetail(user);
                await this.getHistory(json.token);
                this.props.navigation.navigate('BottomTabScreen')

            } else {
            }
        } catch (error) {
        }
    };

    render() {
        return (
            <SafeAreaView style={{padding:50, flex:1}}>
                <ScrollView>
                    <View style={{}}>
                        <Text h4>General Information</Text>

                        <Input
                            placeholder='Firstname'
                            onChangeText={(text )=> {this.setState({name: text})}}
                            keyboardType={"default"}
                            returnKeyType={"next"}
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
                                returnKeyType={"next"}
                                onChangeText={(text )=> {this.setState({email: text})}}
                                leftIcon={<MaterialIcons name="alternate-email" size={24} color="black" />}
                            />
                        </View>

                        <View style={{width:250}}>
                            <Input
                                placeholder='Password'
                                onChangeText={(text )=> {this.setState({pwd: text})}}
                                errorStyle={{ color: 'red' }}
                                passwordRules={"required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"}
                                secureTextEntry={true}
                                leftIcon={<Icon name='lock' size={24} color='black'/>}
                                returnKeyType={"next"}
                                showSoftInputOnFocus={true}
                            />
                        </View>
                    </View>

                    <View style={{}}>
                        <Text h4>Body Shape</Text>

                        <Input
                            placeholder='Height in cm'
                            keyboardType={'number-pad'}
                            leftIcon={<MaterialCommunityIcons name="human-male-height-variant" size={24} color="black" />}
                            onChangeText={(text )=> {this.setState({height: text})}}
                            maxLength={3}
                            returnKeyType={"next"}
                        />

                        <Input
                            placeholder='Weight in kg'
                            keyboardType={"decimal-pad"}
                            leftIcon={<FontAwesome5 name="weight" size={24} color="black" />}
                            onChangeText={(text )=> {this.setState({weight: text})}}
                            maxLength={3}
                            returnKeyType={"next"}
                        />

                        <Text h4>Goal</Text>
                        <Input
                            keyboardType={"decimal-pad"}
                            placeholder='Weight goal in kg'
                            leftIcon={<FontAwesome5 name="weight" size={24} color="black" />}
                            onChangeText={(text )=> {this.setState({weightGoal: text})}}
                            maxLength={3}
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
        SetHistory: (history: any) => dispatch(SetHistory(history)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
