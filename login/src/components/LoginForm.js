import { Button } from "react-native";
import {View, Text, TextInput } from 'react-native';
import { styles } from "../styles/Stylesheet";
import Icon from "./Icon";

export default function LoginForm() {
    const starter = ()=>{
        alert('VOCÊ ESTÁ LOGADO!');
    }
    return(
        <View style={styles.blocos}>
<Text style={styles.titulo}>Login</Text>
<Icon/>
<TextInput
      placeholder='Digite seu Email..'
      style={styles.caixa}
      placeholderTextColor={'black'}
      />

      <TextInput
      placeholder='Digite sua senha..'
      secureTextEntry={true}
      style={[styles.caixa,{}]}
      placeholderTextColor={'black'}
      
      

      />
    
    <Button
    title='Entrar'
    onPress={starter}
    color={'green'}
    />
    </View>
    );
};