import * as firebase from 'firebase';

export const init = () => {
    if (firebase.apps.length !== 0) return;
    const config = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: "locationtracker-281711.firebaseapp.com",
        databaseURL: "https://locationtracker-281711.firebaseio.com",
        projectId: "locationtracker-281711",
        storageBucket: "locationtracker-281711.appspot.com",
        messagingSenderId: "727349450304",
        appId: "1:727349450304:web:a9bf75e63dd6b4c55ab1a5"
    };

    firebase.initializeApp(config);
}

export const subscribeToLocationTracking = callback => {
    var ref = firebase.database().ref('ommetje');
    ref.on('value', callback);
}

export const deleteRoute = key => {
    firebase.database().ref(`ommetje/${key}`).set(null);
}