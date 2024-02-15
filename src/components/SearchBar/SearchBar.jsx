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
    <div>
      <div className='inputbox'>
        <input type="search" value={id} onChange={handleChange} />
        <button onClick={() => {onSearch(id),  handleSearch()}}>Agregar</button>
      </div>
      <div>
        <button onClick={() => random()}>Random</button>
      </div>
    </div>
  );
}
