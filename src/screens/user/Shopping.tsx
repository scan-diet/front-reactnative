import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements"

export default class Shopping extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text h3>Vue Course</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    }
})
