// let myFavorites = [];

// const postFav = (req, res) => {
//   myFavorites.push(req.body);
//   res.status(200).json(myFavorites);
// };

// const deleteFav =  (req, res) => {
//   const charId = req.params.id;
//   console.log('1',req);
//     console.log('2',req.params);
//   console.log('3',req.params.id);


//   const newFavorites = myFavorites.filter(char => char.id !== +charId);
//   myFavorites = newFavorites;
//   console.log(myFavorites)
//    return res.json(myFavorites);
  
// };

// module.exports = {
//     postFav,
//     deleteFav
// }

let myFavorites = [];
const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};
const deleteFav = (req, res) => {
  const charId = req.params.id;
  myFavorites = myFavorites.filter(character => character.id !== charId);
   console.log("3", req.params.id);
   console.log("4", myFavorites);

  res.status(200).json(myFavorites);
};
((x=5) => console.log(x))()
module.exports = {
  postFav,
  deleteFav,
};