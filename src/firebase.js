
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDVsKiM9hiA26BketrtI9zR9bzB8oqa7OA",
    databaseURL: "https://meepoong-af0cc-default-rtdb.firebaseio.com",
};
firebase.initializeApp(config);

console.log(firebase);
const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('tasks');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;