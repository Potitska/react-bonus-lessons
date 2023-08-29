import React from 'react';
import {getPtoductById} from "../../api/producs/products.service.api";

const ProductShort = ({data,onChooseProduct}) => {
    const {id, title, description} = data;

    const onAllProductDetaillick = ()=> {
        onChooseProduct(id);
    }

    return (
        <li>
            {id} {title}
            <br/>
            {description}
            <button onClick={onAllProductDetaillick}>all product details</button>
        </li>
    );
}

export default ProductShort;