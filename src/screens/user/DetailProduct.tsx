import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native"
import {Product} from "../../models/Product";
import {Colors, ProgressBar} from "react-native-paper";
import List from "../../components/Flatlist/Product/List";
import Diet from "../../models/Diet";
import {AntDesign, Entypo} from '@expo/vector-icons';

interface IDetailProduct {
    route: RouteProp<{ DetailProduct: Product },"DetailProduct">
}

export default class DetailProduct extends React.Component<IDetailProduct> {
    constructor(props: IDetailProduct) {
        super(props);
    }

    validDiet(diet:Diet){
        if ((diet.vegetarian && diet.vegan && diet.glutenFree && diet.lactoseFree)){
            return <View style={{flexDirection:"row"}}>
                <AntDesign name="checkcircle" size={30} color="green" style={{paddingLeft:10, paddingTop:10}}/>
                <Text style={{paddingLeft:3, paddingTop:15}}>This item respects your diet.</Text>
            </View>
        } else {
            return <View style={{flexDirection:"row"}}>
                <Entypo name="circle-with-cross" size={30} color="red" style={{paddingLeft:10, paddingTop:10}} />
                <Text style={{paddingLeft:3, paddingTop:10}}>This item doesn't respect your diet.</Text>
            </View>
        }
    }

    isItemInfoComplete(isCompleted:boolean){
        if(isCompleted){
            return null
        } else {
            return <View style={{flexDirection:"row"}}>
                <AntDesign name="warning" size={24} color="red" />
                <Text style={{paddingLeft:5, paddingTop:3, paddingBottom:30, fontWeight:"bold"}}>Item's info are not complete in our database.</Text>
            </View>
        }
    }

    colorNutriscore(grade:string){
        switch (grade){
            case 'a':
                return 'green'
            case 'b':
                return 'lightgreen'
            case 'c':
                return 'yellow'
            case 'd':
                return 'red'
            default:
                return 'red'
        }
    }


    render() {
        const json = this.props.route.params

        return (
            <View style={{ flex:1, padding:50}}>
                <View style={{flexDirection:"row"}}>
                    <Image source={{uri: json.image}} style={{width: 75, height: 200, resizeMode:"contain"}} />

                    <View style={{flex:1,paddingTop:17}}>
                        <Text style={{fontSize:24, fontWeight:"bold", paddingLeft:10, }}>{json.name}</Text>
                        <Text style={{paddingLeft:10, fontStyle:"italic", fontSize:18}}>{json.kcal} kcal / 100g</Text>

                        <View style={{flexDirection:"row"}}>
                            <Text style={{paddingHorizontal:10, fontSize:18}}>Nutri-score</Text>
                            <Text style={[{backgroundColor:this.colorNutriscore(json.nutriscore),paddingHorizontal:10, fontSize:18},styles.note]}>{json.nutriscore.toUpperCase()}</Text>
                        </View>

                        {this.validDiet(json.respectsDiet)}
                    </View>
                </View>

                {this.isItemInfoComplete(json.isItemInfoComplete)}


                <View style={{}}>
                    <Text style={{fontSize:24, fontWeight:"bold"}}>Nutrition values</Text>

                    {/*PROTEINS*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[0].name.toUpperCase()}</Text>
                        <Text>{json.nutriments[0].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[0].value/100} color={Colors.red800} style={{height:8}} />

                    {/*FAT*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[1].name.toUpperCase()}</Text>
                        <Text>{json.nutriments[1].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[1].value/100} color={Colors.blue800} style={{height:8}} />

                    {/*SUGAR*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[2].name.toUpperCase()}</Text>
                        <Text>{json.nutriments[2].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[2].value/100} color={Colors.yellow800} style={{height:8}} />

                    {/*SALT*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[3].name.toUpperCase()}</Text>
                        <Text>{json.nutriments[3].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[3].value/100} color={Colors.green800} style={{height:8}} />
                </View>

                <View style={{paddingTop:40, flex:1, alignItems:"center"}}>
                    <Text style={{fontSize:24, fontWeight:"bold"}}>Recommandations</Text>
                    <List json={json} props={this.props} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    note:{
        marginLeft: '2%',
        borderStyle:"solid",
        borderRadius:15,
        fontSize: 20
    },
})
