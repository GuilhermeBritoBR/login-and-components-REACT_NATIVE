import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        color: 'black'
    },
    blocos: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
       
      },
    caixa: {
        backgroundColor: 'white', 
        padding: 5, 
        marginTop: 3,
        placeholderColor: 'black',
        color: 'black',
        width: '70%',
        marginBottom: 5,
        borderRadius: 5,
       
        
        
    },
    personifica: {
        flex: 1,
    },
    background: {
        flex:2, 
        width: '100%', 
        
        
    },
    opacidade: {
        flex: 1,
        opacity: 0.7,
        backgroundColor: 'black',
        width: '100%',
    },
    img: {
        width: 69,
        height: 35,
    }
})