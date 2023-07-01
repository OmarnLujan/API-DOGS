import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../pagination/Pagination";
import {
  filterOrigin,
  filterTemperament,
  getDogs,
  orderDogByName,
  orderDogByWeight,
} from "../../redux/actions/actions";
import styles from "./Home.module.css";
import SearchBar from "../searchBar/searchBar";
import Card from "../card/Card";
import { NavLink } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsCopy);
  const allTemperaments = useSelector((state) => state.temperaments);
  //console.log(allTemperaments);
  //allTemperaments.sort();

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, serdogsPerPage] = useState(8);
  const [orden, setOrden] = useState("");

  const maximo = Math.ceil(allDogs.length / 8);

  const handleOrderName = (event) => {
    dispatch(orderDogByName(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleOrderWeight = (event) => {
    dispatch(orderDogByWeight(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleFilterOrigin = (event) => {
    dispatch(filterOrigin(event.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleFilterTemperament = (event) => {
    dispatch(filterTemperament(event.target.value));
    console.log(event.target.value);
    setCurrentPage(1);
    setOrden(`Ordenado ${event.target.value}`);
  };
  const handleHome = () => {
    dispatch(getDogs());
    setCurrentPage(1);
  };

  return (
    <div>
      <div className={styles.bar}>
        <div style={{ textAlign: "center" }}>
          <button className={styles.button} onClick={handleHome}>
            Home
          </button>
        </div>
        <div>
          <SearchBar />
        </div>

        <div>
          <select name="orderName" onChange={handleOrderName}>
            <option value={"A"}>A-Z</option>
            <option value={"D"}>Z-A</option>
          </select>
        </div>
        <div>
          <select name="orderWeight" onChange={handleOrderWeight}>
            <option value={"A"}>Menor</option>
            <option value={"D"}>Mayor</option>
          </select>
        </div>

        <div>
          <select name="filterOrigin" onChange={handleFilterOrigin}>
            <option value={"ALL"}>ALL</option>
            <option value={"API"}>API</option>
            <option value={"DATABASE"}>DATABASE</option>
          </select>
        </div>
        <div>
          <select name="filterTemperament" onChange={handleFilterTemperament}>
            <option value={"ALL"}>ALL</option>
            {allTemperaments.sort().map((temperament) => (
              <option key={temperament} value={temperament}>
                {temperament}
              </option>
            ))}
          </select>
        </div>
        <div>
          <NavLink to="/form">
            <button className={styles.button}>Create</button>
          </NavLink>
        </div>
      </div>
      <div className={styles.container}>
        {allDogs
          .slice(
            (currentPage - 1) * dogsPerPage,
            (currentPage - 1) * dogsPerPage + dogsPerPage
          )
          .map((dog, i) => (
            <div key={i}>
              <Card dog={dog} />
            </div>
          ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maximo={maximo}
        />
      </div>
    </div>
  );
}

export default Home;
