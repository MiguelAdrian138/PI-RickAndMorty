import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions.js";

const initialState = {
  myFavorites: [],
  character: [],
  allCharacters: [],
};

export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAV:
      //   return {
      //     ...state,
      //     myFavorites: actions.payload
      // };
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
      };

    case REMOVE_FAV:
      //   let personajes2 = state.myFavorites.filter(
      //     character => character.id !== actions.payload.id
      //   );
      //   return {
      //     ...state,
      //     myFavorites: personajes2,
      // };
      return {
        ...state,
        myFavorites: actions.payload,
        allCharacters: actions.payload,
      };

    case FILTER:
      const filtroGer = state.allCharacters.filter(
        char => char.gender === payload
      );

      return {
        // ...state,
        // myFavorites :
        // actions.payload !== "todos"
        //   ? state.allCharacters.filter(char => char.gender === actions.payload)
        //   : state.allCharacters

        ...state,
        myFavorites: filtroGer,
      };

    // myFavorites: filteredCharacters,

    // case FILTER:
    //   let filteredCharacters = state.allCharacters.filter(
    //     character => character.gender === actions.payload.gender
    //   );
    //   return {
    //     ...state,
    //     myFavorites: filteredCharacters,
    //   };
    case ORDER:
      // let ordenarPer = state.myFavorites.sort((a, b) =>
      //   actions.payload === "A" ? a.id - b.id : b.id - a.id
      // );
      // return {
      //   ...state,
      //   myFavorites: ordenarPer,
      // };
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };
    

    default:
      return { ...state };
  }
};
