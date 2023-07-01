import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDogsById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

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
      <img src={detail.image} alt={detail.name} width="100" height="100" />
      <p>{detail.id}</p>
      <p>{detail.name}</p>
      <p>{detail.life_span}</p>
      <p>{detail.heightMin}-{detail.heightMax}</p>
      <p>{detail.weightMin}-{detail.weightMax}</p>
      <p>{temperamento}</p>

    </div>
  );
};

export default Detail;

/*   DETAIL PAGE | en esta vista se deberá mostrar toda la información específica de un perro:
ID. Imagen. Nombre. Altura. Peso. Temperamentos .Años de vida. */
