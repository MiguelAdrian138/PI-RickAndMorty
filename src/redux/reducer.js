import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions.js'


const initialState = {
  myFavorites: [],
  character: [],
  allCharacters: [],

};

export const reducer = (state = initialState, actions) => {
    switch (actions.type) {
      case ADD_FAV:
        return {
          ...state,
          myFavorites: [...state.myFavorites, actions.payload],
        };
      case REMOVE_FAV:
        let personajes2 = state.myFavorites.filter(
          character => character.id !== actions.payload.id
        );
        return {
          ...state,
          myFavorites: personajes2,
        };
      case FILTER:
        let personajes3 = state.allCharacters.filter(
          character => character.gender === actions.payload
        );
        return {
          ...state,
          myFavorites: personajes3,
        };
      case ORDER:
        let ordenarPer = state.myFavorites.sort((a, b) =>
          actions.payload === "A" ? a.id - b.id : b.id - a.id
        );
        return {
          ...state,
          myFavorites: ordenarPer,
        };
      default:
        return { ...state };
    }
 }