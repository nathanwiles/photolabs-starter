export const getFavorites = () => {
  return fetch(`/api/favs`)
    .then((response) => response.json())
    .catch((err) => console.log("error:", err));
};
