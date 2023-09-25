export const getAllPhotos = () => {
  return fetch("/api/photos")
    .then((response) => response.json())
    .catch((err) => console.log("error fetching photos", err));
};
