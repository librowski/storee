import * as firebase from "firebase";
import { firebaseConfig } from "../config/keys";

firebase.initializeApp(firebaseConfig);
export const FSCharacters = firebase.firestore().collection("Characters");
