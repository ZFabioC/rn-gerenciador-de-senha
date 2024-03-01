import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040',
    },
    content: {
        backgroundColor: '#fff',
        width: '85%',
        height: '25%',
        borderRadius: 8,
        padding: 15,
        gap: 15,
        alignItems: 'center'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: '500',
        fontSize: 17
    },
    containerPassword: {
        backgroundColor: '#e6eaf0',
        width: '85%',
        padding: 6,
        paddingLeft: 14,
        borderRadius: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonText: {
        fontWeight: '400',
    }
})

export default styles