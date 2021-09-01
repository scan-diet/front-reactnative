import React from 'react';
import {View, StyleSheet, useWindowDimensions} from "react-native";
import CardActivity from "../../Card/CardActivity";

const Item = (item:any) => {
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <CardActivity/>
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
        flex: 0.7
    }
});

export default Item;
