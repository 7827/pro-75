import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBZrEeU2GVbn8uH378kPf1XV3VaVO565bw",
  authDomain: "pro-71-877f3.firebaseapp.com",
  databaseURL: "https://pro-71-877f3-default-rtdb.firebaseio.com",
  projectId: "pro-71-877f3",
  storageBucket: "pro-71-877f3.appspot.com",
  messagingSenderId: "37432734953",
  appId: "1:37432734953:web:1f5cadda261bce9856ec78"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
