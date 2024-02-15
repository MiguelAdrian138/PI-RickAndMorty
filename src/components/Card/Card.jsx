import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import './Card.css'

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);

      dispatch(
        removeFav({
          id
        })
      );
      console.log(isFav);
    } else {
      setIsFav(true);

      dispatch(addFav({ id, name, status, species, gender, origin, image }));

      console.log(isFav);
    }
  };

  useEffect(() => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === id) {
        setIsFav(true);
      }
      console.log(favorites);
    }
  }, [favorites, id]);

  return (
    // <div>
    //   <button onClick={() => onClose(id)}>X</button>
    //   <Link to={`/detail/${id}`}>
    //     <h2>{name}</h2>
    //   </Link>
    //   <h2>{status}</h2>
    //   <h2>{species}</h2>
    //   <h2>{gender}</h2>
    //   <h2>{origin.name}</h2>
    //   <img src={image} alt="Rick" />
    //   <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
    // </div>
    <div className="book">
      <button  onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <button className="btnCerrar" onClick={() => onClose(id)}>Cerrar</button>
      <div className="cover">
        <img src={image} alt="Rick" />
      </div>
    </div>
  );
}
