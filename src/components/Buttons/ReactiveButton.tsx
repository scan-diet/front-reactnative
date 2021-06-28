import React, {FC} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {useWhiteColor} from "../../hooks/colorVariables";

interface ReactiveButtonProps {
    title: string
    onPress: any
    iconName: string
    iconSize: number | string
    iconColor: string
    isSelected: boolean
}

export const ReactiveButton: FC<ReactiveButtonProps> = (
    {
        onPress,
        title,
        iconName,
        iconSize,
        isSelected
    }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                {
                    borderRadius: 25,
                    backgroundColor: isSelected ? "#6CC57C" : "#707070",
                    borderColor: isSelected ? "#6CC57C" : "#707070",
                },
            ]}
        >
            <Ionicons name={iconName} size={iconSize} color={useWhiteColor}/>
            <Text style={{color:useWhiteColor}}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        padding: 12
    }
})
