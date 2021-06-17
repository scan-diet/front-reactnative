import React from "react";
import {StyleSheet, Text, View} from "react-native";
import styles from './styles';
import AccueilNav from "../../composants/AcceuilNav";
import Carte from "../../composants/Carte";
import CarteActivity from "../../composants/CarteActivity";
import ActivityFlatList from "../../composants/ActivityFlatList";

var date = new Date().getDate()
var month = new Date().getMonth()+1
var year = new Date().getFullYear()

export default class Accueil extends React.Component {
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
                    <AccueilNav/>
                </View>
            </View>
        )
    }
}


