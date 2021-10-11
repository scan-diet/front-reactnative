import React from "react";
import {FlatList, StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import {BasicButton} from "../../components/Buttons/BasicButton";
import {SetShopping, SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import {Product} from "../../models/Product";
import {
    useBlueColor
} from "../../hooks/colorVariables";
import {Divider} from "react-native-elements";
import Nutriment from "../../models/Nutriment";
import Diet from "../../models/Diet";


const mapStateToProps = (state : any) => {
    return {
        user: state.auth.user,
        shopping: state.auth.shopping
    }
}

const mapDispatchToProps = (dispatch: any )=> {
    return {
        SetUserDetail: (user: any) => dispatch(SetUserDetail(user)),
        SetShopping: (shopping: any) => dispatch(SetShopping(shopping)),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IPanier extends PropsFromRedux {
    SetShopping:typeof SetShopping
    user: User
    navigation: any
    shopping: Product[]

}

class Panier extends React.Component<IPanier>{
    constructor(props:any) {
        super(props);
    }
    async handleBarCodeScanned(barcode: any,props: any) {
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
        }


        if (response.status === 200) {
            const p = json.product
            let energeticIncome = 0
            if(p.energetic_income.length>0){
                energeticIncome=p.energetic_income[0].value
            }
            props.navigation.replace('DetailProductPanier', [new Product(
                p.name,
                p.image.path,
                nutriment,
                p.nutriscore_grade,
                energeticIncome,
                barcode,
                suggest,
                diet,
                p.complete
            ),props.user.token])
        } else {
        }
    }
    async course() {
        this.props.navigation.navigate('ScanShopping',this.props)
    };
    async fin() {
        let timestamp = Math.round(new Date().getTime() / 1000);
        let barcodeTab = []
        for(let i=0; i<this.props.shopping.length; i++){
            barcodeTab.push(this.props.shopping[i].barcode);
        }
        try{
            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/shopping/new', {
                    method: "post",
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "jwt-token": this.props.user.token
                    },
                    body: JSON.stringify(
                        {
                            "startDate":timestamp,
                            "barcodes":barcodeTab
                        }
                    )
                }
            );
            let status = await response.status;
            if (status === 200){
                const shop : Product[] = []
                this.props.SetShopping(shop)
                this.props.navigation.replace('BottomTabScreen')
            }
            else{
                console.log("Cousre non crééer");
            }

        } catch (error) {
            console.error(error);
        }
    };


    render() {
            return (
                <View style={styles.main_container}>

                    <View style={{marginBottom:'5%'}}>
                        <BasicButton title={"Scan an item"} onPress={this.course.bind(this)} />
                        <BasicButton title={"Finished"} onPress={this.fin.bind(this)} />
                    </View>

                    <View style={{}}>
                        <Text style={{fontSize:25, color:useBlueColor, fontWeight:'bold'}}>My Cart</Text>
                        <FlatList
                            scrollEnabled={true}
                            data={this.props.shopping}
                            renderItem={({item}) =>
                                <View style={{flexDirection:"column"}}>
                                    <TouchableOpacity style={{marginBottom:20}}  onPress={() => this.handleBarCodeScanned(item.barcode,this.props)}>
                                        <Image source={{uri: item.image}} style={styles.image}/>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            ItemSeparatorComponent={(item) =>
                                <Divider/>
                            }
                            ListEmptyComponent={() =>
                                <View>
                                    <View>
                                        <Image source={require("../../assets/images/cart_is_empty.png")} style={styles.emptyCart}/>
                                    </View>
                                </View>
                            }
                        >
                        </FlatList>
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50,
        flex:1,
    },
    image: {
        flexGrow:1,
        width:75,
        height:75
    },
    emptyCart: {
        flex:1,
        width:450,
        height:200,
        alignSelf:"center",
        color:"green",
        resizeMode:'contain'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
