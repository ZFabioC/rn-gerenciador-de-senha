import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#fafcfb',
        borderRadius: 8,
        gap: 5,
        marginTop: 10,
        padding: 5,
        backgroundColor: '#fff',
    },
    containerTitle: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    semiTitle: {
        fontWeight: '500',
        fontSize: 15,
        marginLeft: 5
    },
    button: {
        position: 'relative',
        top: 5,
        right: 10
    }
})

export default styles