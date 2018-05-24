
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC8Lxoh4SCxxb8MCdie0WRmYOvlORYM6g4",
    authDomain: "shoppingcart-a67b4.firebaseapp.com",
    databaseURL: "https://shoppingcart-a67b4.firebaseio.com",
    projectId: "shoppingcart-a67b4",
    storageBucket: "shoppingcart-a67b4.appspot.com",
    messagingSenderId: "93141639362"
};

let fireBase = firebase.initializeApp(config);

console.log('firebase.js line 15: firebase = ' + fireBase);

export default fireBase;
