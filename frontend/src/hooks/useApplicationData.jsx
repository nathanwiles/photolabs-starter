import { React, useReducer, useEffect } from "react";
import { getAllPhotos, getAllTopics} from "api-requests/index";
/**
 * @description object containing the usable action types for dispatch.
 */
export const ACTIONS = {
  SET_MODAL_PHOTO: "SET_MODAL_PHOTO",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  TOGGLE_FAV_BY_ID: "TOGGLE_FAV_BY_ID",
  SET_PHOTOS_DATA: "SET_PHOTOS_DATA",
  SET_TOPICS_DATA: "SET_TOPICS_DATA",
};

const reducer = (state, { type, payload }) => {
  const reducerObj = {
    SET_MODAL_PHOTO: () => {
      const { photos } = state;
      const modalPhoto = photos.filter((data) => data.id === payload)[0];

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

/**
 * @description sets up the data for the application.
 * @side_effects makes api requests for photos and topics, loading them into state.
 * @returns {dispatch, state} returns the global state, as well as a dispatch function to execute changes to state.
 */
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
    getAllPhotos().then((data) => dispatch({type: ACTIONS.SET_PHOTOS_DATA, payload: data}));
    getAllTopics().then((data) => dispatch({type: ACTIONS.SET_TOPICS_DATA, payload: data}));
  }, []);

  return { dispatch, state };
};

export default useApplicationData;
