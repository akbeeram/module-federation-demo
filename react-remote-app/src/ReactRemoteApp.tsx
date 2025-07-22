import React, { useCallback } from "react";

const ReactRemoteApp = (props: any) => {
    const {dataFromNgHost, dataFromReactHost, onDataReceived} = props;

    const billingUtil = (window as any)['BillingUtilService'];
    console.log(billingUtil.billingData);
    console.log('getBillingData:::',billingUtil.getBillingData());
    return <>
        <h3>This is from React Remote App</h3>
        {dataFromNgHost ?? dataFromReactHost}
        <button onClick={() => onDataReceived('Ok, Received at React Remote!')}>Confirm from React</button>
    </>;
}
export default ReactRemoteApp;