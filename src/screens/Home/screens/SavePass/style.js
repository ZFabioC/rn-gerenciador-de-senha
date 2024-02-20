import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        backgroundColor: '#e8e8e8',
        alignItems: 'center'
    },
    buttonSignIn: {
        width: '90%',
        backgroundColor: '#09a5d9',
        alignItems: 'center',
        marginTop: 40,
        padding: 10,
        borderRadius: 50
    },
    textButtonSignIn: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 17
    },
    containerPassword: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center'
    },
    buttonViewPassword: {
        position: 'absolute',
        right: -145,
        bottom: 5
    }
})

export default styles