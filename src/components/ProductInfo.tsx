import React from "react";
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper'
import {Cercle} from './Cercle'
import ProductFlatList from "./ProductFlatList";

const ProductInfo = () => {
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <View style={[styles.info,{width}]}>
                <Image source={require("../assets/images/panzani.png")} style={[styles.image,{resizeMode: 'contain'}]}/>
                <View style={styles.image_container}>
                    <Text style={styles.title}>PANZANI Fusilli</Text>
                    <Text style={styles.info_txt}>361 kcal / 100g</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.info_txt}>Nutri-score</Text>
                        <Text style={styles.note}>A</Text>
                    </View>
                </View>
            </View>
            <View style={styles.validation}>
                <Cercle style={styles.cercle}/>
                <Text>Ce produit respecte mon regime alimentaire</Text>
            </View>
            <View style={styles.progress_container}>
                <Text style={styles.subTitle}>Valeurs nutritives</Text>
                <Text style={styles.progress}>Protéine</Text>
                <ProgressBar progress={0.5} color={Colors.red800} style={styles.progress}  />
                <Text style={styles.progress}>Fibre</Text>
                <ProgressBar progress={0.7} color={Colors.blue800} style={styles.progress} />
                <Text style={styles.progress}>Glucide</Text>
                <ProgressBar progress={0.5} color={Colors.yellow800} style={styles.progress}  />
                <Text style={styles.progress}>Lipide</Text>
                <ProgressBar progress={0.7} color={Colors.green800} style={styles.progress} />
            </View>

            <View style={styles.recommandation}>
                <Text style={styles.subTitle}>Recommandations</Text>
                <ProductFlatList/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default ProductInfo;
