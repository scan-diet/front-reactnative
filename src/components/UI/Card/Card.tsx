import React, {FC} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useGreenColor, useWhiteColor} from "../../../hooks/colorVariables";

interface ICardProps {
    //TODO: add props if necessary
}

const Card: FC<ICardProps> = ({}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontWeight:"bold", fontSize:20}}>Week 24 results</Text>
            </View>

            <View>
                <Text>You've lost</Text>
                <Text style={{color:useGreenColor}}>2kg</Text>
            </View>

            <View>
                <Text>Never give up.</Text>
                <Text style={{color: useGreenColor}}>Learn more</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 35,
        shadowColor: "#000000",
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
