import React from "react";
import WcWrapper from "./WcWrapper";
import AngularWrapper from "./AngularWrapper";

const ReactRemoteApp = React.lazy(() => import('reactRemoteApp/ReactRemoteApp'));
const ReactHostApp = () => {
    return <>
        <h3>This is from React Host App</h3>
        <ReactRemoteApp dataFromReactHost="This is data from React Host" onDataReceived={(e: any) => console.log(e)} />
        <WcWrapper />
        <AngularWrapper />
    </>;
}
export default ReactHostApp;