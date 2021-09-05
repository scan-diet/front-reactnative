import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import DetailProduct from "../user/DetailProduct";
import {Product} from "../../models/Product";
import Nutriment from "../../models/Nutriment";

export default function App(props:any) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({type, data}: any) => {
        setScanned(true);
        alert(`TYPE : ${type} \nBARCODE ${data}`);

        let response = await fetch(
            `https://scandiet-nestjs-back.herokuapp.com/products/${data}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

        if (response.status === 200) {
            props.navigation.navigate('DetailProduct', new Product(
                '',
                '',
                new Nutriment('',0),
                0,
                0,
                0,
                '',
                0,
                false
                )
            )

        } else {
        }
    };

    if (hasPermission === null) {
        return <Text>Asking for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>Please give permission to access camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to scan again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
});
