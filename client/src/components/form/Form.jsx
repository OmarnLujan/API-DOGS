import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./Validation";
import { NavLink } from "react-router-dom";
import { getDogs, postDog } from "../../redux/actions/actions";

function Form() {
  const dispatch = useDispatch();

  const allTemperaments = useSelector((state) => state.temperaments);
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

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
    if (selectedTemperaments.includes(e.target.value)) {
      window.alert("Temperamento repetido ");
      return;
    }

    if (!selectedTemperaments.includes(e.target.value)) {
      const { value } = e.target;
      setSelectedTemperaments((prevTemperaments) => {
        const updatedTemperaments = [...prevTemperaments];
        updatedTemperaments[index] = value;
        console.log(updatedTemperaments);
        return updatedTemperaments;
      });
    }

    setDogData((prevDogData) => ({
      ...prevDogData,
      temperament: selectedTemperaments,
    }));
    console.log(selectedTemperaments);
  };

  useEffect(() => {
    // Actualizar dogData.temperament cuando selectedTemperaments cambie
    setDogData((prevDogData) => ({
      ...prevDogData,
      temperament: selectedTemperaments,
    }));
  }, [selectedTemperaments]);

  const handlerSubmit = async(event) => {
    event.preventDefault();
    dispatch(postDog(dogData));
    dispatch(getDogs(dogData));
  };

  //funcion para agregar mas select de temperamentos
  const handleAddSelect = () => {
    setSelectedTemperaments([...selectedTemperaments, ""]);
    //console.log(selectedTemperaments);
  };
  // !verificar validaciones del formulario ✅
  // !verificar que las card de la db muestren el temperamento ✅
  // !verificar avisar que los temperametos se repiten  ✅
  // *verificar añadir boton para eliminar select ✅

  const handleRemoveSelect = (index) => {
    setSelectedTemperaments((prevTemperaments) =>
      prevTemperaments.filter((_, i) => i !== index)
    );
    console.log(selectedTemperaments);
  };

  return (
    <div className={styles.divFondo}>
      <h2>Create Dog</h2>
      <div className={styles.divButton}>
        <NavLink to="/home">
          <button className={styles.Button}>Home</button>
        </NavLink>
      </div>
      <form onSubmit={handlerSubmit} className={styles.login}>
        <div className={styles.fondoDiv}>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="Name"
              name="name"
              value={dogData.name}
              type="text"
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.name ? errors.name : null}</p>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="Minimum Weight"
              name="heightMin"
              value={dogData.heightMin}
              type="text"
              onChange={handleChange}
            />

            <input
              className={styles.input}
              placeholder="Maximum Weight"
              name="heightMax"
              value={dogData.heightMax}
              type="text"
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>
              {errors.heightMin ? errors.heightMin : null}
            </p>
            <p style={{ color: "red" }}>
              {errors.heightMax ? errors.heightMax : null}
            </p>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="Minimum Weight"
              name="weightMin"
              value={dogData.weightMin}
              type="text"
              onChange={handleChange}
            />

            <input
              className={styles.input}
              placeholder="Maximum Weight"
              name="weightMax"
              value={dogData.weightMax}
              type="text"
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>
              {errors.weightMin ? errors.weightMin : null}
            </p>
            <p style={{ color: "red", display: "inline" }}>
              {errors.weightMax ? errors.weightMax : null}
            </p>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="Life Span"
              name="life_span"
              value={dogData.life_span}
              type="text"
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>
              {errors.life_span ? errors.life_span : null}
            </p>
          </div>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder="Link Image"
              name="image"
              value={dogData.image}
              type="text"
              onChange={handleChange}
            />
            <p style={{ color: "red" }}>{errors.image ? errors.image : null}</p>
          </div>
          <div>
            <p>
              <strong>Temperament:</strong>
            </p>
            {selectedTemperaments.map((selected, index) => (
              <div key={index} className={styles.selectContainer}>
                <select
                  className={styles.Select}
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
                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => handleRemoveSelect(index)}
                >
                  ❌
                </button>
              </div>
            ))}
            <button
              className={styles.Button2}
              type="button"
              disabled={selectedTemperaments.length > 9}
              onClick={handleAddSelect}
            >
              Add
            </button>
          </div>

          <button
            className={styles.Button}
            type="submit"
            disabled={
              errors.name ||
              errors.heightMin ||
              errors.heightMax ||
              errors.weightMin ||
              errors.weightMax ||
              errors.life_span ||
              errors.image ||
              errors.temperament ||
              !selectedTemperaments.length ||
              selectedTemperaments.includes("")
            }
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
