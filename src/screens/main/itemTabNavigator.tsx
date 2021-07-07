import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {TabButtons} from "../../components/UI/Buttons/TabButton";

const ItemTabView = () => {
    const [lastScanList, setShowLastScanList] = useState(true);
    const [itemsList, setShowItemsList] = useState(false);

    const showLastScansHandler = () => {
        if (!lastScanList && itemsList) {
            setShowItemsList(false);
            return setShowLastScanList(true);
        }
    };

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
            </View>
            {lastScanList ? (
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <Text>Last scans</Text>
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
