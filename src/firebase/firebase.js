import * as firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCqFBE5Xmc-lbazOkKrJSmbtZZJRQYipG8",
  authDomain: "codetrain-contacts-app.firebaseapp.com",
  projectId: "codetrain-contacts-app",
  storageBucket: "codetrain-contacts-app.appspot.com",
  messagingSenderId: "1029576063808",
  appId: "1:1029576063808:web:916031e68581d1c1f598a5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
