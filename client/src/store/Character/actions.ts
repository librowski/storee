import { Character, CharacterActionTypes } from "./types";
import { createAsyncAction } from "typesafe-actions";
import { Dispatch } from "redux";
import { FSCharacters } from "../firestoreApi";
import * as firebase from "firebase";

type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
type QuerySnapshot = firebase.firestore.QuerySnapshot;

export const charactersFetch = createAsyncAction(
  CharacterActionTypes.CHARACTER_FETCH_REQUEST,
  CharacterActionTypes.CHARACTER_FETCH_SUCCESS,
  CharacterActionTypes.CHARACTER_FETCH_FAILURE,
)<void, Character[], Error>();

export const charactersFetchRequest = charactersFetch.request();

export const charactersFetchSuccess = charactersFetch.success;

export const charactersFetchFailure = charactersFetch.failure(Error("There was a problem while fetching Characters"));

export const getCharacters = (): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch): void => {
    dispatch(charactersFetchRequest);

    FSCharacters.get()
      .then((response: QuerySnapshot) => {
        const characters: Character[] = response.docs.map((character: QueryDocumentSnapshot): Character => ({
          name: character.data().name.toString(),
          description: character.data().description.toString(),
          imageURL: character.data().imageURL.toString(),
          connections: [],
        }));
        dispatch(charactersFetchSuccess(characters));
      })
      .catch((): void => {
        dispatch(charactersFetchFailure);
      });
  };
};
