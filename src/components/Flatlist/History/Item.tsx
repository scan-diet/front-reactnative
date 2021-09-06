import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";

const Item = ({item}:any) => {
    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container, {width}]}>
            <Image source={{uri: item.item.image}} style={[styles.image,{width, resizeMode: 'contain'}]}/>
            <View style={{flex: 0.3}}>
                <Text>{item.item.name}</Text>
            </View>
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
