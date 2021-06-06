import React from "react";
import {Button, Image, Text, TextInput, View} from "react-native";
import styles from './styles';
import { LinearProgress } from 'react-native-elements';
import ChampSaisie from "../../composants/ChampSaisie";
import Bouton from "../../composants/Bouton";

export default class InscriptionIdentite extends React.Component {
    render() {
        let logo = '../../assets/images/scan_diet_logo.png';
        return (
            <View style={{padding:50, flex:1, justifyContent:'center'}}>

                <View style={{alignSelf:"center", marginBottom:'15%'}}>
                    <Image source={require("../../assets/images/image_inscription.png")}/>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:25, marginBottom:'15%'}}>C'est parti !</Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <ChampSaisie placeholder='Nom' />
                    <ChampSaisie placeholder='Prénom' />
                </View>

                <View style={{alignSelf:"center", flexDirection:'row', marginBottom:'15%'}}>
                    <Bouton title='Suivant'/>
                </View>

                <View>
                    <LinearProgress style={{height:10, borderRadius:20}} color="#6CC57C" value={.2} variant={"determinate"} />
                </View>
            </View>
        )
    }
}
