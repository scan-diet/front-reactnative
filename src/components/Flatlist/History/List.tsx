import React, {useRef, FC} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Animated,
    Text,
    useWindowDimensions, Image
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
                          ListEmptyComponent={() =>
                              <View style={{}}>
                                  <View style={{}}>
                                      <Image source={require("../../../assets/images/list_empty.png")} style={styles.emptyShopping}/>
                                      <Text style={{ textAlign:"center", fontSize:20, fontStyle:"italic"}}>Your history list is empty</Text>
                                  </View>
                              </View>
                          }
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
    scanItems: {
        width:200,
        height:200
    },
    emptyHistory: {
        width:200,
        height:200,
        alignSelf:"flex-start",
        resizeMode:'contain',
    },
    emptyShopping: {
        flexGrow:1,
        width:450,
        height:200,
        alignSelf:"center",
        resizeMode:'contain'
    }
});

export default List;
