import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import Navigation from "./Navigation";
import Produit from "./Produit";
import CarteActivity from "./CarteActivity";

// @ts-ignore
const ActivityFlatListItem = ({item}) => {
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <CarteActivity/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,

    },
    /*title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        textAlign: ' center',
    },*/
});

export default ActivityFlatListItem;