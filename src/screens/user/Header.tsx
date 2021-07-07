import React, { FC } from "react";
import { Text, View } from "react-native";

interface IProps {}

const Header: FC<IProps> = ({}) => {
    return (
        <View>
            <Text style={{
                fontSize:28,
                fontWeight:"bold",
                alignSelf:"flex-start",
                paddingTop:30,
                marginBottom:-40
            }}>
                Home</Text>
        </View>
    );
};

export default Header;
