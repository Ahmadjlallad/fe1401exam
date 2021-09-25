import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <Auth0Provider
    domain="dev10x.eu.auth0.com"
    clientId="7RXhsAnTPgGcgvt6XYLnJ6txZW1ZgS3f"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
