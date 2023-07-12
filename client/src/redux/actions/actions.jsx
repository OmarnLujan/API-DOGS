import {
  FILTER,
  FILTER_DOG_BY_DB,
  FILTER_TEMPERAMENT,
  GET_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_DOG_BY_NAME,
  ORDER_DOG_BY_WEIGHT,
  REMOVE_DOG,
  POST_DOG,
} from "./types";
import axios from "axios";

export function filterOrigin(origin) {
  return {
    type: FILTER_DOG_BY_DB,
    payload: origin,
  };
}
export function filterTemperament(temperament) {
  return {
    type: FILTER_TEMPERAMENT,
    payload: temperament,
  };
}
export function getDogs() {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/dogs/all");
      //console.log(json.data)
      return dispatch({
        type: GET_DOGS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function getDogsByName(name) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      //console.log(json.data)
      return dispatch({
        type: GET_DOG_BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      alert("Dog not Found.");

      //console.log(error.message);
    }
  };
}
export function getDogsById(id) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/dogs/${id}`);
      //console.log(json.data);
      return dispatch({
        type: GET_DOG_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function getTemperaments() {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/temperaments");
      //console.log(json.data)
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function orderDogByName(order) {
  return {
    type: ORDER_DOG_BY_NAME,
    payload: order,
  };
}
export function orderDogByWeight(order) {
  return {
    type: ORDER_DOG_BY_WEIGHT,
    payload: order,
  };
}
export function postDog(dog) {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/dogs", dog);
      window.alert(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
}
