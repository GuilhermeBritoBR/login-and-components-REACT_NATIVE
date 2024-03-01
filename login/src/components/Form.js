import React  from "react";
import { View, Text} from "react-native";
import {styles} from '../styles/Stylesheet'
import LoginForm from "./LoginForm";

export default function Header() {
    return(
        <View style={styles.blocos}>
           
                <LoginForm/>
            
        </View>
    );
};