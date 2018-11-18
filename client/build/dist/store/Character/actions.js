import { CharacterActionTypes } from "./types";
import { createAsyncAction } from "typesafe-actions";
import { FSCharacters } from "../firestoreApi";
export var charactersFetch = createAsyncAction(CharacterActionTypes.CHARACTER_FETCH_REQUEST, CharacterActionTypes.CHARACTER_FETCH_SUCCESS, CharacterActionTypes.CHARACTER_FETCH_FAILURE)();
export var charactersFetchRequest = charactersFetch.request();
export var charactersFetchSuccess = charactersFetch.success;
export var charactersFetchFailure = charactersFetch.failure(Error("There was a problem while fetching Characters"));
export var getCharacters = function () {
    return function (dispatch) {
        dispatch(charactersFetchRequest);
        FSCharacters.get()
            .then(function (response) {
            var characters = response.docs.map(function (character) { return ({
                name: character.data().name.toString(),
                description: character.data().description.toString(),
                imageURL: character.data().imageURL.toString(),
                connections: [],
            }); });
            dispatch(charactersFetchSuccess(characters));
        })
            .catch(function () {
            dispatch(charactersFetchFailure);
        });
    };
};
//# sourceMappingURL=actions.js.map