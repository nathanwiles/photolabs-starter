/**
 * @params {none}
 *
 * @description makes a fetch request to the backend server for all photos.
 *
 * @returns promise which returns data for all photos
 */

export const getAllPhotos = () => {
  return fetch("/api/photos")
    .then((response) => response.json())
    .catch((err) => console.log("error fetching photos", err));
};
