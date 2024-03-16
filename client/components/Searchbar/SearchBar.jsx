import { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ onSearch, random }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }

  const handleSearch = () => {
    setId("");
  }

  return (
    <div className="btnBox">
      <div className="buscarBox">
        <div class="form__group">
          <input
            type="search"
            value={id}
            onChange={handleChange}
            class="form__field"
          />
          <label for="name" class="form__label">
            Buscar..
          </label>
        </div>
        {/* <input type="search" value={id} onChange={handleChange} /> */}
      </div>
      <div className='btnSearch'>
        <button
          className="btn"
          onClick={() => {
            onSearch(id), handleSearch();
          }}>
          Agregar
        </button>
        <button className="btn" onClick={() => random()}>
          Random
        </button>
      </div>
    </div>
  );
}
