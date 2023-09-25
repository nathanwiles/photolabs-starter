import { ACTIONS } from "hooks/useApplicationData";
/**
 * @param {*} photoData photo to add or remove from favs
 * @param {*} dispatch from useApplicationData
 * @effect dispatches TOGGLE_FAV_BY_ID with a payload of photoData.
 */
export const togglePhotoFavStatus = (photoData, dispatch) => {
  dispatch({ type: ACTIONS.TOGGLE_FAV_BY_ID, payload: photoData });
};