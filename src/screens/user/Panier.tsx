import React from "react";
import {FlatList, StyleSheet, View, Text, Image} from "react-native";
import {BasicButton} from "../../components/Buttons/BasicButton";
import {SetShopping, SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import {Product} from "../../models/Product";
import {
    useBlueColor,
    useTransparentColor
} from "../../hooks/colorVariables";
import {Divider} from "react-native-elements";


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
                this.props.navigation.replace('Shopping')
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

                    <View style={{marginBottom:'15%'}}>
                        <BasicButton title={"Scan an item"} onPress={this.course.bind(this)} />
                        <BasicButton title={"Finished"} onPress={this.fin.bind(this)} />
                    </View>

                    <View>
                        <Text style={{fontSize:25, color:useBlueColor, fontWeight:'bold', marginBottom:15}}>My basket</Text>
                        <FlatList
                            scrollEnabled={true}
                            data={this.props.shopping}
                            renderItem={({item}) =>
                                <View style={{flexDirection:"column"}}>
                                    <Image source={{uri: item.image}} style={styles.image}/>
                                </View>
                            }
                            ItemSeparatorComponent={(item) =>
                                <Divider
                                    width={15}
                                    color={useTransparentColor}
                                />
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
        padding: 50
    },
    image: {
        flex: 0.7,
        width:100,
        height:100
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
