import React from "react";
import {StyleSheet, View} from 'react-native';

// @ts-ignore
const Carte = props => {
    return (
        <View style={{...styles.carte, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    carte: {
        // PROPRIETES DE STYLE VALABLE UNIQUEMENT SUR iOS
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,

        // APPLIQUE LES PROPRIETES DE STYLE iOS PRECEDENTES DANS ANDROID
        elevation:8,
        backgroundColor:'#6CC57C',
        padding:20,
        borderRadius:10
    }
})

export default Carte;
