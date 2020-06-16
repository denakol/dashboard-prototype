import React from "react";
import "./App.css";
import UserProvider from "./auth/UserProvider";
import Routes from "./routes/Routes";
import "antd/dist/antd.css";
import {getStore} from "./redux/store/store";
import {Provider} from "react-redux"

const store = getStore()

function App() {
    return (
        <Provider store={store}>
            <UserProvider>
                <Routes/>
            </UserProvider>
        </Provider>
    );
}

export default App;
