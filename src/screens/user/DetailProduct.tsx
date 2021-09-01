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
        /*if ((diet.vegetarian && diet.vegan && diet.glutenFree && diet.lactoseFree) !== false){
            return <View style={styles.validation}>
                <AntDesign name="checkcircle" size={24} color="green" />
                <Text style={{paddingLeft:5}}>This item respects your diet.</Text>
            </View>
        } else {
            return <View style={styles.validation}>
                <Entypo name="circle-with-cross" size={24} color="red" />
                <Text>This item doesn't respect your diet.</Text>
            </View>
        }*/
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
            /*<View style={styles.main}>
                <View style={[styles.info]}>
                    <Image source={{uri: json.image}} style={[styles.image,{resizeMode: 'contain'}]}/>
                    <View style={styles.image_container}>
                        <Text style={styles.title}>{json.name}</Text>
                        <Text style={styles.info_txt}>{json.kcal} kcal / 100g</Text>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={styles.info_txt}>Nutri-score</Text>
                            <Text style={styles.note}>{json.nutriscore.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>

                {this.validDiet(json.respectsDiet)}
                {this.isItemInfoComplete(json.isItemInfoComplete)}


                <View style={styles.progress_container}>
                    <Text style={styles.subTitle}>Valeurs nutritives</Text>
                    <Text style={styles.progress}>{json.nutriments[0].name} </Text>
                    <ProgressBar progress={json.nutriments[0].value} color={Colors.red800} style={styles.progress}  />
                    <Text style={styles.progress}>{json.nutriments[1].name}</Text>
                    <ProgressBar progress={json.nutriments[1].value/100} color={Colors.blue800} style={styles.progress} />
                    <Text style={styles.progress}>{json.nutriments[2].name}</Text>
                    <ProgressBar progress={json.nutriments[2].value/100} color={Colors.yellow800} style={styles.progress}  />
                    <Text style={styles.progress}>{json.nutriments[3].name}</Text>
                    <ProgressBar progress={json.nutriments[3].value/100} color={Colors.green800} style={styles.progress} />
                </View>

                <View style={styles.recommandation}>
                    <Text style={styles.subTitle}>Recommandations</Text>
                    <List  json={json} props={this.props} />
                </View>
            </View>*/

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
                    <View style={{flexDirection:"row", paddingTop:15, paddingBottom:5}}>
                        <Text style={{paddingRight:150}}>{json.nutriments[0].name.toUpperCase()}</Text>
                        <Text >{json.nutriments[0].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[0].value/100} color={Colors.red800} style={{height:8}} />

                    {/*FAT*/}
                    <View style={{flexDirection:"row", paddingTop:15, paddingBottom:5}}>
                        <Text style={{paddingRight:191}}>{json.nutriments[1].name.toUpperCase()}</Text>
                        <Text >{json.nutriments[1].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[1].value/100} color={Colors.blue800} style={{height:8}} />

                    {/*SUGAR*/}
                    <View style={{flexDirection:"row", paddingTop:15, paddingBottom:5}}>
                        <Text style={{paddingRight:168}}>{json.nutriments[2].name.toUpperCase()}</Text>
                        <Text >{json.nutriments[2].value}/100g</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[2].value/100} color={Colors.yellow800} style={{height:8}} />

                    {/*SALT*/}
                    <View style={{flexDirection:"row", paddingTop:15, paddingBottom:5}}>
                        <Text style={{paddingRight:180}}>{json.nutriments[3].name.toUpperCase()}</Text>
                        <Text >{json.nutriments[3].value}/100g</Text>
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
    /*
    BACKUP
    main: {
        flex:1,
        backgroundColor:"#F4F5FA",
        // padding:50
    },
    container: {
        flex : 1,
        marginTop: '20%'
    },
    image: {
        width: 150,
        height: 150
    },
    image_container: {
        marginTop:'3%',
    },
    validation:{
        marginTop: "2%",
        flexDirection: "row",
        alignItems: "center",
        // flex: 0.1
    },
    progress: {
        marginVertical: '2%',
    },
    progress_container: {
        flex: 0.4,
        marginHorizontal: '10%'
    },
    recommandation:{
        flex:0.3,
        marginLeft:"2%"
    },
    info:{
        // flex:0.2,
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor:'blue'
    },
    info_txt:{
        fontSize:15,
        color:'#7F7F7F',
        textAlign: 'left',
        marginLeft: '2%',
        marginBottom: '2%'
    },
    title:{
        fontSize:25,
        color:'#1A1D53',
        textAlign: 'left',
        marginLeft: '2%',
        fontWeight:'bold',
        marginBottom: '2%'
    },
    subTitle:{
        fontSize:25,
        color:'#1A1D53',
        textAlign: 'left',
        fontWeight:'bold',
    },

    cercle:{
        marginLeft: "5%"
    }*/
    note:{
        marginLeft: '2%',
        borderStyle:"solid",
        borderRadius:15,
        fontSize: 20
    },
})
