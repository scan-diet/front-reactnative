import React from "react";
import {FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-elements"
import {BasicButton} from "../../components/Buttons/BasicButton";
import {SetHistoryShopping, SetShopping, SetUserDetail} from "../../store/actions";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import HistoryShopping from "../../models/HistoryShopping";
import {useWhiteColor} from "../../hooks/colorVariables";

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
        SetShopping: (shopping: any) => dispatch(SetShopping(shopping))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IShopping extends PropsFromRedux {
    SetHistoryShopping:typeof SetHistoryShopping
    user: User
    navigation: any
    historyShopping: HistoryShopping
    SetShopping:typeof SetShopping
}
class Shopping extends React.Component<IShopping>{
    constructor(props: IShopping) {
        super(props);
        this.state = {
            historyShopping: new HistoryShopping(),
            liste: []
        }
    }
    state: {
        historyShopping: HistoryShopping,
    }
    async course() {
        this.props.SetShopping([])
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
            this.setState({
                liste: json.map((element:any) => {
                    //TODO: formater la date ici
                    // element.endDate = 'formater la date';
                    return element
                })
            })

        } catch (error) {
            console.error(error);
        }
    }
    componentDidMount() {
        this.getShopping()
    }
    lstCourse(products:any,props:any){
        this.props.navigation.navigate('LstCourse',[props,products])
    }
    getDate(item:any):string{
        const date = new Date(item);
        const day = date.getDate();
        const monthIndex = date.getMonth()+1;
        const year = date.getFullYear();
        return day + "/" + monthIndex + "/" + year
    }
    getTime(item:any):string{
        const date = new Date(item);
        const min = date.getMinutes();
        const hour = date.getHours();
        return hour + ":" + min
    }

    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                <Text h3>Shopping Mode</Text>
                <View style={{marginBottom:'15%'}}>
                    <BasicButton title="Create a shopping list" onPress={this.course.bind(this)} />
                </View>

                <FlatList
                    data={this.state.liste}
                    scrollEnabled={true}
                    renderItem={({item}) =>
                        <TouchableOpacity style={{backgroundColor:useWhiteColor, borderRadius:50, alignItems:"center", marginBottom:10}}  onPress={() => this.lstCourse(item.products,this.props)}>
                            <Text style={{fontSize:20}} key={item.endDate}>Course du {this.getDate(item.endDate)}</Text>
                            <Text style={{fontSize:15}} key={item.endDate}>Fait à {this.getTime(item.endDate)}</Text>
                        </TouchableOpacity>
                    }
                    ItemSeparatorComponent={() => <Text></Text>}
                    ListEmptyComponent={() =>
                        <View>
                            <View>
                                <Image source={require("../../assets/images/list_empty.png")} style={styles.emptyShopping}/>
                                <Text style={{textAlign:"center", fontSize:20, fontStyle:"italic"}}>Your shopping list is empty</Text>
                            </View>
                        </View>
                    }
                >
                </FlatList>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 50,
        flex:1
    },
    emptyShopping: {
        flex:1,
        width:450,
        height:200,
        alignSelf:"center",
        resizeMode:'contain'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Shopping)
