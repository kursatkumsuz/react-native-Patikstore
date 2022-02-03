import {
    Dimensions,
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
    container: {
        width: Dimensions.get("window").width / 2.2,
        backgroundColor: '#E2E6E6',
        borderRadius: 8,
        margin: 8,
        padding: 10
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderRadius: 8
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 15,
        marginTop: 5,
        color: '#6D6D6D'
    },
    stock: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    }
})