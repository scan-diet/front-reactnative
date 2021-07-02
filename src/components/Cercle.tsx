import React from "react";
import {StyleSheet, View} from 'react-native';

export const Cercle = (props:any) => {
    return (
        <View style={{...styles.circle, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    circle:{
        width: 25,
        height: 25,
        borderRadius: 100/2,
        backgroundColor: "green"
    }
})

