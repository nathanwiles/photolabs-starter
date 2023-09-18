import { React, useState, createContext } from "react";

export const favContext = createContext();

const GlobalFavState = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const toggleFavs = (id) => {


    if (favs.findIndex((element) => element === id) === -1) {
      setFavs([...favs, id]);
      console.log(`added ${id} to Favs`, [...favs, id]);

    } else {

      const index = favs.findIndex((element) => element === id);
      const newFavs = favs;
      newFavs.splice(index, 1);


      console.log(`removed ${id} from favs`, newFavs);
      setFavs([...newFavs]);
    }
  };

  return (
    <favContext.Provider value={[favs, toggleFavs]}>{children}</favContext.Provider>
  );
};
export default GlobalFavState;