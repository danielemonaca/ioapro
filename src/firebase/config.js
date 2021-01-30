import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQ-Tgiv8wVQa1zaA0S6cfN6i4zNY3U5Z0",
    authDomain: "resto-aperto-98ba2.firebaseapp.com",
    databaseURL: "https://resto-aperto-98ba2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resto-aperto-98ba2",
    storageBucket: "resto-aperto-98ba2.appspot.com",
    messagingSenderId: "420808397981",
    appId: "1:420808397981:web:e883d307fa66b087a77074",
    measurementId: "G-L436BVLD0G"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
