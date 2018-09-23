import {Character, CharacterActionTypes} from "./types";
import {createAsyncAction} from "typesafe-actions";

export const charactersFetch = createAsyncAction(
    CharacterActionTypes.CHARACTER_FETCH_REQUEST,
    CharacterActionTypes.CHARACTER_FETCH_SUCCESS,
    CharacterActionTypes.CHARACTER_FETCH_FAILURE,
)<void, Character[], Error>();

export const charactersFetchRequest = charactersFetch.request();

export const charactersFetchSuccess = charactersFetch.success([{name: 'John', description: 'Sample character', connections: []}]);

export const charactersFetchFailure = charactersFetch.failure(Error('There was a problem while fetching Characters'));