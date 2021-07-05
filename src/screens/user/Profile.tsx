import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.title_view}>
                    <Text style={styles.text}>My Profile</Text>
                </View>

                <View>
                    <Text>Name: Marc</Text>
                </View>

                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    },
    title_view: {
        marginBottom:'5%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "left"
    },
})
