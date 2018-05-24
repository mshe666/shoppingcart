import React, {Component} from 'react';

import {View, TouchableHighlight, Image, Text} from 'react-native';
import style from '../Style';


export default class item extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <TouchableHighlight style={style.addBtn} onPress={() => this.props.navigation.navigate('addItem')}>
                <Image style={style.addBtn} source={require('../images/add.png')}/>
            </TouchableHighlight>
        )
    }

}
