import React from "react";
import { createRoot } from "react-dom/client";
import ReactRemoteApp from './ReactRemoteApp';
import { Provider } from "react-redux";
import { store } from "reactHostApp/store";

const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <ReactRemoteApp />
    </Provider>
);