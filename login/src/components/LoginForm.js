import { Button } from "react-native";
import {View, Text, TextInput } from 'react-native';
import { styles } from "../styles/Stylesheet";

export default function LoginForm() {
    const starter = ()=>{
        alert('VOCÊ ESTÁ LOGADO!');
    }
    return(
        <View style={styles.blocos}>
<Text style={styles.titulo}>Login</Text>
<TextInput
      placeholder='Digite seu Email..'
      style={styles.caixa}
      placeholderTextColor={'black'}
      />

      <TextInput
      placeholder='Digite sua senha..'
      secureTextEntry={true}
      style={styles.caixa}
      placeholderTextColor={'black'}

      />
    
    <Button
    title='Entrar'
    onPress={starter}
    />
    </View>
    );
};