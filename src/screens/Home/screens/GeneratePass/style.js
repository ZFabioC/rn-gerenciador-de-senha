import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
        
    },
    image: {
        width: 220,
        height: 220,
        marginVertical: 40
    },
    text: {
        fontWeight: '600',
        fontSize: 18,
    },
    containerSlider: {
        width: '90%',
        borderRadius: 10,
        backgroundColor:'#e6eaf0',
        alignItems: 'center',
        marginVertical: 20
    },
    slider: {
        borderRadius: 10,
        width: '85%',
        height: 50,
    }
})

export default styles