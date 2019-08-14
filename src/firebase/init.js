import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDl9ip7zRtb2XYR89ER2Z_Cm4M9ziFE6Hg",
    authDomain: "ninja-chat-vue-eab12.firebaseapp.com",
    databaseURL: "https://ninja-chat-vue-eab12.firebaseio.com",
    projectId: "ninja-chat-vue-eab12",
    storageBucket: "ninja-chat-vue-eab12.appspot.com",
    messagingSenderId: "1076516038630",
    appId: "1:1076516038630:web:00c28e5fcff072cd"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()