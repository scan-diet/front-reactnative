import React from "react"
import {StyleSheet, View} from "react-native"
import {Text} from "react-native-elements"
import {SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import {useBlueColor, useWhiteColor} from "../../hooks/colorVariables";

const mapStateToProps = (state : any) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch: any )=> {
    return {
        SetUserDetail: (user: any) => dispatch(SetUserDetail(user)),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProfile extends PropsFromRedux {
    user: User
}

/**
 * Display what's the user's BMI
 * @param BMI
 */
function whatBMI(BMI:number){
    if(BMI<16){
        return <Text>Your BMI is <Text style={{color:'orange', fontWeight:"bold"}}>Severe thinness</Text></Text>
    } else if (BMI>=16 && BMI <17){
        return <Text>Your BMI is <Text style={{color:'orange', fontWeight:"bold"}}>Moderate thiness</Text></Text>
    } else if (BMI>=17 && BMI <18.5){
        return <Text>Your BMI is <Text style={{color:'orange', fontWeight:"bold"}}>Mild thinness</Text></Text>
    } else if (BMI>=18.5 && BMI <25){
        return <Text>Your BMI is <Text style={{color:'green', fontWeight:"bold"}}>Normal</Text></Text>
    } else if (BMI>=25 && BMI <30){
        return <Text>Your BMI is <Text style={{color:'red', fontWeight:"bold"}}>Overweight</Text></Text>
    } else if (BMI>=30 && BMI <35){
        return <Text>Your BMI is <Text style={{color:'red', fontWeight:"bold"}}>Obese class I</Text></Text>
    } else if (BMI>=35 && BMI <40){
        return <Text>Your BMI is <Text style={{color:'red', fontWeight:"bold"}}>Obese class II</Text></Text>
    } else if (BMI>40){
        return <Text>Your BMI is <Text style={{color:'red', fontWeight:"bold"}}>Obese class III</Text></Text>
    }
}

function BMIcalculate(weight:number,height:number){
    return whatBMI(weight/(height*height)*10000)
}

function gainOrLooseWeight(weight:number, weightGoal:number){
    if(weight>weightGoal){
        return <Text style={{fontSize:20, fontStyle:"italic"}}>I'm willing to LOSE {weight - weightGoal}kg</Text>
    } else {
        return <Text style={{fontSize:20, fontStyle:"italic"}}>I'm willing to GAIN {weightGoal - weight}kg</Text>
    }
}

function userDiet(item:boolean){
    if(item){
        return "Yes"
    } else return "No"
}

class Profile extends React.Component<IProfile> {
    constructor(props:any) {
        super(props);
        const u = props.user;
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.title_view}>
                    <Text h3>My profile</Text>
                </View>

                <View style={{marginBottom:'5%', backgroundColor:useWhiteColor, borderRadius:10, paddingVertical:5, paddingHorizontal:10, borderColor:useBlueColor, borderWidth:2}}>
                    <Text h4 style={{backgroundColor:useBlueColor, borderRadius:50, paddingLeft:20, color:useWhiteColor}}>About me</Text>
                    <Text style={{fontSize:20}}>Name: <Text style={{fontWeight:"bold"}}>{this.props.user.name}</Text></Text>
                        <Text style={{fontSize:20}}>Mail: <Text style={{fontWeight:"bold"}}>{this.props.user.email}</Text></Text>
                </View>

                <View style={{marginBottom:'5%', backgroundColor:useWhiteColor, borderRadius:10, paddingVertical:5, paddingHorizontal:10, borderColor:useBlueColor, borderWidth:2}}>
                    <Text h4 style={{backgroundColor:useBlueColor, borderRadius:50, paddingLeft:20, color:useWhiteColor}}>About my body</Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Height: <Text style={{fontWeight:"bold"}}>{this.props.user.height}cm</Text></Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Weight: <Text style={{fontWeight:"bold"}}>{this.props.user.weight}kg</Text></Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Weight goal: <Text style={{fontWeight:"bold"}}>{this.props.user.weightGoal}kg</Text></Text>
                    {gainOrLooseWeight(this.props.user.weight,this.props.user.weightGoal)}
                    <Text style={{fontSize:20, paddingVertical:5}}>{BMIcalculate(this.props.user.weight,this.props.user.height)}</Text>
                </View>

                <View style={{marginBottom:'5%', backgroundColor:useWhiteColor, borderRadius:10, paddingVertical:5, paddingHorizontal:10, borderColor:useBlueColor, borderWidth:2}}>
                    <Text h4 style={{backgroundColor:useBlueColor, borderRadius:50, paddingLeft:20, color:useWhiteColor}}>About my diet</Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Vegetarian: {userDiet(this.props.user.vege)}</Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Vegan: {userDiet(this.props.user.vegan)}</Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Gluten-Free: {userDiet(this.props.user.withoutGluten)}</Text>
                    <Text style={{fontSize:20, paddingVertical:5}}>Lactose-Free: {userDiet(this.props.user.withoutLactose)}</Text>
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    },
    title_view: {
        marginBottom:'5%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "left"
    },
})
