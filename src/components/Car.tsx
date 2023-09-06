import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../interfaces/carInterface";
import {useNavigate} from "react-router-dom";

interface IProps{
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    let {id,brand} = car;
    let navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={()=>navigate(id.toString(),{state:car})}>Details</button>
        </div>
    );
};


export {Car};