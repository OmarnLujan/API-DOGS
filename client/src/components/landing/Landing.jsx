import styles from "./Landing.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { getDogs, getTemperaments } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import image from "../../assets/perrocomiendo.gif";
import hueso from "../../assets/Hueso.png";
import image2 from "../../assets/perro2.png";
import image3 from "../../assets/perro3.png";

function Landing(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = (event) => {
    props.login();
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.containerButton}>
        <button className={styles.boneButton} onClick={handlerSubmit}>
          <img className={styles.image2} src={hueso} alt="100px"></img>
        </button>
      </div>
      <div style={{ position: "absolute", left: "0", bottom: "0" ,background: "transparent"}}>
        <img className={styles.image} src={image}></img>
      </div>
      <div style={{ position: "absolute", right: "0", bottom: "0" ,background: "transparent" }}>
        <img className={styles.image} src={image2}></img>
      </div>
      <div style={{ position: "absolute", right: "30%", bottom: "0" ,background: "transparent" }}>
        <img className={styles.image} src={image3}></img>
      </div>
    </div>
  );
}

export default Landing;
