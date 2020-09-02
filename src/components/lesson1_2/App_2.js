import React, { Fragment } from "react";
import { MarketPlace } from "./MarketPlace_2";
import products from './assets/products.json'
console.log(products);

export function App() {
  return (
    <Fragment>
    
        <MarketPlace products={products} />
    </Fragment>
  );
}
