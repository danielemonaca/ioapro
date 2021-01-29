import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDJSUfZ0TqsUQpdYbhewC2G6N3qzZjoqAg",
    authDomain: "save-list-eefab.firebaseapp.com",
    databaseURL: "https://save-list-eefab.firebaseio.com",
    projectId: "save-list-eefab",
    storageBucket: "save-list-eefab.appspot.com",
    messagingSenderId: "761471295329",
    appId: "1:761471295329:web:9ca1bf986f82a099522f20",
    measurementId: "G-XVPZT7PSXL"
};


export default !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
