import {useGreenColor} from "../../hooks/colorVariables";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";
import React from "react";

interface LabelButtonProps {
    onPress : any
    title: string
    label: string
}

export const LabelButton: FC<Partial<LabelButtonProps>> = ({ onPress, title, label }) => {
    return (
        <View style={styles.main_container}>
            <Text style={{ margin: 2 }}>{label}</Text>
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text style={styles.text_style}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main_container: {
        justifyContent: "center",
        flexDirection: "row"
    },
    text_style: {
        color: useGreenColor,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 5,
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
    }
});
