import React from "react";
import WcWrapper from "./WcWrapper";
import AngularWrapper from "./AngularWrapper";
import { Provider } from "react-redux";
import { store } from "./store";
import StoreTest from "./StoreTest";

const ReactRemoteApp = React.lazy(() => import('reactRemoteApp/ReactRemoteApp'));
const ReactHostApp = () => {
    return <Provider store={store}>
        <h3>This is from React Host App</h3>
        <ReactRemoteApp dataFromReactHost="This is data from React Host" onDataReceived={(e: any) => console.log(e)} />
        <WcWrapper />
        <AngularWrapper />
    </Provider>;
}
export default ReactHostApp;