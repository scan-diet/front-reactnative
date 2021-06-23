import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Animated, useWindowDimensions} from "react-native";
import Produit from "./Produit";
import ActivityFlatListItem from "./ActivityFlatListItem";

const ActivityFlatList = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollx = useRef(new Animated.Value(0)).current;
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <FlatList data={Produit}
                      renderItem={({item}) => <ActivityFlatListItem item={{item}}/>}
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
export default ActivityFlatList;
