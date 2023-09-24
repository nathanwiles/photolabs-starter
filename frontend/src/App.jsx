import "./App.scss";
import "styles/HomeRoute.scss";
import { React, useEffect } from "react";
import useApplicationData from "hooks/useApplicationData";
import { ACTIONS } from "hooks/useApplicationData";

// Components
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { dispatch, state } = useApplicationData();


  const { modalDisplay } = state;

  return (
    <div className="App">
      <HomeRoute dispatch={dispatch} state={state} />
      {modalDisplay && <PhotoDetailsModal dispatch={dispatch} state={state} />}
    </div>
  );
};

export default App;
