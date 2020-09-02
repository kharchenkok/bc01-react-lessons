
import React from "react";
import { ProductList } from "./ProductList_2";

export function MarketPlace({products}) {
    console.log('products', products);
  return <ProductList products={products} />;
}
