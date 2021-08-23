import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function CategoryListItem({ propCategory, propOnPress }) {
    return <TouchableOpacity onPress={propOnPress}>
        <View style={styles.container}>
            <Text style={styles.title}>{propCategory.name}</Text>
            <Image source={{ uri: `${propCategory.img}` }}
                style={styles.categoryImage}
            />
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    categoryImage: {
        height: 64, width: 64
    },
});
