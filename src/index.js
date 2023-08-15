import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <ToastContainer />
    <Router basename="/HabitTracker">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    
  </React.StrictMode>
);
