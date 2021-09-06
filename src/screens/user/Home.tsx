import React from "react";
import {SafeAreaView, View} from "react-native";
import Card from "../../components/Card/Card";
import Header from "./Header";
import {ScanListButton} from "../../components/Buttons/ScanListButton";
import {connect, ConnectedProps} from "react-redux";
import User from "../../models/User";
import {SetHistory, SetUserDetail} from "../../store/actions";
import List from "../../components/Flatlist/History/List";
import History from "../../models/History";

const mapStateToProps = (state : any) => {
    return {
        user: state.auth.user,
        history: state.auth.history

    }
}

const mapDispatchToProps = (dispatch: any )=> {
    return {
        SetUserDetail: (user: any) => dispatch(SetUserDetail(user)),
        SetHistory: (history: any) => dispatch(SetHistory(history))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IHome extends PropsFromRedux {
    user: User
    navigation: any
    history: History
}

class Home extends React.Component<IHome> {

    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, padding:25 }}>
                <View>
                    <Header>Home</Header>
                </View>

                <View style={{alignItems:"center"}}>
                    <Card></Card>
                </View>
                <List json={this.props.history} props={this.props} />
                <ScanListButton onPress={()=>{this.props.navigation.navigate('ScanUser',this.props)}} />
            </SafeAreaView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
