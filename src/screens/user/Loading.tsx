import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default class Loading extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return(
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

