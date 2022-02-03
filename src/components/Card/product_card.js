import React from "react";
import {
    Text,
    View,
    Image,
} from 'react-native'
import styles from './Card.style'




const productCard = ({ products }) => {
    let inStock
    const stock = (products.inStock == false) ? inStock = "STOKTA YOK" : " "

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: products.imgURL }} />
            <Text style={styles.title} >{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            <Text style={styles.stock}>{inStock}</Text>

        </View>
    )
}

export default productCard