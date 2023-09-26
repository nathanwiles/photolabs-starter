import { ACTIONS } from "hooks/useApplicationData";
import { deleteFavoriteById, addFavoriteById } from "api-requests";
/**
 * @param {object} photoData photo to add or remove from favs
 * @param {boolean} isFav true if photo is already a fav, false if not
 * @param {function} dispatch from useApplicationData
 * @effect dispatches TOGGLE_FAV_BY_ID with a payload of photoData.
 */
export const toggleDBPhotoFavStatus = (photoData, isFav, dispatch) => {
  const { id } = photoData;
  if (isFav) {
    deleteFavoriteById(id);
  }
  if (isFav === false) {

    addFavoriteById(id);
  }
  dispatch({ type: ACTIONS.TOGGLE_FAV_BY_ID, payload: photoData });
};