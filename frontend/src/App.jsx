import "./App.scss";
import "styles/HomeRoute.scss";
import React from "react";

import photos from "./mocks/photos";
import topics from "mocks/topics";
// Components
import HomeRoute from "routes/HomeRoute";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute topicDataList={topics} photoDataList={photos} />
    </div>
  );
};

export default App;
