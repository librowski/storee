import { CharacterActionTypes, Characters } from "./types";
import { ActionType } from "typesafe-actions";
import { charactersFetch } from "./actions";

export type CharacterAction = ActionType<typeof charactersFetch>;

const initialState: Characters = {
  data: [],
  isPendingFetch: false,
  isPendingUpdate: false,
};

export const charactersReduce = (state = initialState, action: CharacterAction): Characters => {
  switch (action.type) {
    case CharacterActionTypes.CHARACTER_FETCH_REQUEST:
      return { ...state, isPendingFetch: true };

    case CharacterActionTypes.CHARACTER_FETCH_SUCCESS:
      return { ...state, isPendingFetch: false, data: action.payload };

    case CharacterActionTypes.CHARACTER_FETCH_FAILURE:
      return { ...state, isPendingFetch: false, error: action.payload };

    default:
      return state;
  }
};
