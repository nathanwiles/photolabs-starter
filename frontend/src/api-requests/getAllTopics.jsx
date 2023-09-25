export const getAllTopics = () => {
  return fetch("/api/topics")
    .then((response) => response.json())
    .catch((err) => console.log("error fetching photos", err));
};
