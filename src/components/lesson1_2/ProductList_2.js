import React from "react";
import { ProductListItem } from "./ProductListItem_2";

export function ProductList({products}){
    console.log('products', products);
    return (
        <ul style={{display:"flex", flexWrap: "wrap", listStyle:'none', justifyContent:'space-between'}}>
            {products.map(product=> 
            product.isFreeShipping ? (<ProductListItem key={product.id}{...product}/>): null)}
        </ul>
    );
}