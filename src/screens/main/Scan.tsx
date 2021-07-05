import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import DetailProduct from "../user/DetailProduct";
import {Product, ProductDTO} from "../../models/Product";

interface IApp {

}

export default function App(props:any) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({type, data}: any) => {
        setScanned(true);
        alert(`TYPE : ${type} \nBARCODE ${data}`);

        //TODO: call the API here
        let response = await fetch(
            `https://scandiet-nestjs-back.herokuapp.com/products/${data}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();

        if (response.status === 200) {
            console.log(json)
            console.log(json.product.image.path)
            // props.navigation.navigate('DetailProduct', new Product(json.product))
            const p = json.product
            props.navigation.navigate('DetailProduct', new Product(
                p.name,
                p.image.path,
                p.nutriments[0].raw_value.value,
                p.nutriments[1].raw_value,
                p.nutriments[2].raw_value.value,
                p.nutriments[3].raw_value.value,
                p.nutriscore_grade,
                p.energetic_income[0].value))

        } else {
            console.log("nothing")
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
