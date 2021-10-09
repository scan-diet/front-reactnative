import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import DetailProduct from "./DetailProduct";
import {Product} from "../../models/Product";
import Nutriment from "../../models/Nutriment";
import Diet from "../../models/Diet";

export default function App(props:any) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    async function getHistory(token: any){
        try{
            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/scans/history', {
                    method: "get",
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "jwt-token":token
                    }
                }
            );
            let json = await response.json();
            let status = response.status;
            let history:Product[] = []
            for (let i=0; i<json.length; i++){
                if(json[i]!=null){
                    let product:Product = new Product(
                        json[i].name,
                        json[i].image.path,
                        [],
                        "",
                        0,
                        json[i].bar_code,
                        0,
                        new Diet(false,false,false,false),
                        false
                    )
                    let inList = false
                    for(let k=0;k>history.length;k++){
                        if(json[i].name==history[k].name){
                            inList = true
                        }
                    }
                    if(inList == false){
                        history.push(product)
                    }
                }
            }
            if (status === 200){
                props.route.params.SetHistory(history);
            }

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        })();
    }, []);


    const handleBarCodeScanned = async ({type, data}: any) => {
        setScanned(true);
        let response = await fetch(
            `https://scandiet-nestjs-back.herokuapp.com/products/authenticated/${data}`,{
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "jwt-token":props.route.params.user._token
                }
            });
        let json = await response.json();
        let nutriment:Nutriment[] = []
        let suggest: Product[]= []
        let lactose = false
        let gluten = false
        let vegan = false
        let vegetarian = false
        if(json.diet_preference){
            if (json.diet_preference.withoutLactose) {
                lactose = json.diet_preference.withoutLactose
            }
            if (json.diet_preference.withoutGluten) {
                gluten = json.diet_preference.withoutGluten
            }
            if (json.diet_preference.vegan) {
                vegan = json.diet_preference.vegan
            }
            if (json.diet_preference.vegetarian) {
                vegetarian = json.diet_preference.vegetarian
            }
        }
        let diet:Diet = new Diet(
            lactose,
            gluten,
            vegan,
            vegetarian
        )
        if(json.product.nutriments.length>0){
            for (let i=0; i<json.product.nutriments.length; i++){
                if (json.product.nutriments[i]){
                    if(json.product.nutriments[i].raw_value){
                        const nutri:Nutriment = new Nutriment(
                            json.product.nutriments[i].name,
                            json.product.nutriments[i].raw_value.value
                        )
                        nutriment.push(nutri)
                    }
                    else{
                        const nutri:Nutriment = new Nutriment(
                            json.product.nutriments[i].name,
                            0
                        )
                        nutriment.push(nutri)
                    }



                }
            }
        }
        else{
            const proteins:Nutriment=new Nutriment("proteins",0)
            const fat:Nutriment=new Nutriment("fat",0)
            const sugar:Nutriment=new Nutriment("sugar",0)
            const salt:Nutriment=new Nutriment("salt",0)
            nutriment.push(proteins,fat,sugar,salt)
        }




        for (let i=0; i<3; i++){
            let res = await fetch(
                `https://scandiet-nestjs-back.herokuapp.com/products/${json.suggested_products[i].bar_code}`, {
                    method: "GET",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "jwt-token":props.route.params.user._token
                    }
                });

            let recommandation = await res.json()

            let rec = new Product(
                recommandation.product.name,
                recommandation.product.image.path,
                [],
                recommandation.product.nutriscore_grade,
                recommandation.product.energetic_income.value,
                json.suggested_products[i].bar_code,
                [],
                recommandation.product.diet_tags,
                recommandation.product.complete
            )
            suggest.push(rec)
        }

        if (response.status === 200) {
            await getHistory(props.route.params.user._token)
            const p = json.product
            let energeticIncome = 0
            if(p.energetic_income.length>0){
                energeticIncome=p.energetic_income[0].value
            }
            props.navigation.replace('DetailProduct', [new Product(
                p.name,
                p.image.path,
                nutriment,
                p.nutriscore_grade,
                energeticIncome,
                data,
                suggest,
                diet,
                p.complete
            ),props.route.params.user._token])
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
            {scanned && <Button title={'Tap to scan a new product'} onPress={() => setScanned(false)} />}
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
