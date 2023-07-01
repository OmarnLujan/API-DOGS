import styles from "./Landing.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { getDogs, getTemperaments } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";

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
      <h2> landing page</h2>
      <button onClick={handlerSubmit}>ingresar</button>
    </div>
  );
}

export default Landing;
