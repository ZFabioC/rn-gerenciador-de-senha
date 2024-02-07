import { StyleSheet } from "react-native"  

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginTop: 30,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        marginLeft: 8,
        paddingLeft: 5,
        borderBottomWidth: 1,
        width: '75%',
        fontSize: 16,
        fontWeight: '500'
    },
})

export default styles