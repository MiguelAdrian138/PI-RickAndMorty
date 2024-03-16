import axios from 'axios';

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFav =  (character) => {
  //   return {
  //   type: ADD_FAV,
  //       payload: character
  // }
  // try {
  //   const endpoint = axios("http://localhost:3001/rickandmorty/fav");
  // return dispatch => {
  //   axios.post(endpoint, character).then(({ data }) => {
  //     return dispatch({
  //       type: ADD_FAV,
  //       payload: data,
  //     });
  //   });
  // };
  // } catch (err) {
  //   console.error(err)
  // }
  // try {
  //   const endpoint = axios("http://localhost:3001/rickandmorty/fav");
  //   const { data } = await axios.post(endpoint, character);

  //   return {
  //     type: ADD_FAV,
  //     payload: data,
  //   };
  // } catch (err) {
  //   console.error(err);
  // }
   return async dispatch => {
     const endpoint = "http://localhost:3001/rickandmorty/fav";
     try {
       const { data } = await axios.post(endpoint, character);
       console.log(data);
       return dispatch(
         {
           type: ADD_FAV,
           payload: data,
         },
         console.log(data)
       );
     } catch (err) {
       console.log(err);
     }
   };
};

export const removeFav = (id) => {
  // return {
  //     type: REMOVE_FAV,
  //     payload: id
  // }
  // console.log(id)
    // const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    // return (dispatch) => {
    //   axios.delete(endpoint).then(({ data }) => {
    //                 console.log(data);

    //     return dispatch({
    //       type: REMOVE_FAV,
    //       payload: data,
    //     });
    //   });
  // };
  // const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  // return async dispatch => {
  //   try {
  //     const { data } = await axios.delete(endpoint);
  //     console.log(data);

  //     return dispatch({
  //       type: REMOVE_FAV,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
console.log(id)
  const endpoint = 'http://localhost:3001/rickandmorty/fav/'+id;

  return async dispatch => {
    try {
      const { data } = await axios.delete(endpoint);
      console.log(data)
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
 
  
};

export const filterCards = gender => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = order => {
  return {
    type: ORDER,
    payload: order,
  };
};
