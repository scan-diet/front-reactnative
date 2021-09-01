import React, {useRef} from 'react';
import {View, StyleSheet, FlatList, Animated, useWindowDimensions} from "react-native";
import Produit from "./Produit";
import Item from "./Item";

const List = () => {
    const scrollx = useRef(new Animated.Value(0)).current;
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <FlatList data={Produit}
                      renderItem={({item}) => <Item item={{item}}/>}
                      horizontal
                      showsHorizontalScrollIndicator
                      pagingEnabled
                      centerContent={true}
                      bounces={false}
                      keyExtractor={(item) => item.id}
                      onScroll={Animated.event([{nativeEvent: {contentOffset:{x: scrollx}}}],{useNativeDriver: false})}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F5FA"
    },
    image: {
        flex: 0.7,

    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        textAlign:'center',
    },
});
export default List;
