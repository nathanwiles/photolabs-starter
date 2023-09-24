import { React, useReducer, useEffect } from "react";

export const ACTIONS = {
  SET_MODAL_IMAGE: "SET_MODAL_IMAGE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAV_BY_ID: "TOGGLE_FAV_BY_ID",
  SET_PHOTOS_DATA: "SET_PHOTOS_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
};

// prettier-ignore
const reducer = (state, { type, payload }) => {
  switch (type) {
  case "SET_MODAL_IMAGE":{
    const { photos } = state;
    const modalPhoto = photos.filter((data) => `${data.id}` === payload)[0];
    console.log(payload, modalPhoto);
    
    return {
      ...state,
      modalPhoto
    };
  }
  case "OPEN_MODAL": {
    return {
      ...state,
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
    console.log("payload:", payload);
    if (favs.findIndex((element) => element === payload) === -1) {
      console.log(payload);
      console.log([...favs, payload]);
      return {
        ...state,
        favs: [...favs, payload],
      };
    } else {
      const index = favs.findIndex((element) => element === payload);
      const newFavs = [...favs];
      newFavs.splice(index, 1);
      console.log(payload);
      console.log(newFavs);
      return {
        ...state,
        favs: [...newFavs],
      };
    }
  }
  case "SET_PHOTOS_DATA":{
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
    modalSimilarPhotos: [],
    favs: [],
    photos: [],
    topics: [],
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
      });

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
