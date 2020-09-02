import React from "react";

export function ProductListItem(props){
    return <li style ={{border:'1px solid green', borderRadius:10, width:200}}> 
        <h2>{props.title}</h2>
        <p>{props.style}</p>
    </li>
}