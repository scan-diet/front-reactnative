import React, {FC, useState} from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

interface CustomButtonProps {
    titre: string;
    onPress: () => void;
    largeurBouton: string | number;
    hauteurBouton: string | number;
}

const CustomButton: FC<CustomButtonProps> = ({titre, onPress, hauteurBouton, largeurBouton}) => {
    const [pressed, setPressed] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                pressed ? setPressed(false) : setPressed(true);
                return onPress();
            }}
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: pressed ? '#6CC57C' : '#707070',
                borderColor: pressed ? '#6CC57C' : '#707070',
                borderWidth: 1,
                borderRadius: 50,
                width: largeurBouton,
                height: hauteurBouton,
                margin: 5,

            }}>
            <Image style={{marginRight:20}} source={require('../assets/images/image_addition_symbol.png')}/>
            <Text style={{color:'#FFFFFF'}}>
                {titre}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
