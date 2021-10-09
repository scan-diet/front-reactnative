import React from "react";
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native"

import {PieChart} from "react-native-chart-kit";
import {color} from "react-native-elements/dist/helpers";

interface IDetailProduct {
    route: RouteProp<{ DetailProduct: [] },"LstCourse">
}

export default class LstCourse extends React.Component<IDetailProduct> {
    constructor(props: IDetailProduct) {
        super(props);
    }

    stat(){
        let a = 0
        let b = 0
        let c = 0
        let d = 0
        let e = 0
        const json=this.props.route.params[1]
        for(let i=0;i<json.length;i++){
            console.log(json[i].nutriscore_grade)
            switch (json[i].nutriscore_grade) {
                case 'a':
                    a = a+1;
                    break;
                case 'b':
                    b = b+1;
                    break;
                case 'c':
                    c= c+1;
                    break;
                case 'd':
                    d = d+1;
                    break;
                case 'e':
                    e = e+1;
                    break;
        }
    }
    const data = [{
            name : "A",
            nbr: a,
            color:"green",
            legendFontColor:"green",
            legendFontSize:15
        },
        {
            name : "B",
            nbr: b,
            color:"lightgreen",
            legendFontColor:"lightgreen",
            legendFontSize:15
        },
        {
            name : "C",
            nbr: c,
            color:"yellow",
            legendFontColor:"yellow",
            legendFontSize:15
        },
        {
            name : "D",
            nbr: d,
            color:"orange",
            legendFontColor:"orange",
            legendFontSize:15
        },
        {
            name : "E",
            nbr: e,
            color:"red",
            legendFontColor:"red",
            legendFontSize:15
        }
    ]
        console.log(data)
    return data
    }

    render() {
        const json = this.props.route.params[1];
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
        };
        console.log(this.props.route.params[1])
        return (
            <SafeAreaView style={{backgroundColor:'cyan', flex:1}}>
                <Text style={{fontSize:25}}>Cart's health score</Text>
                <FlatList
                    scrollEnabled={true}
                    data={json}
                    renderItem={({item}) =>
                        <View style={{flexDirection:"column", backgroundColor:'cyan'}}>
                            <Image source={{uri: item.image.path}} style={styles.image}/>
                        </View>
                    }
                    ItemSeparatorComponent={() => <View style={styles.lineStyle}></View>}
                >
                </FlatList>
                <PieChart
                    data={this.stat()}
                    width={100} // modifier ici pour l'adapter à l'appareil
                    height={100}
                    chartConfig={chartConfig}
                    accessor={"nbr"}
                    backgroundColor={"transparent"}
                    paddingLeft={"50"}
                    center={[1,15]}
                    absolute
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    note: {
        marginLeft: '2%',
        borderStyle: "solid",
        borderRadius: 15,
        fontSize: 20
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    image: {
        flex: 0.7,
        width: 100,
        height: 100
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'cyan',
        margin:10
    }
})


