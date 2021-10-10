import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Text as TRNE} from "react-native-elements";
import {RouteProp} from "@react-navigation/native"
import {Colors, ProgressBar} from "react-native-paper";
import List from "../../components/Flatlist/Product/List";
import Diet from "../../models/Diet";
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import {AirbnbRating} from "react-native-ratings";
import {useBlueColor} from "../../hooks/colorVariables";

interface IDetailProduct {
    route: RouteProp<{ DetailProduct: [] },"DetailProduct">
    navigation: any
}

export default class DetailProduct extends React.Component<IDetailProduct> {
    constructor(props: IDetailProduct) {
        super(props);
        this.state = {
            defaultNote: 0,
            yourNote: 0
        }
    }

    state: {
        defaultNote: number,
        yourNote: number,
    }
    close(){
        this.props.navigation.replace('BottomTabScreen')
    }
    validDiet(diet:Diet){
        if ((diet.vegetarian && diet.vegan && diet.glutenFree && diet.lactoseFree)){
            return <View style={{flexDirection:"row"}}>
                <AntDesign name="checkcircle" size={30} color="green" style={{paddingLeft:10, paddingTop:10}}/>
                <Text style={{paddingLeft:3, paddingTop:15}}>This item respects your diet</Text>
            </View>
        } else {
            return <View style={{flexDirection:"row"}}>
                <Entypo name="circle-with-cross" size={30} color="red" style={{paddingLeft:10, paddingTop:10}} />
                <Text style={{paddingLeft:3, paddingTop:10}}>This item doesn't respect your diet</Text>
            </View>
        }
    }

    isItemInfoComplete(isCompleted:boolean){
        if(isCompleted){
            return null
        } else {
            return <View style={{flexDirection:"row"}}>
                <AntDesign name="warning" size={24} color="red" />
                <Text style={{paddingLeft:5, paddingTop:3, paddingBottom:30, fontWeight:"bold"}}>Item's info are not complete in our database</Text>
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

    async getProductGrade() {
        try {
            let response = await fetch(
                `https://scandiet-nestjs-back.herokuapp.com/products/grade/${this.props.route.params[0].barcode}`,
                {
                    method: "GET",
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                        'jwt-token': this.props.route.params[1]
                    }
                }
            );
            let json = await response.json();
            console.log(json);
            let status = response.status;

            if(status === 200) {
                if(json.averageGrade){
                    this.setState({defaultNote:json.averageGrade})
                } else {
                    this.setState({defaultNote:0})
                }
                if(json.userGrade){
                    this.setState({yourNote:json.userGrade})
                } else {
                    this.setState({yourNote:0})
                }

            } else if (status === 500) {
                const itemAverageGrade = 0;
            }
        } catch (e) {
            console.error(e);
        }
    }

    async setProductGrade(token:any, barcode:any, rating?: number) {
        try {

            let response = await fetch(
                'https://scandiet-nestjs-back.herokuapp.com/products/grade/add',
                {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-type': 'application/json',
                        'jwt-token': this.props.route.params[1]
                    },
                    body: JSON.stringify(
                        {
                            "barcode": this.props.route.params[0].barcode,
                            "grade": rating
                        }
                    )
                }
            );
            let json = await response.json();
            let status = response.status;

            if(status === 200) {
                return json.averageGrade;

            } else if (status === 500) {
                const itemAverageGrade = 0;

            }
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        this.getProductGrade()
    }

    render() {
        const json = this.props.route.params[0];
        let nutriscore = "u";

        if(json.nutriscore){
            nutriscore = json.nutriscore
        }

        return (
            <View style={{ flex:1, padding:50}}>

                <Ionicons name={"close-circle-outline"} color={useBlueColor} onPress={this.close.bind(this)} style={styles.closeButton} />

                <View style={{flexDirection:"row"}}>
                    <Image source={{uri: json.image}} style={{width: 75, height: 200, resizeMode:"contain"}} />

                    <View style={{flex:1,paddingTop:17}}>
                        <Text style={{fontSize:24, fontWeight:"bold", paddingLeft:10, }}>{json.name}</Text>
                        <Text style={{paddingLeft:10, fontStyle:"italic", fontSize:18}}><Text style={{fontSize:22}}>{json.kcal} kcal</Text> / 100g</Text>

                        <View style={{flexDirection:"row"}}>
                            <Text style={{paddingHorizontal:10, fontSize:18}}>Nutri-score</Text>
                            <Text style={[{backgroundColor:this.colorNutriscore(nutriscore),paddingHorizontal:10, fontSize:18, fontWeight:'bold'},styles.note]}>{nutriscore.toUpperCase()}</Text>
                        </View>

                        {this.validDiet(json.respectsDiet)}
                    </View>
                </View>

                {this.isItemInfoComplete(json.isItemInfoComplete)}

                <View style={{flexDirection:"row", alignSelf:"center"}}>
                    <View style={styles.getStartedContainer}>
                        <TRNE h4>Average rating</TRNE>
                        <AirbnbRating
                            isDisabled={true}
                            showRating={false}
                            count={5}
                            reviews={["Terrible", "Bad", "OK", "Good", "Perfect"]}
                            defaultRating={this.state.defaultNote}
                            size={20}
                        />
                    </View>

                    <View style={styles.getStartedContainer}>
                        <TRNE h4>Your rating</TRNE>
                        <AirbnbRating
                            isDisabled={false}
                            showRating={false}
                            count={5}
                            reviews={["Terrible", "Bad", "OK", "Good", "Perfect"]}
                            defaultRating={this.state.yourNote}
                            size={20}
                            onFinishRating={this.setProductGrade.bind(this,this.props.route.params[1], this.props.route.params[0].barcode)}
                        />
                    </View>
                </View>

                <View>
                    <Text style={{fontSize:24, fontWeight:"bold", paddingTop:15}}>Nutrition values</Text>

                    {/*PROTEINS*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text style={{}}>{json.nutriments[0].name.toUpperCase()}</Text>
                        <Text><Text style={{fontWeight:'bold', fontSize:16}}>{json.nutriments[0].value} g</Text>/100</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[0].value/100} color={Colors.red800} style={{height:8}} />

                    {/*FAT*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[1].name.toUpperCase()}</Text>
                        <Text><Text style={{fontWeight:'bold', fontSize:16}}>{json.nutriments[1].value} g</Text>/100</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[1].value/100} color={Colors.blue800} style={{height:8}} />

                    {/*SUGAR*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[2].name.toUpperCase()}</Text>
                        <Text><Text style={{fontWeight:'bold', fontSize:16}}>{json.nutriments[2].value} g</Text>/100</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[2].value/100} color={Colors.yellow800} style={{height:8}} />

                    {/*SALT*/}
                    <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:15, paddingBottom:5}}>
                        <Text>{json.nutriments[3].name.toUpperCase()}</Text>
                        <Text><Text style={{fontWeight:'bold', fontSize:16}}>{json.nutriments[3].value} g</Text>/100</Text>
                    </View>
                    <ProgressBar progress={json.nutriments[3].value/100} color={Colors.green800} style={{height:8}} />
                </View>

                <View style={{paddingTop:40, flex:1, alignItems:"center"}}>
                    <Text style={{fontSize:24, fontWeight:"bold"}}>Recommandations</Text>
                    {/* @ts-ignore */}
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
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 30,
    },
    closeButton: {
        fontSize:50,
        position: "absolute",
        right: 5,
        top: 35
    }
})
