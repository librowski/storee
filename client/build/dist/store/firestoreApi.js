import * as firebase from "firebase";
import { firebaseConfig } from "../config/keys";
firebase.initializeApp(firebaseConfig);
export var FSCharacters = firebase.firestore().collection("Characters");
//# sourceMappingURL=firestoreApi.js.map