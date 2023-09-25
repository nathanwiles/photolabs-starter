import { getAllPhotos } from "api-requests";
import { ACTIONS } from "hooks/useApplicationData";

/**
 * @param {function} dispatch from useApplicationData
 * @Effect calls getAllPhotos() and dispatches SET_PHOTOS_DATA with the returned data
 */

export const renderAllPhotos = (dispatch) => {
  getAllPhotos()
    .then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
    })
    .catch((err) => console.log("error loading all photos from source:", err));
};
