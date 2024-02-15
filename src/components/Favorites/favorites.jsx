import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { filterCards, orderCards } from "../../redux/actions.js";
import Cards from "../Cards/Cards.jsx";

export default function Favorites() {
  const favorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();
  let [aux, setAux] = useState(false);

  const handleOrder = event => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = event => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <Cards characters={favorites} />
      <section>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </section>
    </div>
  );
}
