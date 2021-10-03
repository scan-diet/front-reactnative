import React from "react";
import {StyleSheet, View} from "react-native";
import {BasicButton} from "../../components/Buttons/BasicButton";
import {SetShopping, SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import History from "../../models/History";
import {Product} from "../../models/Product";


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
    shopping: History

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
            console.log(this.props.shopping)
            return (
                <View style={styles.main_container}>

                    <View style={{marginBottom:'15%'}}>
                        <BasicButton title={"Scanner un produit"} onPress={this.course.bind(this)} />
                        <BasicButton title={"Terminer"} onPress={this.fin.bind(this)} />
                    </View>
                </View>
            )

    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Panier);