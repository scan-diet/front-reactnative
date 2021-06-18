import React from "react";
import {View} from "react-native";
import styles from './styles';
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
