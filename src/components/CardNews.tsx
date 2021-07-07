import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {openURL} from "expo-linking";
import {useGreenColor, useWhiteColor} from "../hooks/colorVariables";

interface ICardProps {
    //TODO: add props if necessary
}

let date = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear();

const CardNews: FC<ICardProps> = ({}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight:"bold", fontSize:40, color:useGreenColor}}>Welcome to ScanDiet</Text>
            </View>

            <View>
                <Text style={{fontSize:17, paddingVertical:10}}>Today, the {date}/{month}/{year}</Text>
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

export default CardNews;
