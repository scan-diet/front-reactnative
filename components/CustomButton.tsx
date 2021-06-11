import React, {FC, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

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
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: pressed ? '#6CC57C' : '#707070',
                borderColor: pressed ? '#6CC57C' : '#707070',
                borderWidth: 1,
                borderRadius: 50,
                width: largeurBouton,
                height: hauteurBouton,
                margin: 10,
            }}>
            <Text style={{color:'#FFFFFF'}}>
                {titre}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
