/**
 * @params {none}
 *
 * @description makes a fetch request to the backend server for all topics.
 *
 * @returns promise which returns data for all topics
 */

export const getAllTopics = () => {
  return fetch("/api/topics")
    .then((response) => response.json())
    .catch((err) => console.log("error fetching topics", err));
};
