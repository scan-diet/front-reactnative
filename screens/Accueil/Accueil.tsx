import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Accueil extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text>Vue Accueil</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    }
})

