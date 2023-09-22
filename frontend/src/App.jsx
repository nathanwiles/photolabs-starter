import "./App.scss";
import "styles/HomeRoute.scss";
import { React } from "react";

import useApplicationData from "hooks/useApplicationData";

// Components
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { toggleFavs, openModal, closeModal, state: {modalDisplay, ...state}, data } =
    useApplicationData();
  return (
  
    <div className="App">
      <HomeRoute
        {...data}
        stateHooks={{ openModal, closeModal, toggleFavs }}
        state={state}
      />
      {modalDisplay && (
        <PhotoDetailsModal
          stateHooks={{openModal, toggleFavs, closeModal}}
          state={state}
        />
      )}
    </div>

  );
};

export default App;
