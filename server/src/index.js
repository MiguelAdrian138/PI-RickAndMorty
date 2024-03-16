const express = require('express');
const server = express();
const router = require('./routes/index.js');
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty",router);


server.listen(PORT, () => {
  console.log(`El servidor se levanta en el puerto ${PORT}`)
});








// // const http = require("http");
// // const characters = require("./utils/data");
// // const PORT = 3001;

// // http
// //   .createServer((req, res) => {
// //     res.setHeader("Access-Control-Allow-Origin", "*");

// //     if (req.url.includes("/rickandmorty/character")) {
// //       const id = parseInt(req.url.split("/").pop());
// //       const character = characters.find(char => char.id === id);
// //       res.end(JSON.stringify(character));
// //     }
// //   })
// //   .listen(PORT, () => {
// //     console.log(`Server running at http://localhost:${PORT}/`);
// //   });

// const http = require("http");
// const port = 3001;
// const getCharById = require('./controllers/getCharById')

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); //CORS


//   if (req.url.includes("/rickandmorty/character")) {
//     return getCharById(req, res)
//   }
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   return res.end("Hola te he escuchado!!!");
// });

// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}/`);
// });

