import React from "react";
import {OpaqueColorValue, StyleSheet, Text, View} from 'react-native';

// @ts-ignore
const CarteActivity = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            {props.children}
            <Text>Résultats Semaine 24</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        width: 250,
        height: 100,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,
    }
})

export default CarteActivity;
