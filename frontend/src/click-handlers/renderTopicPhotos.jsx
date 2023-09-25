import { getPhotosByTopics } from "api-requests";
import { ACTIONS } from "hooks/useApplicationData";

/**
 * @param {id} id topic id
 * @param {dispatch} dispatch from useApplicationData
 * @Effect calls getPhotosByTopic() and dispatches SET_PHOTOS_DATA with the returned data
 */

export const renderTopicPhotos = (id, dispatch) => {
  getPhotosByTopics(id)
    .then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
    })
    .catch((err) => console.log("error loading topic photos from source:", err));
};
