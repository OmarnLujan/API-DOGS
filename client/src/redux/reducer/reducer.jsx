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
} from "../actions/types.jsx";

const initialState = {
  dogs: [],
  dogsCopy: [],
  details: [],
  temperaments: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_DOG_BY_DB:
      if (payload === "ALL")
        return {
          ...state,
          dogsCopy: state.dogs,
        };
      const allDogsCopy = state.dogs;

      if (payload === "API") {
        let filteredDogs = allDogsCopy.filter((dog) => dog.intheDB === false);
        return {
          ...state,
          dogsCopy: filteredDogs,
        };
      }
      if (payload === "DATABASE") {
        let filteredDogs = allDogsCopy.filter((dog) => dog.intheDB === true);
        return {
          ...state,
          dogsCopy: filteredDogs,
        };
      }
    case FILTER_TEMPERAMENT:
      if (payload === "ALL")
        return {
          ...state,
          dogsCopy: state.dogs,
        };
      const allDogsCopy2 = [...state.dogs];
      console.log(allDogsCopy2);
      let filteredDogs2 = allDogsCopy2.filter((dog) =>
        dog.temperament?.includes(payload)
      );
      return {
        ...state,
        dogsCopy: filteredDogs2,
      };

    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
        dogsCopy: payload,
      };

    case GET_DOG_BY_ID:
      return {
        ...state,
        details: payload,
      };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogsCopy: payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case ORDER_DOG_BY_NAME:
      let orderedDog = [...state.dogs];
      if (payload === "A") {
        orderedDog = state.dogs.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else if (payload === "D") {
        orderedDog = state.dogs.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
        });
      }
      return {
        ...state,
        dogs: orderedDog,
      };
    case ORDER_DOG_BY_WEIGHT:
      let orderedDogWeight = [...state.dogs];
      if (payload === "A") {
        orderedDogWeight = state.dogs.sort((a, b) => {
          if (a.weightMin > b.weightMin) {
            return 1;
          }
          if (b.weightMin > a.weightMin) {
            return -1;
          }
          return 0;
        });
      } else if (payload === "D") {
        orderedDogWeight = state.dogs.sort((a, b) => {
          if (a.weightMin > b.weightMin) {
            return -1;
          }
          if (b.weightMin > a.weightMin) {
            return 1;
          }
        });
      }
      return {
        ...state,
        dogs: orderedDogWeight,
      };
    case REMOVE_DOG:
      return {
        ...state,
        prueba: payload,
      };
    case POST_DOG:
      return {
        ...state,
        prueba: payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
