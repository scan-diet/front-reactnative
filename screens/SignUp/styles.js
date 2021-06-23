import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    main_container: {
        padding: 50
    },
    main_view: {
        flex:1,
        alignItems:'center',
    },
    saisie: {
        marginBottom:'5%',
        padding: 7,
        backgroundColor:"#FFFFFF",
        width:'50%',
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15
    },
    card: {
        /**
         * PROPRIETÉS DE STYLE VALABLE UNIQUEMENT SUR iOS
         */
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,

        /**
         * APPLIQUE LES PROPRIETÉS DE STYLE iOS PRÉCÉDENTES DANS ANDROID
         */
        elevation:8,

        backgroundColor:'#6CC57C',
        padding:20,
        borderRadius:10
    }
})

export default styles;
