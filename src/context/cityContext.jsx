import { useReducer, useContext, useEffect, createContext } from "react";
import axios from "axios";

// Define initial state
const initialState = {
  loading: false,
  data: [],
  error: null,
  filteredCity: [],
};

// Action types
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
const FILTER_CITY = "FILTER_CITY";
const ADD_CITY = "ADD_CITY";
const VIEW_CITY = "VIEW_CITY";
const REMOVE_CITY = "REMOVE_CITY";

// Reducer function
const cityReducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        // data: [action.payload],
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case FILTER_CITY:
      const { filterParams } = action.payload;
      return {
        ...state,
        filteredCity: [
          ...state.data.filter((city) => city[filterParams] === filterParams),
        ],
      };
    case ADD_CITY:
      const { city } = action.payload;
      return {
        ...state,
        data: [...state.data, city],
      };
    case REMOVE_CITY:
      //   const { cityId } = action.payload;
      console.log("cityId:", action.payload);
      return {
        ...state,
        data: state.data.filter((data) => data.id !== action.payload),
      };
    default:
      return state;
  }
};

// Create the city context
export const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
  const [cityState, dispatch] = useReducer(cityReducer, initialState);
  console.log("cityState:", cityState);

  const fetchDataRequest = () => dispatch({ type: FETCH_DATA_REQUEST });
  const fetchDataSuccess = (data) =>
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: data,
    });
  const fetchDataFailure = (error) =>
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: error,
    });

  const filterCity = (filterParams) =>
    dispatch({ type: FILTER_CITY, payload: filterParams });

  // Async action creator to fetch data
  const fetchCities = async () => {
    try {
      const response = await axios.get("./cities.json");
      fetchDataRequest();
      fetchDataSuccess(JSON.stringify(response));
    } catch (error) {
      fetchDataFailure(error.message);
    }
    // };
  };

  // Add city action creator (async)
  const addCity = (city) => {
    try {
      console.log("addcity function called:", city);
      dispatch({ type: ADD_CITY, payload: city });
      console.log("finished dispatching..........", cityState);
      // const response = await axios.post('../../public/cities.js', city);
      // dispatch({ type: ADD_CITY, payload: response.data });
    } catch (error) {
      console.error("Error adding city:", error);
    }
  };

  // Remove city action creator (async)
  const removeCity = (cityId) => {
    try {
      // await axios.delete(`https://api.example.com/cities/${cityId}`);
      dispatch({ type: REMOVE_CITY, payload: cityId });
    } catch (error) {
      console.error("Error removing city:", error);
    }
  };
  return (
    <CityContext.Provider
      value={{
        fetchCities,
        addCity,
        removeCity,
        filterCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
