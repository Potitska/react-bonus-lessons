import React, {useEffect, useState} from 'react';
import ProductShort from "../product-short/ProductShort";
import {getProducts, getPtoductById} from "../../api/producs/products.service.api";
import ProductDetails from "../product-details/ProductDetails";

const ProductsLayout = () => {
    let title = 'Product Main Layout'
    const [products, setProducts] = useState([]);
    const [chosenProduct, setChosenProduct] = useState(null);

    const onChooseProduct = (prodId) => {
        getPtoductById(prodId).then(value => {
            setChosenProduct({...value});
        })
    }

    useEffect(() => {
        getProducts()
            .then(({products}) => {
                setProducts([...products])
            })
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            {chosenProduct && <div>
                    <hr/>
                    <div>
                        <ProductDetails details={chosenProduct}/>
                    </div>
                    <hr/>
                </div>
            }
            <ul>
                {
                    products.map((value) => <ProductShort key={value.id} data={value} onChooseProduct={onChooseProduct}/>)
                }
            </ul>
        </div>
    )
        ;
};

export default ProductsLayout;