import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040',
        
    },
    content: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '85%',
        height: '25%',
        borderRadius: 8
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20,

    }

})

export default styles