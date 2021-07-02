import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    }
})
