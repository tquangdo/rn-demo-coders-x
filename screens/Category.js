import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ProductListItem from '../components/ProductListItem'

export default function Category({ navigation }) {
    state = {
        staCategory: [
            {
                id: 1,
                name: 'san pham 1',
                img: 'https://i.picsum.photos/id/480/200/300.jpg?hmac=-NCJbhpqFCFd17uR0DXt17Ccp5H073pZLLaStM6erZg',
                price: '5000000',
            },
            {
                id: 2,
                name: 'san pham 2',
                img: 'https://i.picsum.photos/id/894/200/300.jpg?hmac=yPKW_JRjZMfmYXpao6QL5LEt2cYJQdesD-zkL-U-UJs',
                price: '3400000',
            },
        ]
    }
    const { staCategory } = this.state
    return (
        <>
            <Text style={styles.txt} >{navigation.state.params.navParamName}</Text>
            <FlatList data={staCategory}
                numColumns={2}
                renderItem={({ item }) => <View style={styles.view}>
                    <ProductListItem propProduct={item} propOnAddToCart={() => alert('Da mua!')} />
                </View>}
                keyExtractor={arg_item => `${arg_item.id}`}
                contentContainerStyle={styles.flatlist}
            />
        </>
    )
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