import React, {FC} from 'react';
import {View, StyleSheet} from "react-native";

interface CardProps {
    children: any;
    carte: string;
    style: string | any;
}

const Card: FC<Partial<CardProps>> = ({children, carte, style}) => {
    return (
        <View style={[carte, style ]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#6CC57C',
        padding:20,
        borderRadius:10,

        /**
         * PROPERTIES ONLY AVAILABLE ON iOS
          */
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.26,

        /**
         * WITH ELEVATION WE CAN APPLY iOS PROPERTIES INTO ANDROID
          */
        elevation:8
    }
})

export default Card;
