import React from "react"
import {StyleSheet, View} from "react-native"
import {Text} from "react-native-elements"
import {SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";

const myWeight = 80
const myWeightGoal = 75
const myHeight = 180
const BMIcalculation = myWeight/(myHeight*myHeight)*10000

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
        return <Text>Your BMI is <Text style={{color:'yellow', fontWeight:"bold"}}>Severe thinness</Text></Text>
    } else if (BMI>=16 && BMI <17){
        return <Text>Your BMI is <Text style={{color:'yellow', fontWeight:"bold"}}>Moderate thiness</Text></Text>
    } else if (BMI>=17 && BMI <18.5){
        return <Text>Your BMI is <Text style={{color:'orange', fontWeight:"bold"}}>Mild thinness</Text></Text>
    } else if (BMI>=18.5 && BMI <25){
        return <Text>Your BMI is <Text style={{color:'green', fontWeight:"bold"}}>Normal</Text></Text>
    } else if (BMI>=25 && BMI <30){
        return <Text>Your BMI is <Text style={{color:'red', fontWeight:"bold"}}>Overweight</Text></Text>
    } else if (BMI>=30 && BMI <35){
        return <Text>Your BMI is <Text style={{color:'lightred', fontWeight:"bold"}}>Obese class I</Text></Text>
    } else if (BMI>=35 && BMI <40){
        return <Text>Your BMI is <Text style={{color:'red', fontWeight:"bold"}}>Obese class II</Text></Text>
    } else if (BMI>40){
        return <Text>Your BMI is <Text style={{color:'darkred', fontWeight:"bold"}}>Obese class III</Text></Text>
    }
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

                <View style={{marginBottom:'5%'}}>
                    <Text>Firstname: {this.props.user.name}</Text>
                    <Text>Mail: {this.props.user.email}</Text>
                </View>

                <View>
                    <Text h4>About my body</Text>
                    <Text>Height: {this.props.user.height}cm</Text>
                    <Text>Weight: {this.props.user.weight}kg</Text>
                    <Text>Weight goal: {this.props.user.weightGoal}kg</Text>
                    <Text>I'm willing to lose {this.props.user.weight - this.props.user.weightGoal}kg</Text>
                    <Text>Body Mass Index: {BMIcalculation.toFixed(2)}</Text>
                    {whatBMI(BMIcalculation)}
                </View>

                <View>
                    <Text h4>About my diet</Text>
                    <Text>Vege</Text>
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
