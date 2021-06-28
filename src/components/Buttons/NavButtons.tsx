import React, {FC} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Entypo } from "@expo/vector-icons";
import {useBlueColor, useWhiteColor} from "../../hooks/colorVariables";

interface NavButtonsProps {
    title: string
    onPress: any
    iconName: string
    iconSize: number | string
    iconColor: string
    isSelected: boolean
}

export const NavButtons: FC<Partial<NavButtonsProps>> = ({onPress, iconName, iconSize, title}) => {
    return (
        <View style={styles.main_container}>
            <TouchableOpacity
                style={styles.container}
                onPress={onPress}
            >
                <Entypo
                    name={"chevron-right"}
                    size={35}
                    color={useWhiteColor}
                    style={{
                        fontWeight: "bold",
                    }}
                />
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main_container: {
        justifyContent: "center",
        alignItems: "center"
    },

    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        padding: 12,
        backgroundColor: useBlueColor,
        borderRadius: 30,
    }
});
