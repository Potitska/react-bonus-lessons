import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useAppLocation} from "../hooks/useAppLocaion";
import {ICar} from "../interfaces/carInterface";

const CarDetailPage = () => {
    const {state: {id, brand, price, year}} = useAppLocation<ICar>();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarDetailPage};