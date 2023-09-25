import React from "react";
import "./App.scss";
import "styles/HomeRoute.scss";
import useApplicationData from "hooks/useApplicationData";


// Components
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { dispatch, state } = useApplicationData();
  //console.log("photos:", state.photos);


  const { modalDisplay } = state;

  return (
    <div className="App">
      <HomeRoute dispatch={dispatch} state={state} />
      {modalDisplay && <PhotoDetailsModal dispatch={dispatch} state={state} />}
    </div>
  );
};

export default App;
