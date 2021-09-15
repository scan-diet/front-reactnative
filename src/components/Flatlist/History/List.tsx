import React, {useRef, FC} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Animated,
    Text,
    useWindowDimensions
} from "react-native";
import Item from "./Item";

interface IProdFlatList {
    json:any
    props:any
}

const List: FC<IProdFlatList> = ({json,props}) => {
    const scrollx = useRef(new Animated.Value(0)).current;
    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container, {width}]}>
                <FlatList data={json}
                          renderItem={({item}) => <Item item={item} props={props}/>}
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
        alignItems: "center"
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

export default List;