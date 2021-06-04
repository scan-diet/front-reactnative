import React, {FC} from "react";
import {Button, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from './styles';
import { LinearProgress } from 'react-native-elements';
import Carte from "../../composants/Carte";
import CustomButton from '../../composants/CustomButton';


interface IColorButtonProps {
    title: string,
    isSelected: boolean,
    onPress: (title:string,selected:boolean)=>void
}

export default class InscriptionRegime extends React.Component {
    render() {
        let logo = '../../assets/images/scan_diet_logo.png';

        return (
            <View style={{padding:50, flex:1, justifyContent:'center'}}>
                <View style={{alignSelf:"center", marginBottom:'15%'}}>
                    <Image source={require("../../assets/images/image_inscription.png")}/>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:"bold", fontSize:23, marginBottom:'15%', color:'#1A1D53'}}>Un <Text style={{color:'#6CC57C'}}>régime</Text> en particulier?</Text>
                </View>

                <View
                    style={{
                        flexDirection:'row',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <CustomButton
                        title={'Sans lactose'}
                        onPress={() => console.log('Sans lactose')}
                        buttonWidth={'40%'}
                        buttonHeight={40}
                    />
                    <CustomButton
                        title={'Vegan'}
                        onPress={() => console.log('Vegan')}
                        buttonWidth={'30%'}
                        buttonHeight={40}
                    />
                    <CustomButton
                        title={'Végétarien'}
                        onPress={() => console.log('végétarien')}
                        buttonWidth={'40%'}
                        buttonHeight={40}
                    />
                </View>

                <View>
                    <LinearProgress style={{height:10, borderRadius:20}} color="#6CC57C" value={.8} variant={"determinate"} />
                </View>
            </View>
        )
    }
}
