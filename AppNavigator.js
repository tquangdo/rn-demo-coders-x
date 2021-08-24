import Categories from './screens/Categories';
import Category from './screens/Category';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Cart from './screens/Cart';
import Order from './screens/Order';
import Setting from './screens/Setting';
import { Ionicons } from '@expo/vector-icons';
import { COLOR } from './common/constants';
import React from 'react'

const CategoryStack = createStackNavigator({
    Categories: {
        screen: Categories,
        navigationOptions: {
            title: 'Man hinh danh muc',
        }
    },
    Category: {
        screen: Category,
        navigationOptions: {
            title: 'Man hinh san pham',
        }
    },
})
CategoryStack.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-home" size={36}
            color={focused ? COLOR.ACTIVE : COLOR.INACTIVE}
        />
    },
    tabBarLabel: 'Danh muc',
}
const CartStack = createStackNavigator({
    Cart: {
        screen: Cart,
        navigationOptions: {
            title: 'Man hinh gio hang',
        }
    },
})
CartStack.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-cart" size={36}
            color={focused ? COLOR.ACTIVE : COLOR.INACTIVE}
        />
    },
    tabBarLabel: 'Gio hang'
}
const OrderStack = createStackNavigator({
    Order: {
        screen: Order,
        navigationOptions: {
            title: 'Man hinh dat hang',
        }
    },
})
OrderStack.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-bookmark" size={36}
            color={focused ? COLOR.ACTIVE : COLOR.INACTIVE}
        />
    },
    tabBarLabel: 'Dat hang'
}
const SettingStack = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: {
            title: 'Man hinh setting',
        }
    },
})
SettingStack.navigationOptions = {
    tabBarIcon: ({ focused }) => {
        return <Ionicons name="ios-settings" size={36}
            color={focused ? COLOR.ACTIVE : COLOR.INACTIVE}
        />
    },
    tabBarLabel: 'Setting'
}
const AppNavigator = createBottomTabNavigator({
    CategoryStack, CartStack, OrderStack, SettingStack
})

export default AppNavigator;
