import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";

const ProductFlatListItem = ({item}:any) => {
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <Image source={require("../assets/images/panzani.png")} style={[styles.image,{width, resizeMode: 'contain'}]}/>
            <View style={{flex: 0.3}}>
                <Text>Panzani</Text>
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
        flex: 0.7,

    },
    /*title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        textAlign: ' center',
    },*/
});

export default ProductFlatListItem;
