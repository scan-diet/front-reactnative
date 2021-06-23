import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        padding:50,
        backgroundColor:"#F4F5FA"
    },
    main_view: {
        flex:1,
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
