import React, {FC} from "react";
import {StyleSheet, View} from 'react-native';

interface IProps {
    children: any;
}

const Card: FC<IProps> = ({children}) => {
    return (
        <View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
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

export default Card;
