import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Auth0Provider
      domain="dev-j3i4pkt7sb42hnak.us.auth0.com"
      clientId="iwXHXUalsZjOWyhvDJz6iWRgEDYbe6Zx"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/products`
      }}
    >
      <App />
    </Auth0Provider>,
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
