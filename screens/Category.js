import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { PRODUCTS } from '../common/constants'
import ProductListItem from '../components/ProductListItem'

export default function Category({ navigation }) {
    const { navParamItem } = navigation.state.params
    const [staProducts, setStaProducts] = useState([])
    useEffect(() => {
        const _onFetchProducts = async () => {
            axios.get(`${PRODUCTS}?categoryid=${navParamItem.id}`)
                .then(res => {
                    setStaProducts(res.data)
                })
                .catch(err => {
                    alert(err)
                })
        }
        _onFetchProducts()
    }, [])
    const element_tmp = (staProducts.length > 0) ?
        (<>
            <Text style={styles.txt} >{navParamItem.name}</Text>

            <FlatList data={staProducts}
                numColumns={2}
                renderItem={({ item }) => <View style={styles.view}>
                    <ProductListItem propProduct={item} propOnAddToCart={() => alert('Da mua!')} />
                </View>}
                keyExtractor={arg_item => `${arg_item.id}`}
                contentContainerStyle={styles.flatlist}
            />
        </>) :
        (<>
            <Text style={styles.txt} >{navParamItem.name}</Text>
            <Text>KO co san pham nao!</Text>
        </>)
    return element_tmp
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '900',
        paddingVertical: 8,
        color: 'green',
        fontSize: 32,
    },
    view: {
        flex: 1,
        paddingHorizontal: 8,
    },
    flatlist: {
        padding: 10,
    },
});