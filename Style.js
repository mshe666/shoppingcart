import React from "react";
import {
    StyleSheet,
    Dimensions,
    PixelRatio,
    Platform,
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
    },
    scrollContainer: {
        alignContent: 'center',
        backgroundColor: '#e0ebeb',
    },
    item: {
        height: WINDOW_WIDTH * 0.3,
        width: WINDOW_WIDTH * 0.9,
        borderWidth: 1,
        borderColor: 'lightgrey',
        backgroundColor: '#c1d7d7',
        alignSelf: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        height: WINDOW_WIDTH * 0.05,
        width: WINDOW_WIDTH * 0.9,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'white',
    },
    editIcon: {
        height: WINDOW_WIDTH * 0.05,
        width: WINDOW_WIDTH * 0.05,
        marginHorizontal: 5,
    },
    deleteIcon: {
        height: WINDOW_WIDTH * 0.05,
        width: WINDOW_WIDTH * 0.05,
    },
    itemBody: {
        height: WINDOW_WIDTH * 0.25,
        width: WINDOW_WIDTH * 0.9,
        flexDirection: 'row',
        backgroundColor: '#a2c3c3',
    },
    itemPic: {
        height: WINDOW_WIDTH * 0.2,
        width: WINDOW_WIDTH * 0.2,
        margin: WINDOW_WIDTH * 0.02,
    },
    itemDes: {
        height: WINDOW_WIDTH * 0.2,
        width: WINDOW_WIDTH * 0.6,
        flexDirection: 'column',
        margin: WINDOW_WIDTH * 0.02,
        fontSize: 15,
    },
    itemHeader: {

        fontSize: 20,
    },
    itemQuantity: {

        fontSize: 20,
    },
    itemDescription: {
        fontSize: 18,
    },
    itemHeaderContainer: {
        height: WINDOW_WIDTH * 0.05,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addBtn: {
        height: WINDOW_WIDTH * 0.15,
        width: WINDOW_WIDTH * 0.15,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
    },
    // add item screen
    addItemContainer: {
        flex: 1,
        alignContent: 'center',
        paddingTop: 22,
        backgroundColor: '#e0ebeb',
    },
    fieldContainerSingle: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.15,
        alignSelf: 'center',
        marginVertical: 10,
    },
    fieldContainerMultiple: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    fieldContainerUpload: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.3,
        alignSelf: 'center',
        marginVertical: 10,
    },
    uploadImage: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'lightgrey',
        borderWidth: 1,

    },
    browseLabel: {
        height: WINDOW_WIDTH * 0.2,
        width: WINDOW_WIDTH * 0.2,
        margin: WINDOW_WIDTH * 0.02,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    addButtonContainer: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#466d6d',

    },
    addButton: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#466d6d',

    },
    addItemLabel: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.05,

        fontSize: 20,
        marginBottom: 3,
    },
    addItemInput: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.1,
        borderColor: 'lightgrey',
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        backgroundColor: 'white',
    },
    addItemInputMultiple: {
        width: WINDOW_WIDTH * 0.9,
        height: WINDOW_WIDTH * 0.45,
        borderColor: 'lightgrey',
        borderWidth: 1,
        fontSize: 18,
        padding: 10,
        backgroundColor: 'white',

    },
    browseImage: {
        height: WINDOW_WIDTH * 0.25,
        width: WINDOW_WIDTH * 0.9,
        flexDirection: 'row',
    }



});