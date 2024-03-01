import React  from "react";
import { ImageBackground } from "react-native";
import { styles } from "../styles/Stylesheet";




export default function LoginImageBackground(){
    // REQUIRINDO IMAGENS
    const imagem = {uri: ('https://images2.alphacoders.com/546/thumb-1920-546587.jpg')}
    return(
<ImageBackground
source={imagem}
resizeMode='cover'
style={styles.background}
imageStyle= {{opacity:0.3}}
/>
    );
};