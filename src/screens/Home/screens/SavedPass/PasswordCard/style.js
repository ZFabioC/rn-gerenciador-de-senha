import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#fafcfb',
        borderRadius: 8,
        gap: 5,
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    subTitle: {
        fontWeight: '500',
        fontSize: 15,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default styles