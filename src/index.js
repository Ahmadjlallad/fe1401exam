import React from "react";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Auth0Provider
    domain="dev10x.eu.auth0.com"
    clientId="7RXhsAnTPgGcgvt6XYLnJ6txZW1ZgS3f"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
