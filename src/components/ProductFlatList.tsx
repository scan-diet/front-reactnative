import React, {useState, useRef, FC} from 'react';
import {View, Text, StyleSheet, FlatList, Animated, useWindowDimensions} from "react-native";
import ProductFlatListItem from "./ProductFlatListItem";
import Produit from "./Produit";

interface IProdFlatList {
    json:any
}

//const ProductFlatList = () => {
const ProductFlatList: FC<IProdFlatList> = ({json}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollx = useRef(new Animated.Value(0)).current;
    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container, {width}]}>
            <FlatList data={json.recommandations}
                      renderItem={({item}) => <ProductFlatListItem item={{item}}/>}
                      horizontal
                      showsHorizontalScrollIndicator
                      pagingEnabled
                      bounces={false}
                      keyExtractor={(item) => item.name}
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
        // backgroundColor: "#F4F5FA"
    },
    image: {
        flex: 0.7,

    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
    },
});
export default ProductFlatList;
