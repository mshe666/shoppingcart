import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {StackNavigator} from 'react-navigation';

import shopping_list from './components/shopping_list';
import add_item from './components/add_item';
import edit_item from './components/edit_item';

const RootStack = StackNavigator(
    {
        shoppingList: {screen: shopping_list},
        addItem: {screen: add_item},
        editItem: {screen: edit_item},
    },
    {
        initialRouteName: 'shoppingList',
    }
);


type Props = {};
export default class App extends Component<Props> {

    render() {
        return <RootStack/>;
    }
}


console.disableYellowBox = true;

AppRegistry.registerComponent('main', () => App);
