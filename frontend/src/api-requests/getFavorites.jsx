export const getFavorites = () => {
  return fetch(`/api/favs`)
    .then((response) => response.json())
    .then((data) => data.reverse())
    .catch((err) => console.log("error:", err));
};
