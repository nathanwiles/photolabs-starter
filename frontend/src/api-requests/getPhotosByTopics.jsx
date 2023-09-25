export const getPhotosByTopics = (id) => {
  return fetch(`/api/topics/photos/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log("error loading images by topic:", err));
};
