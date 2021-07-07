import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {TabButtons} from "../../components/UI/Buttons/TabButton";
import {Product} from "../../models/Product";
import ProductFlatList from "../../components/ProductFlatList";

const ItemTabView = (token: any) => {
    const [lastScanList, setShowLastScanList] = useState(true);
    const [itemsList, setShowItemsList] = useState(false);
    const [ref, setRef] = useState(null);
    let pref : Product[] = []
    const showLastScansHandler = async () => {
        if (!lastScanList && itemsList) {
            setShowItemsList(false);
            return setShowLastScanList(true);
        }
            try{
                let response = await fetch(
                    'https://scandiet-nestjs-back.herokuapp.com/scans/history', {
                        method: "get",
                        headers:{
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "jwt-token": token
                        }
                    }
                );
                let json = await response.json();
                let status = response.status;

                if (status === 200){
                    for (let i=0; i<json.product.nutriments.length; i++){
                        if (json.product.nutriments[i]){
                            const product:Product = new Product(
                                "",
                                "",
                                [],
                                "",
                                0,
                                "",
                                []
                            )
                            pref.push(product)
                        }
                    }

                }

            } catch (error) {
                console.error(error);
            }
            // this._renderItem = this._renderItem.bind(this)
        }

    const showItemsHandler = () => {
        if (!itemsList && lastScanList) {
            setShowLastScanList(false);
            return setShowItemsList(true);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TabButtons
                    title={"Last Scans"}
                    isActive={lastScanList}
                    onPress={showLastScansHandler}
                />
                <TabButtons
                    title={"Items"}
                    isActive={itemsList}
                    onPress={showItemsHandler}
                />
            </View>
            {lastScanList ? (
                <View style={{ flex: 1 }}>
                    <ProductFlatList  json={pref} />
                </View>
            ) : null}
            {itemsList ? (
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <Text>Items</Text>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //margin: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default ItemTabView;
