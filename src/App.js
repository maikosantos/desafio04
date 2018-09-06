import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";
import "./styles/global";

import Routes from "./routes";
import store from "./store";

import Loading from "./components/Loading";

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Loading />
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
