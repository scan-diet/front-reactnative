import React from "react";
import {StyleSheet, Text, useWindowDimensions, View} from "react-native";
import styles from './styles';
import AccueilNav from "../../composants/AcceuilNav";
import Carte from "../../composants/Carte";
import CarteActivity from "../../composants/CarteActivity";
import ActivityFlatList from "../../composants/ActivityFlatList";
import FicheProduit from "../../composants/FicheProduit";

export default class DetailProduct extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <FicheProduit/>
            </View>
        )
    }
}
