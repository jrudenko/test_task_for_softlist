import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {/* <BrowserRouter basename="/test_task_for_softlist"> */}
      <App />
      {/* </BrowserRouter> */}
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
