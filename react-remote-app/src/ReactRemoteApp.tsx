import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment} from 'reactHostApp/store';

const ReactRemoteApp = (props: any) => {
    const {dataFromNgHost, dataFromReactHost, onDataReceived} = props;

    const billingUtil = (window as any)['BillingUtilService'];
    console.log(billingUtil?.billingData);
    console.log('getBillingData:::', billingUtil?.getBillingData());
    // const count = useSelector((state: any) => state.counter.count);
    // const dispatch = useDispatch();
    return <>
        <h3>This is from React Remote App</h3>
        {/* {count} */}
        {dataFromNgHost ?? dataFromReactHost}
        <button onClick={() => onDataReceived('Ok, Received at React Remote!')}>Confirm from React</button>
        {/* <button onClick={() => dispatch(increment())}>Access/Update parent store item</button> */}
    </>;
}
export default ReactRemoteApp;