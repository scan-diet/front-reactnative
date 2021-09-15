import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useBlueColor, useGreenColor, useWhiteColor} from "../../hooks/colorVariables";
import {openURL} from "expo-linking";
import moment from "moment";

interface ICardProps {
    //add props if necessary
}

let dayDate = moment().locale('fr').format('Do MMMM YYYY');

const Card: FC<ICardProps> = ({}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight:"bold", fontSize:40, color:useBlueColor}}>Welcome to ScanDiet</Text>
            </View>

            <View>
                <Text style={{fontSize:17, paddingVertical:10}}>{dayDate}</Text>
            </View>

            <View>
                <Text style={{fontSize:25, paddingBottom:10}}>Let's eat healthy !</Text>
            </View>

            <View>
                <Text>Never give up.<Text style={{color: useGreenColor}} onPress={()=>{openURL("https://addicted2success.com/success-advice/7-tips-to-master-the-art-of-never-giving-up/")}}>Learn more</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 20,
        shadowColor: "black",
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        backgroundColor: useWhiteColor,
        margin: 50,
        width: 250,
    }
});

export default Card;
