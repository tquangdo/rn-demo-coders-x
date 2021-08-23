import Categories from './screens/Categories';
import Category from './screens/Category';
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
    Categories: {
        screen: Categories,
        navigationOptions: {
            title: 'Man hinh list',
        }
    },
    Category: {
        screen: Category,
        navigationOptions: {
            title: 'Man hinh san pham',
        }
    },
})

export default AppNavigator;
