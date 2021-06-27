import React, {FC} from "react";
import {Button} from "react-native";

interface BoutonProps {
    onPress: () => void;
    titre: string;
}

const Bouton: FC<BoutonProps> = ({titre, onPress})=>{
    return (
        <Button title={titre} color="#1A1D53" onPress={() => { return onPress();}} />
    );
};

export default Bouton;
