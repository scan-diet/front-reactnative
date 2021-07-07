import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from "react-native";
import HomeNav from "../../components/HomeNav";
import ActivityFlatList from "../../components/ActivityFlatList";
import CardView from "../../components/UI/Card/CardView";
import Card from "../../components/UI/Card/Card";
import ItemTabView from "../main/itemTabNavigator";
import Carousel from "react-native-snap-carousel";
import {animatedStyles, scrollInterpolator} from "../../carousel/animation";
import Header from "./Header";
import {useWhiteColor} from "../../hooks/colorVariables";
import {ScanListButton} from "../../components/UI/Buttons/ScanListButton";
import {WEEKLY_ENTRIES} from "../../carousel/weeklyEntries";
import store from "../../store/store";
import {connect, ConnectedProps} from "react-redux";
import {Use} from "react-native-svg";
import User from "../../models/User";
import {SetUserDetail} from "../../store/actions";
import CardNews from "../../components/CardNews";

// const SLIDER_WIDTH = Dimensions.get('window').width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
// const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);
//
// const DATA:any = [];
// for (let i = 0; i < 5; i++) {
//     DATA.push(i)
// }

const mapStateToProps = (state : any) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch: any )=> {
    return {
        SetUserDetail: (user: any) => dispatch(SetUserDetail(user)),
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IHome extends PropsFromRedux {
    user: User
}

class Home extends React.Component<IHome> {

    // state = {
    //     index: 0,
    //     weeknumber: '24',
    //     weekresult: "You've lost"
    // }
    //
    constructor(props:any) {
        super(props);
        const u = props.user;
        // this._renderItem = this._renderItem.bind(this)
    }
    // _renderItem({ weeknumber, weekresult }:any) {
    //     return (
    //         <View style={styles.itemContainer}>
    //             <Text style={[styles.itemLabel, {color:'black'}]}>${this.state.weeknumber}</Text>
    //             <Text style={{color:'black', fontSize:20, alignContent:"center"}}>{`Item ${this.state.weekresult}`}</Text>
    //         </View>
    //     );
    // }

    render() {
        return (
            /*<View style={styles.main}>
                <View>
                    <Text style={styles.title}>Activité</Text>
                    <Text style={styles.date}>{date}/{month}/{year}</Text>
                </View>

                <View style={styles.main_container}>
                    <ActivityFlatList />
                </View>

                <View style={styles.activity_container}>
                    <HomeNav/>
                </View>
            </View>*/
            <SafeAreaView style={{ flex: 1, padding:25 }}>
                <View>
                    <Header>Home</Header>
                </View>

                {/*<View>
                    <Text>{store.getState()}</Text>
                </View>*/}
                {/*<View style={{alignItems:"center", paddingBottom:30}}>
                    <Carousel
                        // ref={(c) => this.carousel = c}
                        data={WEEKLY_ENTRIES}
                        renderItem={this._renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        containerCustomStyle={styles.carouselContainer}
                        inactiveSlideShift={0}
                        onSnapToItem={(index) => this.setState({ index })}
                        scrollInterpolator={scrollInterpolator}
                        slideInterpolatedStyle={animatedStyles}
                        useScrollView={true}
                    />
                </View>*/}

                <View style={{alignItems:"center"}}>
                    <Card></Card>
                </View>
                <ScanListButton onPress={()=>{this.props.navigation.navigate('ScanUser',this.props)}} />
            </SafeAreaView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles2 = StyleSheet.create({
    main_container: {
        flex:1,
        padding:20,
        alignItems:'center',
        backgroundColor:"#F4F5FA"
    },
    activity_container:{
        flex:1,
        paddingBottom:20,
        backgroundColor:"#F4F5FA"
    },
    main: {
        flex:1,
        backgroundColor:"#F4F5FA"
    },
    main_view: {
        flex:1,
        marginTop: '15%',
        //justifyContent:"left"
    },
    title: {
        fontSize:35,
        color:'#1A1D53',
        textAlign: 'left',
        paddingLeft: '5%',
        marginTop: '20%',
        fontWeight:'bold',
        borderStyle: 'solid',
        borderColor: '#000000'
    },
    date: {
        fontSize:20,
        color:'#1A1D53',
        borderStyle: 'solid',
        textAlign: 'right',
        paddingRight: '5%',
        borderColor: '#000000'
    },
    activity_txt: {
        fontSize:20,
        color:'#1A1D53',
        fontWeight:'bold',
        fontFamily: 'arial'
    },
    logo: {
        width:100,
        height:100,
        marginBottom:'15%'
    },
    home_title: {
        marginBottom:'10%',
        fontSize:45,
        color:'#1A1D53',
        fontWeight:'bold',
        textAlign:"center"
    },
    text_input: {
        marginBottom:'5%',
        padding: 7,
        backgroundColor:"#FFFFFF",
        width:'80%',
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15
    },
    other_info: {
        marginBottom:'8%',
        color:'#8D8D8D'
    }
})

const styles = StyleSheet.create({
    carouselContainer: {
        marginTop: 50
    },
    itemContainer: {
        // width: ITEM_WIDTH,
        // height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: useWhiteColor,

        borderRadius:20
    },
    itemLabel: {
        //color: 'white',
        fontSize: 24
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
