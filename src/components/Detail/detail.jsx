import axios from 'axios'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
      axios(
        `https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`
      ).then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
      return setCharacter({});
    }, [id]);


        return character.name ? (
        <div >
          <div >
            <div >
              <img
                
                src={character.image}
                alt={`Imagen de ${character.name}`}
              />
            </div>

            <div >
              <h1>#{character.id}</h1>
            </div>
          </div>
          <div >
            <h2 >{character.name}</h2>
            <p >
              {character.species} - {character.status}
            </p>
            <p >{character.gender}</p>
            <p >{character.origin.name}</p>
          </div>
        </div>
        ) : (<h1>Cargando...</h1>)
}