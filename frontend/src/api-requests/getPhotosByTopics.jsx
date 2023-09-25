/**
 * @params {topicId}
 *
 * @description makes a fetch request to the backend server for all photos that match the topicId.
 *
 * @returns promise which returns data for all matching photos.
 */


export const getPhotosByTopics = (id) => {
  return fetch(`/api/topics/photos/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log("error loading images by topic:", err));
};
