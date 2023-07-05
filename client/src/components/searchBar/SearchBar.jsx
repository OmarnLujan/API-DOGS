import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogsByName } from "../../redux/actions/actions";
import styles from "./SearchBar.module.css";


function SearchBar(props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnClick = () => {
    const searchDog = search.trim().toLowerCase();
    if (!searchDog) {
      alert('Dog not Found.');
    }
    dispatch(getDogsByName(searchDog));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value ==="") dispatch(getDogs)
  };

  return (
    <div className={styles.div2}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button className={styles.Button} onClick={handleOnClick}> Buscar</button>
    </div>
  );
}

export default SearchBar;
