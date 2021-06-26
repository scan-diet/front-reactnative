import React from "react";
import { Text, View } from "react-native";
import styles from './styles';
import HomeNav from "../../components/HomeNav";
import ActivityFlatList from "../../components/ActivityFlatList";

let date = new Date().getDate()
let month = new Date().getMonth()+1
let year = new Date().getFullYear()

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Activité</Text>
                    <Text style={styles.date}>{date}/{month}/{year}</Text>
                </View>
                <View style={styles.main_container}>
                    <ActivityFlatList/>
                </View>
                <View style={styles.activity_container}>
                    <HomeNav/>
                </View>
            </View>
        )
    }
}
