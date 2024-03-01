import {styles} from '../styles/Stylesheet';
import { ImageBackground, View } from 'react-native';
import LoginImageBackground from '../components/LoginImageBackground';
import  Header  from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';
import { StatusBar } from 'react-native';
// import Form from '../components/Form';

export default function Login() {
  const imagem = {uri: ('https://images2.alphacoders.com/546/thumb-1920-546587.jpg')}
      
    
    return (
    
  
      
      <View style={styles.container}>
      {/* <LoginImageBackground> */}
      <ImageBackground
  source={imagem}
  resizeMode='cover'
  style={styles.background}
  imageStyle= {{opacity:0.3}}
  >
      <Header/>  
      <LoginForm/>
      <Footer/>
      
      <StatusBar/>
      </ImageBackground>
      </View>

    );
  }