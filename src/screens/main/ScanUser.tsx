import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import DetailProduct from "../user/DetailProduct";
import {Product} from "../../models/Product";
import Nutriment from "../../models/Nutriment";

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
                    'Content-Type': 'application/json',
                    "jwt-token":props.route.params.user._token
                }
            });

        let json = await response.json();

        /**
         * check if value is null
         */
        let nutriment:Nutriment[] = []

        for (let i=0; i<json.product.nutriments.length; i++){
            if (json.product.nutriments[i]){
                const nutri:Nutriment = new Nutriment(
                    json.product.nutriments[i].name,
                    json.product.nutriments[i].raw_value.value
                )
                console.log(nutri)
                nutriment.push(nutri)
            }
        }

        if (response.status === 200) {
            console.log("ok")
            console.log(nutriment)
            const p = json.product
            props.navigation.navigate('DetailProduct', new Product(
                p.name,
                p.image.path,
                nutriment,
                p.nutriscore_grade,
                p.energetic_income[0].value
                )
            )

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
