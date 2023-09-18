import "./App.scss";
import "styles/HomeRoute.scss";
import { React, useState, createContext } from "react";

import GlobalState from "GlobalState";
import photos from "./mocks/photos";
import topics from "mocks/topics";

// Components
import HomeRoute from "routes/HomeRoute";


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <GlobalState>
      <div className="App">
        <HomeRoute topicDataList={topics} photoDataList={photos} />
      </div>
    </GlobalState>
  );
};

export default App;
