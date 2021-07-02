import React, {FC} from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";
import {useBlueColor, useTransparentColor, useWhiteColor} from "../../../hooks/colorVariables";

interface ITabButtonProps {
    title: string,
    onPress: any,
    isActive: boolean
}

export const TabButtons: FC<Partial<ITabButtonProps>> = ({title, onPress, isActive}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: isActive ? useBlueColor : useTransparentColor,
                    borderColor: isActive ? useBlueColor : useTransparentColor,
                    borderRadius: 20,
                    width: 125,
                },
            ]}
            onPress={onPress}
        >
            <Text style={{ color: isActive ? useWhiteColor : useBlueColor }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        padding: 12,
    }
});
