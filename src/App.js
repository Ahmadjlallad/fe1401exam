import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import "./App.css";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default withAuth0(App);
