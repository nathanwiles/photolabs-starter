import { ACTIONS } from "hooks/useApplicationData";
/**
 * @param {function} dispatch from useApplicationData
 * @effect Dispatches CLOSE_MODAL
 */
export const closeModal = (dispatch) => {
  dispatch({type: ACTIONS.CLOSE_MODAL});
};
