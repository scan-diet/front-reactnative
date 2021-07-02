import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {FC} from "react";
import {useTransparentColor} from "../../../hooks/colorVariables";

interface IBorderlessButtonProps {
    title: string;
    onPress: any;
}

export const BorderlessButton: FC<Partial<IBorderlessButtonProps>> = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 12,
        backgroundColor: useTransparentColor,
        borderWidth: 0
    }
})
