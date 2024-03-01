import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#000',
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '85%'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})

export default styles