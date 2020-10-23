import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Spin } from "antd";
import RecommendedVideos from "../RecommendedVideos";
import { Switch, Redirect, Link, Route } from "react-router-dom";
import ErrorHandle from "../ErrorHandler";
import Search from "../Search";

function App(props) {
  return (
    //BEM naming convention: class name in lowercase
    <div className="app">
      <Spin spinning={props.isLoading > 0}>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/" exact component={RecommendedVideos} />
            <Route path="/search/:searchId" exact component={Search} />
          </Switch>
        </div>
      </Spin>
      <ErrorHandle />
    </div>
  );
}

const mapStateToProps = ({ AppReducer }) => {
  return {
    isLoading: AppReducer.isLoading,
  };
};

export default connect(mapStateToProps)(App);
