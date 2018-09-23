import * as firebase from "firebase";
import {FirebaseConfig} from "../config/keys";
firebase.initializeApp(FirebaseConfig);
export const FSCharacters = firebase.firestore().collection('Characters');