import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

// tailwind CSS
import "./styles/styles.css";

// 리액트 부트스트랩
import "bootstrap/dist/css/bootstrap.min.css";

// 리덕스 설치 시 피요한 코드
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./redux/reducer";
import { HelmetProvider, Helmet } from "react-helmet-async";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider
        store={createStoreWithMiddleware(
          Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <Router>
          <App>
            <Helmet>
              <title>종만세무</title>
            </Helmet>
          </App>
        </Router>
      </Provider>
    </React.StrictMode>
  </HelmetProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
