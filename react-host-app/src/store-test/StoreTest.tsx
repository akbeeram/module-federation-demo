import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./../store";
import './StoreTest.css';

const StoreTest = () => {
    const count = useSelector((state: any) => state.counter);
    const dispatch = useDispatch();

    return <div className="storeTest">
        <div>Store Data at React Host: <b>{count}</b></div>
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    </div>;
}
export default StoreTest;