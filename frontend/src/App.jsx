import "./App.scss";
import "styles/HomeRoute.scss";
import { React, useState, createContext } from "react";

import GlobalFavState from "GlobalFavState";
import photos from "./mocks/photos";
import topics from "mocks/topics";

// Components
import HomeRoute from "routes/HomeRoute";


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <GlobalFavState>
      <div className="App">
        <HomeRoute topicDataList={topics} photoDataList={photos} />
      </div>
    </GlobalFavState>
  );
};

export default App;
