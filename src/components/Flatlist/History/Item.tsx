import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity} from "react-native";
import Nutriment from "../../../models/Nutriment";
import {Product} from "../../../models/Product";
import Diet from "../../../models/Diet";
interface IProdItem {
    item:any
    props:any
}
async function handleBarCodeScanned(barcode: any,props: any) {
    let response = await fetch(
        `https://scandiet-nestjs-back.herokuapp.com/products/authenticated/${barcode}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                "jwt-token":props.user.token
            }
        });

    let json = await response.json();
    let nutriment:Nutriment[] = []
    let suggest: Product[]= []
    let diet:Diet = new Diet(
        json.diet_preference.withoutLactose,
        json.diet_preference.withoutGluten,
        json.diet_preference.vegan,
        json.diet_preference.vegetarian
    )

    for (let i=0; i<json.product.nutriments.length; i++){
        if (json.product.nutriments[i]){
            const nutri:Nutriment = new Nutriment(
                json.product.nutriments[i].name,
                json.product.nutriments[i].raw_value.value
            )
            nutriment.push(nutri)
        }
    }

    for (let i=0; i<3; i++){
        let res = await fetch(
            `https://scandiet-nestjs-back.herokuapp.com/products/${json.suggested_products[i].bar_code}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "jwt-token":props.user.token
                }
            });

        let recommandation = await res.json()

        let rec = new Product(
            recommandation.product.name,
            recommandation.product.image.path,
            [],
            recommandation.product.nutriscore_grade,
            recommandation.product.energetic_income.value,
            json.suggested_products.bar_code,
            [],
            recommandation.product.diet_tags,
            recommandation.product.complete
        )
        suggest.push(rec)
    }

    if (response.status === 200) {
        const p = json.product

        props.navigation.navigate('DetailProduct', new Product(
            p.name,
            p.image.path,
            nutriment,
            p.nutriscore_grade,
            p.energetic_income[0].value,
            barcode,
            suggest,
            diet,
            p.complete
        ))
    } else {
    }
}

const Item: FC<IProdItem> = ({item,props})=> {
    const {width} = useWindowDimensions();

    return(
        <TouchableOpacity  onPress={() => handleBarCodeScanned(item.barcode,props)}>
            <View style={[styles.container, {width}]}>
                <Image source={{uri: item.image}} style={[styles.image,{width, resizeMode: 'contain'}]}/>
                <View style={{flex: 0.3}}>
                    <Text>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7
    }
});

export default Item;
