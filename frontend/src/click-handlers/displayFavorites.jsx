import { ACTIONS } from "hooks/useApplicationData";

/**
 * @param {dispatch} dispatch from useApplicationData
 *
 * @Effect dispatches SET_DISPLAY_FAVS with a payload of true.
 */
export const displayFavorites = (dispatch) => {
  dispatch({ type: ACTIONS.SET_DISPLAY_FAVS, payload: true });
};
