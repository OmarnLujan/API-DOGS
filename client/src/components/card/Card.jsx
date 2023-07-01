import React from "react";
import { Link } from "react-router-dom";
import styles from "../card/Card.module.css";

const Card = ({ dog }) => {
  return (
    <div>
      <Link to={`/detail/${dog.id}`}>
        <button className={styles.boton3}></button>
      </Link>
      <div>
        <img src={dog.image} alt={dog.name} width="100" height="100" />
        <h2>{dog.name}</h2>
      </div>
    </div>
  );
};
export default Card;
/*   Sector en el que se vea un listado de cards con los perros. Al iniciar deberá cargar los primeros resultados 
    obtenidos desde la ruta GET /dogs y deberá mostrar su:
    Imagen. Nombre.Temperamentos. Peso. */
