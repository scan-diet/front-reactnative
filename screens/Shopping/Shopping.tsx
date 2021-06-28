import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Shopping extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Vue Course</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    }
})
