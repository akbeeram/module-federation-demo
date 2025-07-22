import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const StoreTest = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    return (
    <>
        {count}
    </>);
}
export default StoreTest;