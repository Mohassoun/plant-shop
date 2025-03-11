import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client"
import { Provider } from "react-redux";
import store from "./store"; // Ensure correct import path
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
