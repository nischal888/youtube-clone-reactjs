import React from "react";
import "./App.css";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";
import RecommendedVideos from "./containers/RecommendedVideos";
import { Switch, Redirect, Link, Route } from "react-router-dom";
import Search from "./containers/Search";

function App() {
  return (
    //BEM naming convention: class name in lowercase
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={RecommendedVideos} />
          <Route path="/search/:searchId" exact component={Search} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
