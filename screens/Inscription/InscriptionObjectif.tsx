import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';
import { LinearProgress } from 'react-native-elements';

export default class InscriptionObjectif extends React.Component {
    render() {
        let logo = '../../assets/images/scan_diet_logo.png';
        return (
            <View style={{padding:50, flex:1, justifyContent:'center'}}>

                <View style={{alignSelf:"center", marginBottom:'15%'}}>
                    <Image source={require("../../assets/images/image_inscription.png")}/>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:24, marginBottom:'15%', color:'#1A1D53'}}>Quel est votre <Text style={{color:'#6CC57C'}}>objectif</Text> ?</Text>
                </View>

                <View style={{alignItems:'center'}}>
                <TextInput style={{
                    marginBottom:'5%',
                        padding: 7,
                        backgroundColor:"#FFFFFF",
                        width:'30%',
                        borderRadius:5,
                        paddingLeft:15,
                        paddingRight:15
                }} placeholder='Taille'/>

                <TextInput style={{
                    marginBottom:'15%',
                        padding: 7,
                        backgroundColor:"#FFFFFF",
                        width:'30%',
                        borderRadius:5,
                        paddingLeft:15,
                        paddingRight:15
                }} placeholder='Poids'/>
                    </View>

                    <View style={{alignSelf:"center", flexDirection:'row', marginBottom:'15%'}}>
                <Button color="#1A1D53" title={'Suivant'} onPress={()=>{}}/>
                </View>

                <View>
                    <LinearProgress style={{height:10, borderRadius:20}} color="#6CC57C" value={.6} variant={"determinate"} />
                </View>
            </View>
        )
    }
}
