import React from "react";
import {StyleSheet, TextInput} from "react-native";


const ChampSaisie = props => {
    return (
        <TextInput {...props} style={{...styles.saisie, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    saisie: {
        marginBottom:'5%',
        padding: 7,
        backgroundColor:"#FFFFFF",
        width:'50%',
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15
    }
})

export default ChampSaisie;
