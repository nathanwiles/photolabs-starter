import { React, useReducer, useEffect } from "react";

export const ACTIONS = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAV_BY_ID: "TOGGLE_FAV_BY_ID",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
};

// prettier-ignore
const reducer = (state, { type, payload }) => {
  switch (type) {
  case "OPEN_MODAL": {
    const { photos } = state;
    const photoIndex = photos.findIndex((data) => data.id === payload);
    const modalPhoto = photos[photoIndex];
    return {
      ...state,
      modalPhoto,
      modalDisplay: true,
    };
  }
  case "CLOSE_MODAL":
    return {
      ...state,
      modalDisplay: false,
      modalPhoto: {},
    };
  case "TOGGLE_FAV_BY_ID": {
    const { favs } = state;
    if (favs.findIndex((element) => element === payload) === -1) {
      return {
        ...state,
        favs: [...favs, payload],
      };
    } else {
      const index = favs.findIndex((element) => element === payload);
      const newFavs = [...favs];
      newFavs.splice(index, 1);
      return {
        ...state,
        favs: [...newFavs],
      };
    }
  }
  case "SET_PHOTO_DATA":{
    
    return {
      ...state,
      photos: payload,
    };
  }
  case "SET_TOPICS_DATA":
    return {
      ...state,
      topics: payload,
    };

  default:
    throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    modalDisplay: false,
    modalPhoto: {},
    favs: [],
    photos: [],
    topics: [],
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: data })
      );
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return { dispatch, state };
};

export default useApplicationData;
