import React  from "react";
import { View, Text} from "react-native";
import {styles} from '../styles/Stylesheet'


export default function Header() {
    return(
        <View style={styles.blocos}>
            <Text style={styles.titulo}>EMBRAER</Text>
        </View>
    );
};