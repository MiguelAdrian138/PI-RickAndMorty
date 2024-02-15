import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Detail from "./components/Detail/detail.jsx";
import About from './components/About/about.jsx'
import Error from './components/Error/error.jsx'
import Formulario from "./components/Formulario/formulario.jsx";
import Favorites from './components/Favorites/favorites.jsx';
import { EMAIL, PASSWORD } from './components/Formulario/validaciones.js'




function App() {
  const [access, setAccess] = useState(false)
  const ubicacion = useLocation()
  const principal = ubicacion.pathname === '/';
  const [characters, setCharacters] = useState([]);
  const navegar = useNavigate();


  const onClose = id => {
    const filtarPersonaje = characters.filter((char) => char.id !== id);
    setCharacters(filtarPersonaje)
  };

   const Random =() => {
     const randomId = Math.floor(Math.random() * 671) + 1;
     if (!characters.some(char => char.id === randomId)) {
       axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
         ({ data }) => {
           if (data.name) {
             setCharacters(oldChars => [...oldChars, data]);
           } else {
             console.log("¡No hay personajes con este ID!");
           }
         }
       );
     } else {
       Random();
     }
   }
  
  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-{MiguelAdrian138
}`).then(({ data }) => {
      if (data.name) {
        if (!characters.some(perosnaje => perosnaje.id === data.id)) {
          setCharacters(personajes => [...personajes, data]);
        } else {
          window.alert("¡Este personaje ya está en la lista!");
        }
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  const login = (userData) =>{
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navegar("/home");
    } 
  }

  const cerrarSesion = () => {
    setAccess(false);
  }

  useEffect(() => {
    !access && navegar('/');
  },[access])



  return (
    <div className="App">
      {!principal && (
        <Nav onSearch={onSearch} random={Random} cerrarSesion={cerrarSesion} />
      )}

      <Routes>
        <Route path="/" element={<Formulario login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <footer>
        <p>Hecho con por Miguel Adrián</p>
      </footer>
    </div>
  );
}

export default App;