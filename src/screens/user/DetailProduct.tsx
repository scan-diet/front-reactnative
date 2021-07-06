import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import ProductInfo from "../../components/ProductInfo";
import {RouteProp} from "@react-navigation/native"
import {Product} from "../../models/Product";
import {Cercle} from "../../components/Cercle";
import {Colors, ProgressBar} from "react-native-paper";
import ProductFlatList from "../../components/ProductFlatList";

interface IDetailProduct {
    route: RouteProp<{ DetailProduct: Product },"DetailProduct">
}

export default class DetailProduct extends React.Component<IDetailProduct> {
    constructor(props: IDetailProduct) {
        super(props);

        const json = this.props.route.params
    }

    render() {
        const json = this.props.route.params
        return (
            <View style={styles.main}>
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
                <View style={styles.validation}>
                    <Cercle style={styles.cercle}/>
                    <Text>Ce produit respecte mon regime alimentaire</Text>
                </View>

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
                    <ProductFlatList  json={json} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor:"#F4F5FA"
    },
    container: {
        flex : 1,
        marginTop: '20%'
    },
    image: {
        width: 150,
        height: 150,
        marginLeft: "5%"
    },
    image_container: {
        marginTop:'3%',
    },
    validation:{
        marginTop: "2%",
        flexDirection: "row",
        alignItems: "center",
        flex: 0.1
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
        flex:0.2,
        flexDirection: "row",
        alignItems: "center",
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
    note:{
        marginLeft: '2%',
        borderStyle:"solid",
        backgroundColor:"#008000",
        borderRadius:5,
        fontSize: 25
    },
    cercle:{
        marginLeft: "5%"
    }
})
