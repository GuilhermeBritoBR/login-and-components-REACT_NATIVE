import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "../styles/Stylesheet";

export default function LoginImageBackground({ children }) {
  // REQUIRINDO IMAGENS
  const imagem = {
    uri: "https://www.defenseforces.com/wp-content/uploads/2016/06/Embraer-KC-390.jpg",
  };
  return (
    <ImageBackground
      source={imagem}
      resizeMode="cover"
      style={styles.background}
      imageStyle={{ opacity: 0.5 }}
    >
      {children}
    </ImageBackground>
  );
}
