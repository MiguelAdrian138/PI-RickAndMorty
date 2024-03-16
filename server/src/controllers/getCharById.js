// const axios = require("axios");

// const getCharById = async (req, res) => {
  
//   const {id} = req.params;
//   const URL = ` https://rickandmortyapi.com/api/character/${id}`;
//   axios
//     .get(URL)
//     .then(response => {
//       const { name, gender, species, origin, image, status } = response.data;
//       if (res.status(200) && response.data) {
//         const character = {
//           id,
//           name,
//           gender,
//           species,
//           origin,
//           image,
//           status,
//         };
//         return res.status(200).json(character);
//       };
//       if (res.status(400)) {
//                 return res.status(400).json({message :'Not found'});
//       };
      
//     }).catch(err => {
//       console.log(err)
//       return res.status(500).json({
//         message: 'Error'
//       });

//     })
// };

// // const axios = require("axios");

// // const getCharById = (res, req) => {
// //   const id = parseInt(req.url.split("/").pop())
// //   const URL = `https://rickandmortyapi.com/api/character/${id}`;

// //   axios
// //     .get(URL)
// //     .then(response => {
// //       let { name, gender, species, origin, image, status } = response.data;
// //       const character = {
// //         id,
// //         name,
// //         gender,
// //         species,
// //         origin,
// //         image,
// //         status,
// //       };
// //       res.writeHead(200, { "Content-Type": "application/json" });
// //       return res.end(JSON.stringify(character));
// //     })
// //     .catch(err => {
// //       res.writeHead(500, { "Content-Type": "text/plain" });
// //       return res.end(err.message);
// //     });
// // };

// // module.exports =
// //   getCharById
// // ;

// // const axios = require("axios");

// // const getCharById = (req, res) => {
// //   const id = parseInt(req.url.split("/").pop());
// //   const URL = ` https://rickandmortyapi.com/api/character/${id}`;

// //   axios
// //     .get(URL)
// //     .then(response => {
// //       const { name, gender, species, origin, image, status } = response.data;
// //       let char = {
// //         id,
// //         name,
// //         gender,
// //         species,
// //         origin: origin.name,
// //         image,
// //         status,
// //       };
// //       res.writeHead(200, { "Content-Type": "application/json" });
// //       return res.end(JSON.stringify(char));
// //     })
// //     .catch(err => {
// //       // console.log(err.message);
// //       res.writeHead(500, { "Content-Type": "text/plain" });
// //       return res.end(err.message);
// //     });
// // };

// module.exports = getCharById;


const axios = require("axios");
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
        console.log(id)

    const URL = `https://rickandmortyapi.com/api/character/${id}`;
    const { data } = await axios(URL);
    console.log(data)
    if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);
    const { name, gender, species, origin, image, status } = data;
    const character = {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };
        console.log('este es back',character);

    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send("Character not found")
      : res.status(500).send(error?.response?.data?.error);
  }
}

module.exports = getCharById;
