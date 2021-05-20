import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Vue Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        margin: 40,
        //backgroundColor: "red"
    }
})

