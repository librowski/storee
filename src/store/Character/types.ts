import {Resource} from "../types";

export interface Character {
    name: string;
    description: string;
    connections: string[];
}

export type Characters = Resource<Character>;

export enum CharacterActionTypes {
    CHARACTER_FETCH_REQUEST = 'CHARACTER_FETCH_REQUEST',
    CHARACTER_FETCH_FAILURE = 'CHARACTER_FETCH_FAILURE',
    CHARACTER_FETCH_SUCCESS = 'CHARACTER_FETCH_SUCCESS',
}