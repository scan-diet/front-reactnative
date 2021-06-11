import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';
import { LinearProgress } from 'react-native-elements';

export default class SignupIdentity extends React.Component {
    render() {
        return (
            <View style={{padding:50, flex:1, justifyContent:'center'}}>
                <View style={{alignSelf:"center", marginBottom:'15%'}}>
                    <Image source={require("../../assets/images/image_register.png")}/>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:25, marginBottom:'15%'}}>C'est parti !</Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <TextInput style={styles.saisie} placeholder='Nom'/>
                    <TextInput style={styles.saisie} placeholder='Prénom'/>
                </View>

                <View style={{alignSelf:"center", flexDirection:'row', marginBottom:'15%'}}>
                    <Button title={'Suivant'} color="#1A1D53" onPress={()=>{}} />
                </View>

                <View>
                    <LinearProgress style={{height:10, borderRadius:20}} color="#6CC57C" value={.2} variant={"determinate"} />
                </View>
            </View>
        )
    }
}
