import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Routes";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

import "./index.css";
import Header from "./pages/header";
import Footer from "./pages/footer";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header/>
      <Router />
      <Footer/>
    </Provider>
  </BrowserRouter>
);
