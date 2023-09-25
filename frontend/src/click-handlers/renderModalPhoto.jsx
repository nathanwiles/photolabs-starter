import { ACTIONS } from "hooks/useApplicationData";

/**
 * @param {id} id of photo to display
 * @param {state} modalDisplay to check if modal needs to be opened.
 * @param {dispatch} dispatch from useApplicationData
 *
 * @Effect dispatches SET_MODAL_PHOTO with payload of photoId
 * @Effect dispatches OPEN_MODAL if modalDisplay is false.
 */
export const renderModalPhoto = (id, modalDisplay, dispatch) => {
  dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: id });
  if (!modalDisplay) {
    dispatch({ type: ACTIONS.OPEN_MODAL });
  }
};