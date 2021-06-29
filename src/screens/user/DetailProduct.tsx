import React from "react";
import {StyleSheet, View} from "react-native";
import ProductInfo from "../../components/ProductInfo";

export default class DetailProduct extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <ProductInfo/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor:"#F4F5FA"
    }
})
