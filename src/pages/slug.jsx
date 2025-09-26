import React from "react";
import {mockData} from "../data.js";
import {useParams} from "react-router-dom";


function SlugPage(){
    const {id}=useParams()
  let product=  mockData.find(product=>product.id===+id)

    console.log(product);
    return(
<>
<h1>{product.name}</h1>
<h1>{product.number}</h1>
<h1>{product.id}</h1>

</>
    )
}
export default SlugPage