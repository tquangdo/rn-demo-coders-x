import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet } from 'react-native';
import { CATEGORIES } from '../common/constants';
import CategoryListItem from '../components/CategoryListItem';

export default function Categories({ navigation }) {
    const [staCategories, setStaCategories] = useState([])
    useEffect(() => {
        const _onFetchData = async () => {
            axios.get(CATEGORIES)
                .then(res => {
                    setStaCategories(res.data)
                })
                .catch(err => {
                    alert(err)
                })
        }
        _onFetchData()
    }, [])
    return <>
        <StatusBar barStyle='dark-content' />
        <FlatList data={staCategories}
            renderItem={({ item }) => <CategoryListItem
                propCategory={item}
                propOnPress={() => navigation.navigate('Category', {
                    navParamName: item.name
                })} />}
            keyExtractor={arg_item => `${arg_item.id}`}
            contentContainerStyle={styles.list}
        />
    </>
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 16,
    },
});
