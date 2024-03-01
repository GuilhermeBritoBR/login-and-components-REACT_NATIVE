import React  from "react";
import { View, Text} from "react-native";
import {styles} from '../styles/Stylesheet';


export default function Footer() {
    return(
        <View style={styles.blocos}>
            <Text style={styles.titulo}>Copyright 2024</Text>
        </View>
    );
};