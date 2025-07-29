import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "reactHostApp/store";
import './ReactRemoteApp.css';

const ReactRemoteApp = (props: any) => {
    const { dataFromHost, onReceviedData } = props;

    // const count = useSelector((state: any) => state.counter);
    // const dispatch = useDispatch();

    return <>
        <h4>React Remote App</h4>
        <div className="remote-container">
            <div>
                <div className="remote-container-msg">{dataFromHost}</div>
                <button onClick={() => onReceviedData('Ok! Data received at React Remote')}>Send to Host</button>
            </div>
            <div style={{ textAlign: 'right' }}>
                {/* <div className="remote-container-msg">Data from React host store: <b>{count}</b></div> */}
                {/* <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button> */}
            </div>
        </div>
    </>;
}
export default ReactRemoteApp;