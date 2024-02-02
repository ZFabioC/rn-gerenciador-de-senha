import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    headerContainer: {
        flex: 2,
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 350
    },
    title: {
        position: 'absolute',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#fff',
        top: 220,
        left: 40

    },
    containerLogin: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '39%',
        padding: 10,
        alignItems: 'center',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginTop: 40,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        marginLeft: 8,
        borderBottomWidth: 1,
        width: '88%',
        fontSize: 16,
        fontWeight: '500'
    },
    buttonSignIn: {
        width: '90%',
        backgroundColor: '#09a5d9',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        borderRadius: 50
    },
    textButtonSignIn: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 17
    }
})

export default styles