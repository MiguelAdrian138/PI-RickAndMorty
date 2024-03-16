import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './detail.css'



export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      );
      return setCharacter({});
    }, [id]);


        return character.name ? (
          <div>
            <div className="container">
              <div className="containerImg">
                <img
                  src={character.image}
                  alt={`Imagen de ${character.name}`}
                />
              </div>

              <div className="containerInfo">
                <div>
                  <h1>#{character.id}</h1>
                  <h2>{character.name}</h2>
                  <p>
                    {character.species} - {character.status}
                  </p>
                  <p>{character.gender}</p>
                  <p>{character.origin.name}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="banter-loader">
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
            <div class="banter-loader__box"></div>
          </div>
          // <h1>Cargando...</h1>
        );
}