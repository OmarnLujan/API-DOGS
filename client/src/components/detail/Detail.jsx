import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDogsById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDogsById(id));
  }, [dispatch]);

  let temperamento;
  if (detail.intheDB) {
    temperamento = detail.temperament.join(", ");
  } else if (!detail.intheDB) temperamento = detail.temperament;

  return (
    <div>
      <div className={styles.divButton}>
        <NavLink to="/home">
          <button className={styles.Button}>Home</button>
        </NavLink>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img
            className={styles.cardImage}
            src={detail.image}
            alt={detail.name}
            width="500"
            height="400"
          />
        </div>
        <p className={styles.cardTitle}>{detail.name}</p>
        <p className={styles.cardBody}><strong>ID: </strong>{detail.id}</p>
        <p className={styles.cardBody}>
        <strong>Heigth:</strong> {detail.heightMin}-{detail.heightMax}
        </p>
        <p className={styles.cardBody}>
        <strong>Weight: </strong>{detail.weightMin}-{detail.weightMax}
        </p>
        <p className={styles.cardBody}><strong>Temperaments: </strong>{temperamento}</p>
        <p className={styles.cardBody}><strong>Life Span: </strong>{detail.life_span}</p>
      </div>
    </div>
  );
};
/* <div className={styles.divFondo}>
     
      <img src={detail.image} alt={detail.name} width="100" height="100" />
      <p>{detail.id}</p>
      <p>{detail.name}</p>
      <p>{detail.life_span}</p>
      <p>{detail.heightMin}-{detail.heightMax}</p>
      <p>{detail.weightMin}-{detail.weightMax}</p>
      <p>{temperamento}</p>
    
    </div> */
export default Detail;

/*   DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un perro:
ID. Imagen. Nombre. Altura. Peso. Temperamentos .Años de vida. */
