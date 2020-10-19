import React from "react";
import "./App.css";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import RecommendedVideos from "./containers/RecommendedVideos";

function App() {
  return (
    //BEM naming convention: class name in lowercase
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
