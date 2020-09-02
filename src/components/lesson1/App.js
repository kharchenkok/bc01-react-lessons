import React, { Fragment } from "react";
import { MarketPlace } from "./MarketPlace";
import { ProductList } from "./ProductList";

const image1 =
  "https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2018/12/facebook-marketplace-940x470.jpg";
const image2 =
  "https://upload.wikimedia.org/wikipedia/commons/c/cc/Seattle_marketplace.jpg";
const image3 =
  "https://image1.masterfile.com/getImage/841-03676911em-people-shopping-at-market-place-monge-paris.jpg";

const markets = [image1, image2, image3];

const imageConfig = {
  width: 400,
  height: "auto",
};
export function App() {
  return (
    <Fragment>
      {markets.map((el,index) => (
        <MarketPlace key={index} image={el} styleConfig={imageConfig} />
      ))}

      <ProductList />
    </Fragment>
  );
}
