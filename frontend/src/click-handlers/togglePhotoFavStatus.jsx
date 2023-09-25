import { ACTIONS } from "hooks/useApplicationData";
import { deleteFavoriteById, addFavoriteById } from "api-requests";
/**
 * @param {object} photoData photo to add or remove from favs
 * @param {function} dispatch from useApplicationData
 * @effect dispatches TOGGLE_FAV_BY_ID with a payload of photoData.
 */
export const togglePhotoFavStatus = (photoData, isFav, dispatch) => {
  if (isFav) {
    deleteFavoriteById(photoData.id);
  }
  if (isFav === false) {
    addFavoriteById(photoData.id);
  }
  dispatch({ type: ACTIONS.TOGGLE_FAV_BY_ID, payload: photoData });
};