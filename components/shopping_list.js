import React, {Component} from 'react';

import {ScrollView, Text, View, FlatList, Alert, TouchableHighlight, Image} from 'react-native';
import style from '../Style';
import AddButton from './add_button';
import firebase from '../firebase/firebase';
import { Icon } from 'react-native-elements';

class Item extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            uuid: this.props.uuid,
            name: this.props.name,
            description: this.props.description,
            quantity: this.props.quantity,
            image: this.props.image,
        };
    }

    _confirmDelete = (uuid) => {
        console.log('item.js line 20: _confirmDelte uuid = ' + uuid);
        Alert.alert(
            'Delete Item',
            ' ',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this._handleDelete(uuid)},
            ],
            {cancelable: true}
        )
    }

    _handleDelete = (uuid) => {
        console.log('item.js line 33: DELETING uuid = ' + uuid);
        firebase.database().ref('items/' + uuid).remove().then(() => {
            console.log('DELETED!');
        }).catch(error => {
            console.log(error);
        });

    };

    render() {


        return (
            <View style={style.item}>
                <View style={style.iconContainer}>
                    <TouchableHighlight style={style.editIcon}
                                        onPress={() => this.props.navigation.navigate('editItem',
                                            {
                                                uuid: this.state.uuid,
                                                name: this.state.name,
                                                description: this.state.description,
                                                quantity: this.state.quantity,
                                                image: this.state.image,
                                            })}>
                        <Image style={style.editIcon} source={require('../images/edit.png')} />

                    </TouchableHighlight>

                    <TouchableHighlight style={style.deleteIcon}
                                        onPress={this._confirmDelete.bind(this, this.state.uuid)}
                    >
                        <Image style={style.deleteIcon} source={require('../images/delete.png')}/>
                    </TouchableHighlight>
                </View>

                <TouchableHighlight style={style.itemBody}>
                    <View style={style.itemBody}>

                        {this.state.image === null ?
                            <Image style={style.itemPic} source={require('../images/default_image.png')}/>
                            : <Image style={style.itemPic} source={{uri: this.state.image}}/>}

                        <View style={style.itemDes}>
                            <View style={style.itemHeaderContainer}>
                                {this.state.name === null ?
                                    <Text style={style.itemHeader}>Item Name</Text>
                                    : <Text style={style.itemHeader}>{this.state.name}</Text>}

                                {this.state.quantity === null ?
                                    <Text style={style.itemQuantity}>x 0</Text>
                                    : <Text style={style.itemQuantity}>x {this.state.quantity}</Text>}
                            </View>

                            {this.state.description === null ?
                                <Text style={style.itemDescription}>Item Description</Text>
                                : <Text style={style.itemDescription}>{this.state.description}</Text>}
                        </View>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }

}



export default class shopping_list extends Component {
    static navigationOptions = {
        title: 'My Shopping List',
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            toRender: false,
        }
    }

    _loadItem() {
        firebase.database().ref('items').on('value', (data) => {
            console.log('shopping_list.js line 24: data.toJSON = ' + (data.toJSON()));

            const itemList = [];
            console.log('shopping_list.js >>>>>>>>>>>>>>>>>>start to load items! toRender = ' + this.state.toRender);

            data.forEach((item) => {
                itemList.push({
                    uuid: item.child('uuid').val() === null ? 'None' : item.child('uuid').val().toString(),
                    name: item.child('name').val() === null ? 'None' : item.child('name').val().toString(),
                    quantity: item.child('quantity').val() === null ? '0' : item.child('quantity').val().toString(),
                    description: item.child('description').val() === null ? 'None' : item.child('description').val().toString(),
                    image: item.child('image').val() === null ? null : item.child('image').val().toString(),
                });
                console.log('shopping_list.js line 34: loading item name = ' + item.child('name').val());
            });

            console.log('shopping_list.js line 37: itemList = ' + itemList);

            // itemList.forEach((item) => console.log(item.child('name').val()));

            this.setState({
                items: itemList
            })
        }, (error => {
            console.log('shopping_list.js line 41: error = ' + error);
        }));
    }

    componentWillMount() {
        this._loadItem();
    }

    _keyExtractor = (item, index) => item.uuid;


    _renderItem = ({item}) => (
        <Item
            uuid={item.uuid}
            name={item.name}
            quantity={item.quantity}
            description={item.description}
            image={item.image}
            navigation={this.props.navigation}
        />
    );



    render() {
        return (
            <View style={style.container}>
                <ScrollView style={style.scrollContainer}>
                    <FlatList
                        data={this.state.items}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />

                </ScrollView>
                <AddButton navigation={this.props.navigation}/>
            </View>

        )
    }

}
