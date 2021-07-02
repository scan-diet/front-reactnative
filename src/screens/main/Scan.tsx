import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default function App() {
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
            `http://192.168.1.40:3200/products/${data}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });

        let json = await response.json();
        if (response.status === 200) {
            console.log(json)
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
