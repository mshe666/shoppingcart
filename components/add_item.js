import React, {Component} from 'react';

import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Image,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import style from '../Style';
import {ImagePicker, Permissions} from 'expo';
import firebase from "firebase";

export default class add_item extends Component {
    static navigationOptions = {
        title: 'Add Item',
    };

    constructor(props) {
        super(props);

        const {params} = this.props.navigation.state;

        this.state = {
            uuid: null,
            name: null,
            quantity: null,
            description: null,
            image: null,
        }
    }

    _pickImage = async () => {

        this._getLocationAsync();

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    };

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    _generateUUID = () => {
        let uuid = this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
        this.setState({uuid: uuid});
        console.log('add_item.js line 57: uuid = ' + uuid);
        return uuid;
    }


    _handelAdd = () => {

        let uuid = this._generateUUID();
        const item = {
            uuid: uuid,
            name: this.state.name,
            quantity: this.state.quantity,
            description: this.state.description,
            image: this.state.image,
        }
        console.log("uuid=" + uuid + ",name=" + this.state.name + ",quantity=" + this.state.quantity + ",description=" + this.state.description + ",image=" + this.state.image);

        firebase.database().ref('items/' + uuid).set(item).then(() => {
            console.log('INSERTED!');
        }).catch(error => {
            console.log(error);
        })

        this.props.navigation.navigate('shoppingList');


    };

    async _getLocationAsync() {
        const { Location, Permissions } = Expo;
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            return Location.getCurrentPositionAsync({enableHighAccuracy: true});
        } else {
            throw new Error('Location permission not granted');
        }
    }




    render() {

        let {image} = this.state;

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={style.addItemContainer}>

                    <View style={style.fieldContainerSingle}>
                        <Text style={style.addItemLabel}>Name</Text>
                        <TextInput style={style.addItemInput}
                                   onChangeText={(text) => this.setState({name: text})}
                                   value={this.state.name}
                                   placeholder={'Enter item name'}
                        />
                    </View>
                    <View style={style.fieldContainerSingle}>
                        <Text style={style.addItemLabel}>Quantity</Text>
                        <TextInput style={style.addItemInput}
                                   keyboardType='numeric'
                                   onChangeText={(text) => this.setState({quantity: text})}
                                   value={this.state.quantity}
                                   placeholder={'0'}
                        />
                    </View>
                    <View style={style.fieldContainerMultiple}>
                        <Text style={style.addItemLabel}>Description</Text>
                        <TextInput style={style.addItemInputMultiple}
                                   multiline={true}
                                   onChangeText={(text) => this.setState({description: text})}
                                   value={this.state.description}
                                   placeholder={'Enter description here...'}
                        />

                    </View>
                    <View style={style.fieldContainerUpload}>
                        <Text style={style.addItemLabel}>Image</Text>
                        <TouchableHighlight onPress={() => this._pickImage()}>
                            <View style={style.uploadImage}>
                                {image === null ?
                                    <Image source={require('../images/default_image.png')} style={style.itemPic}/>
                                    : <Image source={{uri: image}} style={style.itemPic}/>}

                                <View style={style.browseLabel}>
                                    <Text style={{fontSize: 20}}>Browse...</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                    </View>

                    <View style={style.addButtonContainer}>
                        <TouchableHighlight style={style.addButton} onPress={() => this._handelAdd()}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20,}}>Add</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

}
