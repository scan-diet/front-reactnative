import React from "react";
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RouteProp} from "@react-navigation/native"

import {PieChart} from "react-native-chart-kit";
import {color} from "react-native-elements/dist/helpers";
import Nutriment from "../../models/Nutriment";
import {Product} from "../../models/Product";
import Diet from "../../models/Diet";

interface IDetailProduct {
    route: RouteProp<{ LstCourse: [] },"LstCourse">
}

export default class LstCourse extends React.Component<IDetailProduct> {
    constructor(props: IDetailProduct) {
        super(props);
    }
    async handleBarCodeScanned(barcode: any,props: any) {
        let response = await fetch(
            `https://scandiet-nestjs-back.herokuapp.com/products/authenticated/${barcode}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "jwt-token":this.props.route.params[0].user.token
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
        if(json.suggested_products){
            for (let i=0; i<3; i++){
                let res = await fetch(
                    `https://scandiet-nestjs-back.herokuapp.com/products/${json.suggested_products[i].bar_code}`, {
                        method: "GET",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            "jwt-token":this.props.route.params[0].user.token
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
        }


        if (response.status === 200) {
            const p = json.product
            let energeticIncome = 0
            if(p.energetic_income.length>0){
                energeticIncome=p.energetic_income[0].value
            }
            props.navigation.replace('DetailProductCourse', [new Product(
                p.name,
                p.image.path,
                nutriment,
                p.nutriscore_grade,
                energeticIncome,
                barcode,
                suggest,
                diet,
                p.complete
            ),this.props.route.params[0].user.token,this.props.route.params[1]])
        } else {
        }
    }
    stat(){
        let a = 0
        let b = 0
        let c = 0
        let d = 0
        let e = 0
        const json=this.props.route.params[1]
        for(let i=0;i<json.length;i++){
            console.log(json[i].nutriscore_grade)
            switch (json[i].nutriscore_grade) {
                case 'a':
                    a = a+1;
                    break;
                case 'b':
                    b = b+1;
                    break;
                case 'c':
                    c= c+1;
                    break;
                case 'd':
                    d = d+1;
                    break;
                case 'e':
                    e = e+1;
                    break;
        }
    }
    const data = [{
            name : "A",
            nbr: a,
            color:"green",
            legendFontColor:"green",
            legendFontSize:15
        },
        {
            name : "B",
            nbr: b,
            color:"lightgreen",
            legendFontColor:"lightgreen",
            legendFontSize:15
        },
        {
            name : "C",
            nbr: c,
            color:"yellow",
            legendFontColor:"yellow",
            legendFontSize:15
        },
        {
            name : "D",
            nbr: d,
            color:"orange",
            legendFontColor:"orange",
            legendFontSize:15
        },
        {
            name : "E",
            nbr: e,
            color:"red",
            legendFontColor:"red",
            legendFontSize:15
        }
    ]
        console.log(data)
    return data
    }

    render() {
        const json = this.props.route.params[1];
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        };
        console.log(this.props.route.params[1])
        return (
            <SafeAreaView style={{backgroundColor:'cyan', flex:1}}>
                <Text style={{fontSize:25}}>Cart's health score</Text>
                <FlatList
                    scrollEnabled={true}
                    data={json}
                    renderItem={({item}) =>
                        <View style={{flexDirection:"column", backgroundColor:'cyan'}}>
                            <TouchableOpacity  onPress={() => this.handleBarCodeScanned(item.bar_code,this.props)}>
                                <Image source={{uri: item.image.path}} style={styles.image}/>
                            </TouchableOpacity>
                        </View>
                    }
                    ItemSeparatorComponent={() => <View style={styles.lineStyle}></View>}
                >
                </FlatList>
                <PieChart
                    data={this.stat()}
                    width={100} // modifier ici pour l'adapter à l'appareil
                    height={100}
                    chartConfig={chartConfig}
                    accessor={"nbr"}
                    backgroundColor={"transparent"}
                    paddingLeft={"50"}
                    center={[1,15]}
                    absolute
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    note: {
        marginLeft: '2%',
        borderStyle: "solid",
        borderRadius: 15,
        fontSize: 20
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    image: {
        flex: 0.7,
        width: 100,
        height: 100
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'cyan',
        margin:10
    }
})


