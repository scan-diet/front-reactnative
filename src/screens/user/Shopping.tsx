import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements"
import {BasicButton} from "../../components/Buttons/BasicButton";
import {SetHistoryShopping, SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import {Product} from "../../models/Product";
import Diet from "../../models/Diet";
import HistoryShopping from "../../models/HistoryShopping";


const mapStateToProps = (state : any) => {
    return {
        user: state.auth.user,
        historyShopping: state.auth.historyShopping

    }
}

const mapDispatchToProps = (dispatch: any )=> {
    return {
        SetUserDetail: (user: any) => dispatch(SetUserDetail(user)),
        SetHistoryShopping: (historyShopping: any) => dispatch(SetHistoryShopping(historyShopping)),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IShopping extends PropsFromRedux {
    SetHistoryShopping:typeof SetHistoryShopping
    user: User
    navigation: any
    historyShopping: HistoryShopping
}
class Shopping extends React.Component<IShopping>{
    constructor(props: IShopping) {
        super(props);
        this.state = {
            historyShopping: new HistoryShopping(),
        }
    }
    state: {
        historyShopping: HistoryShopping,
    }
    async course() {
        this.props.navigation.navigate('Panier',this.props)
    };

    async getShopping(){
        try{
            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/shopping/user', {
                    method: "get",
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "jwt-token":this.props.user.token
                    }
                }
            );
            let json = await response.json();
            let status = response.status;
            let shop: HistoryShopping[] = []
            for (let i=0; i<json.length; i++){
                let tabShopping: HistoryShopping = new HistoryShopping()
                if(json[i]!=null){
                    if(json[i].products!=null){
                        let tabProduct: Product[] = []
                        for(let j=0; j<json[i].products.length; j++){
                            let product:Product = new Product(
                                json[i].products[j].name,
                                json[i].products[j].image.path,
                                [],
                                "",
                                0,
                                json[i].products[j].bar_code,
                                0,
                                new Diet(false,false,false,false),
                                false
                            )
                            tabProduct.push(product)
                        }
                        tabShopping= new HistoryShopping(tabProduct,json[i].endDate,json[i].startDate)
                    }
                }
                shop.push(tabShopping)
            }

            if (status === 200){
                this.props.SetHistoryShopping(shop)
            }

        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.getShopping()
    }

    render() {
        return (

            <View style={styles.main_container}>
                <Text h3>Vue Course</Text>
                <View style={{marginBottom:'15%'}}>
                    <BasicButton title={"Creer une liste de courses"} onPress={this.course.bind(this)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)