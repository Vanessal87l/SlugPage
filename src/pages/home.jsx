import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {mockData} from "../data.js";

function Home() {
    return (
        <div className="grid grid-cols-3 gap-10 border">
            {mockData.map(({id,name,number})=>(

        <div key={id} className="w-[120px] h-[200px] border flex items-center justify-center flex-col">
       <h2>{name}</h2>
            <h2>{id}</h2>
            <Link to={`/product/${id}`}>{name}</Link>
            <h2>{number}</h2>
            <img className="w-[80px] h-[50px]" src="https://www.bmw-special-sales.com/content/dam/bmw/marketBMWCOM/bmw-special-sales_com/common/protection/7-protection/bmw-css-7-series-protection-ms-new-standard.jpg" alt=""/>
        </div>
            ))}
        </div>
    )
}

export default Home