import React from 'react';
import {useAppDispatch} from "../hooks/useAppDispatch";
import {countActions} from "../redux/slices/countSlice";


const CountPage = () => {
   const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(countActions.inc())}>inc</button>
            <button onClick={()=>dispatch(countActions.dec())}>dec</button>
            <button onClick={()=>dispatch(countActions.reset())}>res</button>
        </div>
    );
};

export {CountPage};