import React, { useState } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./Validation";
import { NavLink } from "react-router-dom";
import { getDogs, postDog } from "../../redux/actions/actions";

function Form(props) {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  /*   
    ! FORM PAGE |: en esta vista se encontrará el formulario para crear una nueva raza de perro.
    Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML,
     ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:
    
    Nombre.Altura (diferenciar entre altura mínima y máxima de la raza).
    Peso (diferenciar entre peso mínimo y máximo de la raza).
    Años de vida.
    Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
    Botón para crear la nueva raza.
    [IMPORANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript.
     Puedes agregar las validaciones que consideres. Por ejemplo: que el nombre de la raza no pueda contener números,
      o que el peso/altura mínimo no pueda ser mayor al máximo. */
  const [dogData, setDogData] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    image: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    image: "",
  });

  const handleChange = (e) => {
    setDogData({
      ...dogData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...dogData,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSelectChange = (e, index) => {
    if (!selectedTemperaments.includes(e.target.value)) {
      selectedTemperaments[index] = e.target.value;
      console.log(selectedTemperaments);
    }
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    setDogData((prevDogData) => ({
      ...prevDogData,
      temperament: selectedTemperaments,
    }));
    dispatch(postDog(dogData))
    dispatch(getDogs(dogData))
    console.log(dogData);
    
  };
  //funcion para agregar mas select de temperamentos
  const handleAddSelect = () => {
    setSelectedTemperaments([...selectedTemperaments, ""]);
    console.log(selectedTemperaments);
  };

  return (
    <div>
      <div>
        <NavLink to="/home">
          <button className={styles.button}>Home</button>
        </NavLink>
      </div>
      <form onSubmit={handlerSubmit} className={styles.login}>
        <div className={styles.fondoLogin}>
          <input
            className={styles.inputBox}
            placeholder="name.."
            name="name"
            value={dogData.name}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name ? errors.name : null}</p>

          <input
            className={styles.inputBox2}
            placeholder="Min"
            name="heightMin"
            value={dogData.heightMin}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.heightMin ? errors.heightMin : null}
          </p>
          <input
            className={styles.inputBox2}
            placeholder="Max"
            name="heightMax"
            value={dogData.heightMax}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.heightMax ? errors.heightMax : null}
          </p>
          <input
            className={styles.inputBox2}
            placeholder="Min"
            name="weightMin"
            value={dogData.weightMin}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.weightMin ? errors.weightMin : null}
          </p>
          <input
            className={styles.inputBox2}
            placeholder="Max"
            name="weightMax"
            value={dogData.weightMax}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.weightMax ? errors.weightMax : null}
          </p>
          <input
            className={styles.inputBox2}
            placeholder="life_span"
            name="life_span"
            value={dogData.life_span}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.life_span ? errors.life_span : null}
          </p>
          <input
            className={styles.inputBox2}
            placeholder="link image"
            name="image"
            value={dogData.image}
            type="text"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.image ? errors.image : null}</p>

          <div>
            {selectedTemperaments.map((selected, index) => (
              <select
                key={index}
                name={`filterTemperament-${index}`}
                value={selected}
                onChange={(e) => handleSelectChange(e, index)}
              >
                {allTemperaments.sort().map((temperament) => (
                  <option key={temperament} value={temperament}>
                    {temperament}
                  </option>
                ))}
              </select>
            ))}
            <button onClick={handleAddSelect}>Agregar Select</button>
          </div>
          <button
            className={styles.signin}
            type="submit"
            disabled={
              errors.name ||
              errors.heightMin ||
              errors.heightMax ||
              errors.weightMin ||
              errors.weightMax ||
              errors.life_span ||
              errors.image ||
              errors.temperament
            }
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

{
  /* <select name="filterTemperament" onChange={handleChange}>
            {allTemperaments.sort().map((temperament) => (
              <option key={temperament} value={temperament}>
                {temperament}
              </option>
            ))}
          </select> */
}
