import React from "react";

export function MarketPlace(props) {
    console.log('props', props);
  return (
    <div>
        <img src={props.image} alt='marketplace' style={props.styleConfig}/>
      <h2>Market Place</h2>
    </div>
  );
}
