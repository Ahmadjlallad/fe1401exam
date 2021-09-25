import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Login";
import Logout from "./Logout";
import { withAuth0 } from "@auth0/auth0-react";
import "./Header.css";
export class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="myHeader">
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        {isAuthenticated ? <Logout /> : <LoginButton />}
      </div>
    );
  }
}

export default withAuth0(Header);
