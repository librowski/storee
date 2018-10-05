import {Character, CharacterActionTypes} from "./types";
import {createAsyncAction} from "typesafe-actions";
import {Dispatch} from "redux";
import {FSCharacters} from "../firestoreApi";


export const charactersFetch = createAsyncAction(
    CharacterActionTypes.CHARACTER_FETCH_REQUEST,
    CharacterActionTypes.CHARACTER_FETCH_SUCCESS,
    CharacterActionTypes.CHARACTER_FETCH_FAILURE,
)<void, Character[], Error>();

export const charactersFetchRequest = charactersFetch.request();

export const charactersFetchSuccess = charactersFetch.success;

export const charactersFetchFailure = charactersFetch.failure(Error('There was a problem while fetching Characters'));


export const getCharacters = () => {
    return (dispatch: Dispatch) => {
        dispatch(charactersFetchRequest);

        FSCharacters.get()
            .then((response: any) => {
                const characters: Character[] = response.docs.map((character: any) => ({
                    name: character.data().name.toString(),
                    description: character.data().description.toString(),
                    connections: [],
                }));
                console.log(characters);
                dispatch(charactersFetchSuccess(characters));
            })
            .catch((error) => dispatch(charactersFetchFailure));
    };
};