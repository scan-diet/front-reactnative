import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const CardView = ({ children }: any) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scrollContainer}>
                {children}
            </ScrollView>
        </View>
    );
};

export default CardView;

const styles = StyleSheet.create({
    container: {},
    scrollContainer: {
        flexDirection: "row",
    },
});
