import React from "react";
import { Link } from "react-router-dom";
import styles from "../card/Card.module.css";

const Card = ({ dog }) => {
  return (
    <div  key={dog.id} className={styles.card}>
       <Link to={`/detail/${dog.id}`}>
       
      
      <div className={styles.imgbox}>
        <img
          className={styles.img}
          src={dog.image}
          alt={dog.name}
          width="200px"
          height="200px"
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{dog.name}</h2>
      </div>
      </Link>
    </div>
  );
};
export default Card;
/*   Sector en el que se vea un listado de cards con los perros. Al iniciar deberá cargar los primeros resultados 
    obtenidos desde la ruta GET /dogs y deberá mostrar su:
    Imagen. Nombre.Temperamentos. Peso. */
{
  /*     </div>
    <div>
      <Link to={`/detail/${dog.id}`}>
        <button className={styles.boton3}></button>
      </Link>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={dog.image}
          alt={dog.name}
          width="200px"
          height="200px"
        />
        <div className={styles.nameBar}>
          <h2 className={styles.name}>{dog.name}</h2>
        </div>
      </div>
    </div> */
}
