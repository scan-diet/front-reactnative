import React, {FC} from "react";
import {useGreenColor} from "../../hooks/colorVariables";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity} from "react-native";

interface ScanButtonProps {
    onPress: any
}

export const ScanListButton: FC<Partial<ScanButtonProps>> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.scanButton}>
            <Ionicons
                name={"scan-circle"}
                size={85}
                color={useGreenColor}
                onPress={onPress}
                style={styles.scanIcon}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    scanButton: {
        position: "absolute",
        top: "85%",
        right: 20,
        bottom: 0,
    },
    scanIcon: {
        marginVertical:60

    },
});
