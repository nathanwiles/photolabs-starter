import { React, useReducer, useEffect } from "react";

export const ACTIONS = {
  SET_MODAL_PHOTO: "SET_MODAL_PHOTO",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAV_BY_ID: "TOGGLE_FAV_BY_ID",
  SET_PHOTOS_DATA: "SET_PHOTOS_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
};

const reducer = (state, { type, payload }) => {
  const reducerObj = {
    SET_MODAL_PHOTO: () => {
      const { photos } = state;
      const modalPhoto = photos.filter((data) => `${data.id}` === payload)[0];
      

      return {
        ...state,
        modalPhoto,
      };
    },
    OPEN_MODAL: () => {
      return {
        ...state,
        modalDisplay: true,
      };
    },
    CLOSE_MODAL: () => {
      return {
        ...state,
        modalDisplay: false,
        modalPhoto: {},
      };
    },
    TOGGLE_FAV_BY_ID: () => {
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
    },
    SET_PHOTOS_DATA: () => {
      return {
        ...state,
        photos: payload,
      };
    },
    SET_TOPICS_DATA: () => {
      return {
        ...state,
        topics: payload,
      };
    },

    default: () => {
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
    },
  };

  if (Object.keys(reducerObj).includes(type)) {
    return reducerObj[type]();
  }
  return reducerObj.default();
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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
      })
      .catch((err) => console.log("error fetching photos", err));

    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: data })
      )
      .catch((err) => console.log("error fetching photos", err));
  }, []);

  return { dispatch, state };
};

export default useApplicationData;
