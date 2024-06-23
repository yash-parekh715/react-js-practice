import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className="flex justify-center align-center h-[100%] w-[100%]">
      <div className="h-full">
        <App />
      </div>
    </div>
  </Provider>
);
