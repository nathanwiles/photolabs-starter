export const addFavoriteById = (id) => {
  return fetch(`/api/favs/add/${id}`, {
    method: "POST",
  })
    .catch((err) => console.log("error:", err));
};
