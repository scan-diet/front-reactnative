import React, {FC} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useBlueColor, useWhiteColor} from "../../hooks/colorVariables"

interface BasicButtonProps {
    onPress: any;
    title: string
}

export const BasicButton: FC<Partial<BasicButtonProps>> = ({onPress, title}) => {
    return (
        <TouchableOpacity style={styles.basicButtonContainer} onPress={onPress}>
            <Text style={styles.basicButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    basicButtonContainer: {
        margin: 10,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        borderWidth:1,
        padding:12,
        borderRadius: 10,
        borderColor: useBlueColor,
        backgroundColor: useBlueColor
    },
    basicButtonText: {
        color: useWhiteColor,
        fontSize: 17
    }
})
