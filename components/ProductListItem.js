import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ProductListItem({ propProduct, propOnAddToCart }) {
    return (
        <View style={styles.shadow} >
            <View style={styles.container} >
                <View style={styles.imgcontainer}>
                    <Image style={styles.img} source={{ uri: propProduct.img }} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>{propProduct.name} </Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{propProduct.price} </Text>
                        <TouchableOpacity onPress={propOnAddToCart}>
                            <Text style={styles.cartText}>MUA +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    info: {
        padding: 8,
    },
    img: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    imgcontainer: { alignItems: 'center', padding: 8 },
    name: {
        fontSize: 16,
        marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1,
    },
})
