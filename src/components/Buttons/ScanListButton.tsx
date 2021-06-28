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
                size={64}
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
        top: "80%",
        right: 20,
        bottom: 0,
    },
    scanIcon: {
        flex: 1,
    },
});
