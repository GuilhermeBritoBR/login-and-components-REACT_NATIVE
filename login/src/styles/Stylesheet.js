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
        border: 'solid', 
        borderWidth: 1, 
        borderColor: 'black', 
        padding: 5, 
        marginTop: 3,
        color: 'white',
        placeholderColor: 'black',
        width: '70%',
        marginBottom: 5,
        backgroundColor: 'white',
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
    }
})