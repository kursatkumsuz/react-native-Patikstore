import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TextInput
} from 'react-native';


import product_data from './product_data.json'
import ProductCard from './components/Card'


const App = () => {

    const renderProducts = ({ item }) => <ProductCard products={item} />
    const numColums = 2;

    return (

        <SafeAreaView>
            <Text style={styles.name}>PATIKSTORE</Text>

            <FlatList style={styles.flat_container}
                ListHeaderComponent={() =>
                    <TextInput
                        style={styles.input}
                        placeholder="Ara..." />}

                data={product_data}
                renderItem={renderProducts}
                numColumns={numColums}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    flat_container: {
        marginBottom: 60,
    },
    name: {
        color: '#9A0FAD',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    input: {
        backgroundColor: '#E2E6E6',
        borderRadius: 15,
        padding: 10,
        margin: 10,

    }
})

export default App;