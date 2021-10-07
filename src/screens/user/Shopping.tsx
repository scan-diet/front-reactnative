import React from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Text} from "react-native-elements"
import {BasicButton} from "../../components/Buttons/BasicButton";
import {SetHistoryShopping, SetShopping, SetUserDetail} from "../../store/actions";
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

            if(response.status == 200){
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                console.log(json)
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            }

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
        const dateRet = day + "/"+monthIndex+"/"+year
        return dateRet
    }
    getTime(item:any):string{
        const date = new Date(item);
        const min = date.getMinutes();
        const hour = date.getHours();
        const dateRet = hour + ":"+min
        return dateRet
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text h3>Vue Course</Text>
                <View style={{marginBottom:'15%'}}>
                    <BasicButton title={"Creer une liste de courses"} onPress={this.course.bind(this)} />
                </View>

                <FlatList data={this.state.liste}
                          renderItem={({item}) => <TouchableOpacity  onPress={() => this.lstCourse(item.products,this.props)}>
                              <Text key={item.endDate}>Course du : {this.getDate(item.endDate)}</Text>
                              <Text key={item.endDate}>Fait à {this.getTime(item.endDate)}</Text>
                          </TouchableOpacity>}
                          ItemSeparatorComponent={() => <Text></Text>}
                          ListEmptyComponent={() => <Text>Nothing</Text>}
                >

                </FlatList>
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
