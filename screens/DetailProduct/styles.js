import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
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
    image: {
        flex: 0.7,
    },
    main: {
        flex:1,
        backgroundColor:"#F4F5FA"
    },
    main_view: {
        flex:1,
        marginTop: '15%',
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

export default styles;
