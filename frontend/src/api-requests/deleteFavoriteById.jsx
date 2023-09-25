export const deleteFavoriteById = (id) => {
  return fetch(`/api/favs/delete/${id}`, {
    method: "DELETE",
  })
    
    .catch((err) => console.log("error:", err));
};